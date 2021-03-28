import Component from 'flarum/Component';

export default class FieldComposer extends Component {
    init() {
        this.content = this.props.value;
        this.field = this.props.field;
        this.answers = this.props.answers;
    }    
    view() {
        return m('input.FormControl',{
           // ClassName: 'alterbyteBid',
           placeholder: 'please enter bid',
            value: this.content,
            oninput: e => {
                this.content = e.target.value;
                this.attrs.onchange(e.target.value)
            }
        });
    }
};