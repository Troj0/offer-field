 import app from 'flarum/app';
 import {extend} from 'flarum/extend';
 import EditPostComposer from 'flarum/components/EditPostComposer';
 import ReplyComposer from 'flarum/components/ReplyComposer';
 import CommentPost from 'flarum/components/CommentPost';
 import DiscussionHero from 'flarum/components/DiscussionHero';
import Stars from './components/stars';
import Answer from './../lib/models/Answer';
import Field from './../lib/models/Field';
import FieldComposer from './components/FieldComposer';
import CommentField from './components/CommentField';
import { username } from './components/Auth';
var Auth = require("./components/Auth")


app.initializers.add('alterbyte/offer-field', () => {
      
      
    //const value = this.props.value
    extend(ReplyComposer.prototype, 'init', function() { 
      this.alterbyteBidding = null;
    });
    extend(ReplyComposer.prototype, 'headerItems', function(items) {
        items.add('alterbyte-bidding', FieldComposer.component({
          readonly: false,
          value: this.alterbyteBidding,
          
          onchange: value => {
            this.alterbyteBidding = value;
            //console.log(this.bid)
          },
      }));
    });
    extend(ReplyComposer.prototype, 'data', function(data) {
      data.alterbyteBidding = this.alterbyteBidding 
   });

    extend(CommentPost.prototype, 'headerItems', function(items) {
      const thisPost = this.attrs.post;
      const bidding = this.attrs.post.attribute('alterbyteBidding');
      if (app.forum.attribute('alterbyteBiddingCanSubmit') && thisPost.number() != 1 && bidding !== null){
        const bidding = this.attrs.post.attribute('alterbyteBidding') + " ر.س";
        if(bidding !== null || bidding !== '' || bidding !== 0) {
          items.add('alterbyte-bidding', CommentField.component({
            value: bidding,
            }))
        }
        }
    });
});
