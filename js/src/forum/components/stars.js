import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';
import TextEditor from 'flarum/Component/TextEditor';
//import { FormControl } from '@Angular/forms';


export default class Stars extends Component {
    //rating = null;
    view() {
        const rating = this.content;
        return m('input.FormControl',  {
            className: this.props.editable ? 'editable' : '',
            value: this.content,
            placeholder: 'hello',
            content: this.props.editable ? 'editable' : '',
            
            oninput: m.withAttr('value', rating => {
                this.content = this.props.value;
                this.props.value = rating;
                
                //if the field content is deleted
                if (this.content === '') {
                    //this.onchange(console.log([]));
                }
                else {
                    //console.log(this.content)
                    this.props.onchange(rating)
                    value: this.rating
                    //console.log(this.props.value, 'its me')
                    
                }
                //console.log(this.content)
                rating = this.content
                //valueX = rating
                

                
            },            
            ),
            //placeholder: this.fieldPlaceholder(),
            //content: this.content
        
        })
        
        }
        //fieldPlaceholder() {
         //   if (rating) {
           //     return rating;
           // }
    
           // return '';
       // }
        
    };
    //data(){ return { title: this.title(), content: this.content(), }}
