import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import SettingsPage from 'flarum/forum/components/SettingsPage';
import Switch from 'flarum/common/components/Switch';

app.initializers.add('huoxin/auto-follow-discussion', () => {
  extend(SettingsPage.prototype, 'notificationsItems', function (items) {
    items.add(
      'followOnCreate',
      Switch.component(
        {
          className: 'followOnCreate',
          state: this.user.preferences().followAfterCreate,
          onchange: (value) => {
            this.followOnCreateLoading = true;
            this.user?.savePreferences({ followAfterCreate: value }).then(() => {
              this.followOnCreateLoading = false;
              m.redraw();
            });
          },
          loading: this.followOnCreateLoading,
        },
        app.translator.trans('huoxin-auto-follow-discussion.forum.default-follow-after-create-label')
      ),
      8
    );
  });
});