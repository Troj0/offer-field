import app from 'flarum/app';
import Model from 'flarum/Model';
import Component from 'flarum/Component';

export default class Stars extends Component {
    init() {
        this.field = this.props.field;
        this.answers = this.props.answers;
        this.onchange = this.props.onchange;

        this.content = '';

        const answersForThisField = this.answers;

       
    }

    view() {
        return m('input.FormControl', {
            //required: this.field.required(),
            value: this.content,
            oninput: m.withAttr('value', value => {
                this.content = value;

                if (this.content === '') {
                    throw('Please enter value')
                }
            }),
            placeholder: this.fieldPlaceholder(),
        });
    }

    fieldPlaceholder() {
        if (app.forum.attribute('fof-mason.labels-as-placeholders')) {
            return this.field.name() + (this.field.required() ? ' *' : '');
        }

        return '';
    }
}
