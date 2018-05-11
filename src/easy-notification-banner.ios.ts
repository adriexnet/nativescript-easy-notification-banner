import { Common } from './easy-notification-banner.common';

declare const
  RMessage: any,
  RMessageView: any,
  RMessageTypeNormal: any,
  RMessageTypeSuccess: any,
  RMessageTypeWarning: any,
  RMessageTypeError: any,
  RMessageDurationAutomatic: any,
  RMessagePositionNavBarOverlay: any
;

export class EasyNotificationBanner extends Common {
  show(title: string, description: string, type: number): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      try {
        RMessage
          .showNotificationWithTitleSubtitleIconImageTypeCustomTypeNameDurationCallbackButtonTitleButtonCallbackAtPositionCanBeDismissedByUser(
            title,
            description,
            null, // iconImage
            type, // banner type
            null, // custom style key
            RMessageDurationAutomatic,
            () => resolve(),
            null, // button text,
            null, // button callback
            RMessagePositionNavBarOverlay,
            true, // user can close
        );
      } catch (error) {
        reject(error);
      }
    });

    return promise;
  }

  showInfo(title: string, description: string): Promise<any> {
    return this.show(title, description, RMessageTypeNormal);
  }

  showSuccess(title: string, description: string): Promise<any> {
    return this.show(title, description, RMessageTypeSuccess);
  }

  showWarning(title: string, description: string): Promise<any> {
    return this.show(title, description, RMessageTypeWarning);
  }

  showError(title: string, description: string): Promise<any> {
    return this.show(title, description, RMessageTypeError);
  }

  constructor() {
    super();
    RMessage.setDefaultViewController(UIApplication.sharedApplication.keyWindow.rootViewController);
  }
}
