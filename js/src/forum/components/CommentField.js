import Component from 'flarum/Component';

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