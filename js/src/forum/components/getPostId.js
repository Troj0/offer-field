import DiscussionPage from 'flarum/components/DiscussionPage';

export default function() {
    app.routes['alterbyte/offer-field-view-Profile'] = {
        path: '/d/:id',
        component: DiscussionPage.component(),
    };
}