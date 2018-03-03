import { Settings as SettingsInterface } from '../interfaces/settings';
export declare const defaultSettings: SettingsInterface;
export declare class Settings implements SettingsInterface {
    startIndex: any;
    bufferSize: any;
    padding: any;
    infinite: any;
    debug: boolean;
    itemIdPrefix: string;
    clipAfterFetchOnly: boolean;
    constructor(settings?: SettingsInterface);
}
