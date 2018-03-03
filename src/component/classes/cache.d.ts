import { Direction } from '../interfaces/direction';
import { Item } from './item';
export declare class ItemCache {
    $index: number;
    nodeId: string;
    data: any;
    params: ClientRect;
    constructor(item: Item);
    getEdge(direction: Direction, opposite?: boolean): number;
}
export declare class Cache {
    items: Array<ItemCache>;
    constructor();
    add(item: Item): void;
    get(index: number): ItemCache;
}
