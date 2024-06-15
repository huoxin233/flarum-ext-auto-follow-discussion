import app from 'flarum/admin/app';

app.initializers.add('huoxin/auto-follow-discussion', () => {
  app.extensionData
    .for('huoxin-auto-follow-discussion')
    .registerSetting({
      setting: 'huoxin-auto-follow-discussion.defaultFollowAfterCreate',
      type: 'switch',
      label: app.translator.trans('huoxin-auto-follow-discussion.admin.default-follow-after-create-label'),
      help: app.translator.trans('huoxin-auto-follow-discussion.admin.default-follow-after-create-help'),
    })
    .registerSetting({
      setting: 'huoxin-auto-follow-discussion.defaultFollowAfterRead',
      type: 'switch',
      label: app.translator.trans('huoxin-auto-follow-discussion.admin.default-follow-after-read-label'),
      help: app.translator.trans('huoxin-auto-follow-discussion.admin.default-follow-after-read-help'),
    });
});
