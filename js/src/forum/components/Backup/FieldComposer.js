import app from 'flarum/app';
import Component from 'flarum/Component';
import Model from 'flarum/Model';
export default class FieldComposer extends Component {
    init() {
        //this.rating = this.props.value
        this.content = this.props.value;
        this.field = this.props.field;
        this.answers = this.props.answers;
        //this.onchange = this.props.onchange();
        
       // var bid = {
           // model: function(rating) {this.rating = m.prop(rating);},
           // };
           // var bidding = new bid.model(bid.rating)
            //this.controlleR = bidding
    }    

    view() {
        //var control = this.controlleR
        //var value = this.value
        
        return m('input', {
            ClassName: 'alterbyte-ratings',
            value: this.content,
            oninput: m.withAttr('value', value => {
                this.content = value
                this.props.onchange(value)

                if (this.content === '') {
                    console.log('empty')
                } else {
                    const answer = this.content
                    console.log(answer + ' not empty')

                }
            }),
        });
    }
};