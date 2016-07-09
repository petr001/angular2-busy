import { Subscription } from 'rxjs';
export declare class BusyConfig implements IBusyConfig {
    template: string;
    delay: number;
    minDuration: number;
    backdrop: boolean;
    message: string;
    wrapperClass: string;
    constructor(config?: IBusyConfig);
}
export interface IBusyConfig {
    template?: string;
    delay?: number;
    minDuration?: number;
    backdrop?: boolean;
    message?: string;
    wrapperClass?: string;
    promise?: Promise<any> | Subscription | Array<Promise<any> | Subscription>;
}
export declare const BUSY_CONFIG_DEFAULTS: {
    template: string;
    delay: number;
    minDuration: number;
    backdrop: boolean;
    message: string;
    wrapperClass: string;
};
