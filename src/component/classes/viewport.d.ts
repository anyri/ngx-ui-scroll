import { ElementRef } from '@angular/core';
import { Padding } from './padding';
import { Direction } from '../interfaces/direction';
import { Settings } from './settings';
export declare class ViewportPadding {
    forward: Padding;
    backward: Padding;
    constructor(element: any);
}
export declare class Viewport {
    private settings;
    private host;
    scrollable: any;
    padding: ViewportPadding;
    syntheticScrollPosition: number;
    private lastPosition;
    constructor(elementRef: ElementRef, settings: Settings);
    readonly children: HTMLCollection;
    scrollPosition: number;
    saveScrollPosition(): void;
    getLastPosition(): number;
    getSize(): number;
    getScrollableSize(): number;
    getBufferPadding(): number;
    getEdge(direction: Direction, opposite?: boolean): number;
    getLimit(direction: Direction, opposite?: boolean): number;
}
