import app from 'flarum/app';
import Component from 'flarum/Component';
import Model from 'flarum/Model';
export default class FieldComposer extends Component {
    init() {
        //this.content = this.props.value;
        //this.field = this.props.field;
        //this.answers = this.props.answers;
    }    
    view() {
        return m('input',{
            ClassName: 'alterbyteBid',
           placeholder: 'please enter bid',
            value: this.attrs.value,
            readonly: true,
        });
    }
};