import { Common } from './easy-notification-banner.common';
export declare enum Position {
    TOP,
    NAV_BAR_OVERLAY,
    BOTTOM,
}
export declare class EasyNotificationBanner extends Common {
    private _viewController;
    private _position;
    viewController: any;
    position: Position;
    show(title: string, description: string, type: number): Promise<any>;
    showInfo(title: string, description: string): Promise<any>;
    showSuccess(title: string, description: string): Promise<any>;
    showWarning(title: string, description: string): Promise<any>;
    showError(title: string, description: string): Promise<any>;
    constructor(position?: Position);
}
