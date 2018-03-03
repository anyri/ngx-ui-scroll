import { Direction } from '../interfaces/direction';
export declare class Padding {
    element: any;
    direction: Direction;
    constructor(element: any, direction: Direction);
    size: number;
    getEdge(): number;
}
