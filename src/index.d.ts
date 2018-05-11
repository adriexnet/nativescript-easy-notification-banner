import { Common } from './easy-notification-banner.common';
export declare class EasyNotificationBanner extends Common {
    show(title: string, description: string, type: number): Promise<any>;
    showInfo(title: string, description: string): Promise<any>;
    showSuccess(title: string, description: string): Promise<any>;
    showWarning(title: string, description: string): Promise<any>;
    showError(title: string, description: string): Promise<any>;
    constructor();
}
