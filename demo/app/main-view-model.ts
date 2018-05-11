import { Observable } from 'tns-core-modules/data/observable';
import { EasyNotificationBanner } from 'nativescript-easy-notification-banner';

export class HelloWorldModel extends Observable {
  private notificationBanner: EasyNotificationBanner;

  constructor() {
    super();
    this.notificationBanner = new EasyNotificationBanner();
  }

  public showInfo() {
    this.notificationBanner.showInfo('Info', 'Some information');
  }

  public showSuccess() {
    this.notificationBanner.showSuccess('Success', 'Some success message');
  }

  public showWarning() {
    this.notificationBanner.showWarning('Warning', 'Some warning');
  }

  public showError() {
    this.notificationBanner.showError('Error', 'Some error');
  }
}
