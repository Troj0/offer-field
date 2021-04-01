import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import LogInModal from 'flarum/components/LogInModal';

export default class LoginBtn extends Component {
    init() {
    const str = "Free Web Building Tutorials!";
    const result = str.link("https://www.w3schools.com");
    }
    view() {
          function login() {

            app.modal.show(LogInModal);
          }
        return [
        <a className="LogInModal-seeBids">
        <a onclick={login.bind(this)}>{'Please login to see bid'}</a>
        </a>
];    
    }
}