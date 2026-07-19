import 'flarum/forum/components/SettingsPage';
import 'flarum/common/models/User';

declare module 'flarum/forum/components/SettingsPage' {
  export default interface SettingsPage {
    followAfterReadLoading?: boolean;
    followOnCreateLoading?: boolean;
  }
}

declare module 'flarum/common/models/User' {
  export default interface User {
    preferences(): Record<string, any>;
  }
}
