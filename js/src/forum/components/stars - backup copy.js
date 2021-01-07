import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';


export default class Stars extends Component {
    view() {
        return m('.Stars', {
            className: this.props.editable ? 'editable' : '',
        }, [1,2,3,4,5].map(rating => {
            const active = this.props.value >= rating;
            return icon(`fa${active ? 's' : 'r'} fa-star`, {
                onclick: () => {
                    if (!this.props.editable) {
                        return;
                    }
                    
                    if (this.props.value === rating) {
                        // if the rating is already equals 1 and removed it will equal 0 or null
                        if (rating === 1) {
                            this.props.onchange(null);
                        }
                        // if this activates it remove one star from the total ration
                        this.props.onchange(rating -1);
                    } else {
                        this.props.onchange(rating)
                    }
                }
            });
        }));
    }
}
