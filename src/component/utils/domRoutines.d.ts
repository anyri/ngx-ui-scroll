import { Direction } from '../interfaces/direction';
export declare class Routines {
    static getScrollPosition(element: any): number;
    static setScrollPosition(element: any, value: number): void;
    static getParams(element: any): ClientRect;
    static getSize(element: any): number;
    static getScrollableSize(element: any): number;
    static getRectEdge(params: ClientRect, direction: Direction, opposite?: boolean): number;
    static getEdge(element: any, direction: Direction, opposite?: boolean): number;
    static getEdge2(element: any, direction: Direction, relativeElement?: any, opposite?: boolean): number;
    static hideElement(element: any): void;
}
