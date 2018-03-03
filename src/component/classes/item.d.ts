import { Direction } from '../interfaces/direction';
export declare class Item {
    $index: number;
    nodeId: string;
    data: any;
    element: any;
    invisible: boolean;
    toRemove: boolean;
    constructor($index: any, data: any, nodeId: any);
    getParams(): ClientRect;
    getEdge(direction: Direction, opposite?: boolean): number;
    hide(): void;
}
