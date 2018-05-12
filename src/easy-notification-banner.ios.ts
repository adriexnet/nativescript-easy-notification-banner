import { Common } from './easy-notification-banner.common';

declare const
  RMessage: any,
  RMessageView: any,
  RMessageTypeNormal: any,
  RMessageTypeSuccess: any,
  RMessageTypeWarning: any,
  RMessageTypeError: any,
  RMessageDurationAutomatic: any,
  RMessagePositionTop: any,
  RMessagePositionNavBarOverlay: any,
  RMessagePositionBottom: any
;

export enum Position {
  TOP = RMessagePositionTop,
  NAV_BAR_OVERLAY = RMessagePositionNavBarOverlay,
  BOTTOM = RMessagePositionBottom,
}

export class EasyNotificationBanner extends Common {
  private _viewController: any = null;
  private _position: number = null;

  get viewController() {
    if (this._viewController !== null) {
      return this._viewController;
    }

    let rootViewController = UIApplication.sharedApplication.keyWindow.rootViewController;
    if (rootViewController) {
      this._viewController = rootViewController;
      return this._viewController;
    }

    if (UIApplication.sharedApplication.windows.count < 1) {
      throw new Error('viewController not found');
    }

    rootViewController = UIApplication.sharedApplication.windows[0].rootViewController;
    if (rootViewController) {
      this._viewController = rootViewController;
      return this._viewController;
    }

    throw new Error('viewController not found');
  }
  set viewController(viewController) {
    this._viewController = viewController;
  }

  get position() {
    if (this._position !== null) {
      return this._position;
    }
    return Position.NAV_BAR_OVERLAY;
  }
  set position(position: Position) {
    this._position = position;
  }

  show(title: string, description: string, type: number): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      try {
        RMessage.setDefaultViewController(this.viewController);
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
            this.position,
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

  constructor(position: Position = null) {
    super();
    this.position = position;
  }
}
