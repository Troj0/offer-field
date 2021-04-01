 import app from 'flarum/app';
 import {extend} from 'flarum/extend';
 import ReplyComposer from 'flarum/components/ReplyComposer';
 import CommentPost from 'flarum/components/CommentPost';
import FieldComposer from './components/FieldComposer';

import CommentField from './components/CommentField';
import LoginBtn from './components/LoginBtn';

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
      const thisPostAttr = this.attrs.post.data;
      const bidding = this.attrs.post.attribute('alterbyteBidding');
      if ( thisPost.number() != 1 && bidding !== null){
        if(typeof(bidding) == "undefined"){
        items.add('alterbyte-bidding', LoginBtn.component({
          }))
      }
        if(typeof(bidding) == 'number'){const bidding = this.attrs.post.attribute('alterbyteBidding') + " ر.س";}
        if(bidding) {
          items.add('alterbyte-bidding', CommentField.component({
            value: bidding,
            }))
        }
        }
    });
});
