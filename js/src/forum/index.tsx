import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Switch from 'flarum/common/components/Switch';
import type Discussion from 'flarum/common/models/Discussion';
import type SettingsPage from 'flarum/forum/components/SettingsPage';
import type Mithril from 'mithril';
import type ItemList from 'flarum/common/utils/ItemList';

app.initializers.add('huoxin/auto-follow-discussion', () => {
  extend('flarum/forum/components/SettingsPage', 'notificationsItems', function (this: SettingsPage, items: ItemList<Mithril.Children>) {
    items.add(
      'followAfterRead',
      <Switch
        className="followAfterRead"
        state={this.user?.preferences()?.followAfterRead}
        onchange={(value: boolean) => {
          this.followAfterReadLoading = true;
          this.user?.savePreferences({ followAfterRead: value }).then(() => {
            this.followAfterReadLoading = false;
            m.redraw();
          });
        }}
        loading={this.followAfterReadLoading}
      >
        {app.translator.trans('huoxin-auto-follow-discussion.forum.default-follow-after-read-label')}
      </Switch>,
      9
    );

    items.add(
      'followAfterCreate',
      <Switch
        className="followAfterCreate"
        state={this.user?.preferences()?.followAfterCreate}
        onchange={(value: boolean) => {
          this.followOnCreateLoading = true;
          this.user?.savePreferences({ followAfterCreate: value }).then(() => {
            this.followOnCreateLoading = false;
            m.redraw();
          });
        }}
        loading={this.followOnCreateLoading}
      >
        {app.translator.trans('huoxin-auto-follow-discussion.forum.default-follow-after-create-label')}
      </Switch>,
      8
    );
  });

  extend('flarum/common/models/Discussion', 'save', function (this: Discussion, promise: Promise<any> | undefined, attributes: any) {
    if (promise && attributes && attributes.lastReadPostNumber) {
      promise.then(() => m.redraw());
    }
  });
});
