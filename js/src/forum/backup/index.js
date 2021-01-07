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
import { username } from './components/Auth';
var Auth = require("./components/Auth")


app.initializers.add('alterbyte/offer-field', () => {
      
      
    //const value = this.props.value
    extend(ReplyComposer.prototype, 'init', function() { 
      this.rating = null;
    });
    extend(ReplyComposer.prototype, 'headerItems', function(items) {
        items.add('alterbyte-ratings', FieldComposer.component({
          value: this.rating,
          onchange: value => {
            this.rating = value;
            console.log(this.rating)
          },

          
          
          

          //value: Auth.username,
         // value: this.rating,
          //oninput: m.withAttr('value', this.rating),
          
          //onchange: m.withAttr("value", controller.bidding.rating), value: controller.bidding.rating(),

          //rating: value,
          
          
          //onchange: m.withAttr("value", Auth.setUsername.bind(this)), value: Auth.username,
         //oninput: m.withAttr("value", Auth.setUsername.bind(this)), value: Auth.username,
                
      }));
      //console.log(rating)

    });
    //extend(ReplyComposer.prototype, 'data', function(data) {
      //FieldComposer.component({
        //onsubmit: getAttr('value')})
     // data.rating = this.rating 
   //});

  //  extend(CommentPost.prototype, 'headerItems', function(items) {
      //if (app.forum.attribute('alterbyteRatingCanSubmit')){
        //console.log(this.rating)
    //    items.add('.alogin', FieldComposer.component({
    //     value: this.rating,
     //    text: this.value,
    //      editable: false,
    //      }))//}
  //  });
});
//app.initializers.add('alterbyte/offer-field', app => {
 // app.store.models['alter-answers'] = Answer;
//});
