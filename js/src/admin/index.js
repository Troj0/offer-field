import app from 'flarum/app';
import {extend} from 'flarum/extend';
import PermissionGrid from 'flarum/components/PermissionGrid';

app.initializers.add('alterbyte/offer-field', () => {

  extend(PermissionGrid.prototype, 'viewItems', function (items) {
    items.add('alterbyte-bidding', {
      icon: 'fas fa-star-half-alt',
      label: app.translator.trans('alterbyte-bidding.admin.permission.view'),
      permission: 'alterbyteBidding.view',
      allowGuest: true,
    });
  });
  extend(PermissionGrid.prototype, 'replyItems', function (items) {
    items.add('alterbyte-bidding', {
      icon: 'fas fa-star-half-alt',
      label: app.translator.trans('alterbyte-bidding.admin.permission.submit'),
      permission: 'alterbyteBidding.submit',
    });
  });
  extend(PermissionGrid.prototype, 'moderateItems', function (items) {
    items.add('alterbyte-bidding', {
      icon: 'fas fa-star-half-alt',
      label: app.translator.trans('alterbyte-bidding.admin.permission.moderate'),
      permission: 'alterbyteBidding.moderate',
    });
  });
});
