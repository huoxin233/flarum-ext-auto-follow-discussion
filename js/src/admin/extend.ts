import Extend from 'flarum/common/extenders';
import app from 'flarum/admin/app';

export default [
  new Extend.Admin()
    .setting(() => ({
      setting: 'huoxin-auto-follow-discussion.defaultFollowAfterCreate',
      type: 'switch',
      label: app.translator.trans('huoxin-auto-follow-discussion.admin.default-follow-after-create-label'),
      help: app.translator.trans('huoxin-auto-follow-discussion.admin.default-follow-after-create-help'),
    }))
    .setting(() => ({
      setting: 'huoxin-auto-follow-discussion.defaultFollowAfterRead',
      type: 'switch',
      label: app.translator.trans('huoxin-auto-follow-discussion.admin.default-follow-after-read-label'),
      help: app.translator.trans('huoxin-auto-follow-discussion.admin.default-follow-after-read-help'),
    })),
];
