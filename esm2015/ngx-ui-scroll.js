/**
 * @license ngx-ui-scroll
 * MIT license
 */

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, Directive, ElementRef, Input, NgModule, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable as Observable$1 } from 'rxjs/Observable';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/BehaviorSubject';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const defaultSettings = {
    startIndex: 1,
    bufferSize: 5,
    padding: 0.5,
    infinite: false
};
class Settings {
    /**
     * @param {?=} settings
     */
    constructor(settings) {
        // internal settings
        this.debug = false;
        this.itemIdPrefix = 'ui-scroll-0-';
        this.clipAfterFetchOnly = false;
        Object.assign(this, defaultSettings);
        if (settings && typeof settings === 'object') {
            Object.assign(this, settings);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const Direction = {
    forward: 'forward',
    backward: 'backward',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Routines {
    /**
     * @param {?} element
     * @return {?}
     */
    static getScrollPosition(element) {
        return element['scrollTop'];
    }
    /**
     * @param {?} element
     * @param {?} value
     * @return {?}
     */
    static setScrollPosition(element, value) {
        element['scrollTop'] = value;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    static getParams(element) {
        return element.getBoundingClientRect();
    }
    /**
     * @param {?} element
     * @return {?}
     */
    static getSize(element) {
        return Routines.getParams(element)['height'];
    }
    /**
     * @param {?} element
     * @return {?}
     */
    static getScrollableSize(element) {
        return element['scrollHeight'];
    }
    /**
     * @param {?} params
     * @param {?} direction
     * @param {?=} opposite
     * @return {?}
     */
    static getRectEdge(params, direction, opposite) {
        const /** @type {?} */ forward = !opposite ? Direction.forward : Direction.backward;
        return params[direction === forward ? 'bottom' : 'top'];
    }
    /**
     * @param {?} element
     * @param {?} direction
     * @param {?=} opposite
     * @return {?}
     */
    static getEdge(element, direction, opposite) {
        const /** @type {?} */ params = Routines.getParams(element);
        return Routines.getRectEdge(params, direction, opposite);
    }
    /**
     * @param {?} element
     * @param {?} direction
     * @param {?=} relativeElement
     * @param {?=} opposite
     * @return {?}
     */
    static getEdge2(element, direction, relativeElement, opposite) {
        const /** @type {?} */ result = element.offsetTop - (relativeElement ? relativeElement.scrollTop : 0) +
            (direction === (!opposite ? Direction.forward : Direction.backward) ? Routines.getSize(element) : 0);
        return result;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    static hideElement(element) {
        element.style.display = 'none';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Padding {
    /**
     * @param {?} element
     * @param {?} direction
     */
    constructor(element, direction) {
        this.element = null;
        this.element = element.querySelector(`[data-padding-${direction}]`);
        this.direction = direction;
    }
    /**
     * @return {?}
     */
    get size() {
        return parseInt(this.element.style.height, 10) || 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set size(value) {
        this.element.style.height = `${value}px`;
    }
    /**
     * @return {?}
     */
    getEdge() {
        return Routines.getEdge(this.element, this.direction, true);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ViewportPadding {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.forward = new Padding(element, Direction.forward);
        this.backward = new Padding(element, Direction.backward);
    }
}
class Viewport {
    /**
     * @param {?} elementRef
     * @param {?} settings
     */
    constructor(elementRef, settings) {
        this.settings = settings;
        this.host = elementRef.nativeElement;
        this.scrollable = elementRef.nativeElement.parentElement;
        this.padding = new ViewportPadding(this.host);
        this.syntheticScrollPosition = null;
    }
    /**
     * @return {?}
     */
    get children() {
        return this.host.children;
    }
    /**
     * @return {?}
     */
    get scrollPosition() {
        return Routines.getScrollPosition(this.scrollable);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set scrollPosition(value) {
        Routines.setScrollPosition(this.scrollable, value);
        this.syntheticScrollPosition = this.scrollPosition;
    }
    /**
     * @return {?}
     */
    saveScrollPosition() {
        this.lastPosition = this.scrollPosition;
    }
    /**
     * @return {?}
     */
    getLastPosition() {
        return this.lastPosition;
    }
    /**
     * @return {?}
     */
    getSize() {
        return Routines.getSize(this.scrollable);
    }
    /**
     * @return {?}
     */
    getScrollableSize() {
        return Routines.getScrollableSize(this.scrollable);
    }
    /**
     * @return {?}
     */
    getBufferPadding() {
        return this.getSize() * this.settings.padding;
    }
    /**
     * @param {?} direction
     * @param {?=} opposite
     * @return {?}
     */
    getEdge(direction, opposite) {
        return Routines.getEdge(this.scrollable, direction, opposite);
    }
    /**
     * @param {?} direction
     * @param {?=} opposite
     * @return {?}
     */
    getLimit(direction, opposite) {
        return this.getEdge(direction, opposite) +
            (direction === (!opposite ? Direction.forward : Direction.backward) ? 1 : -1) * this.getBufferPadding();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ItemCache {
    /**
     * @param {?} item
     */
    constructor(item) {
        this.$index = item.$index;
        this.nodeId = item.nodeId;
        this.data = item.data;
        this.params = item.getParams();
    }
    /**
     * @param {?} direction
     * @param {?=} opposite
     * @return {?}
     */
    getEdge(direction, opposite) {
        return Routines.getRectEdge(this.params, direction, opposite);
    }
}
class Cache {
    constructor() {
        this.items = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    add(item) {
        const /** @type {?} */ found = this.items.find(i => i.$index === item.$index);
        if (found) {
            found.data = item.data;
            found.params = item.getParams();
        }
        else {
            // todo: do we need the list to be sorted? maybe an object?
            this.items.push(new ItemCache(item));
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    get(index) {
        return this.items.find(i => i.$index === index);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Index {
    constructor() {
        this.forward = null;
        this.backward = null;
    }
}
class Buffer {
    constructor() {
        this.$items = new BehaviorSubject$1(null);
        this.items = [];
        this.bof = false;
        this.eof = false;
        this.lastIndex = new Index();
        this.cache = new Cache();
    }
    /**
     * @param {?} items
     * @return {?}
     */
    set items(items) {
        this._items = items;
        if (items.length) {
            this.setLastIndices();
        }
        this.$items.next(items);
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @return {?}
     */
    setLastIndices() {
        this.lastIndex[Direction.backward] = this.items[0].$index;
        this.lastIndex[Direction.forward] = this.items[this.items.length - 1].$index;
    }
    /**
     * @return {?}
     */
    getFirstVisibleItemIndex() {
        const /** @type {?} */ length = this.items.length;
        for (let /** @type {?} */ i = 0; i < length; i++) {
            if (!this.items[i].invisible) {
                return i;
            }
        }
        return -1;
    }
    /**
     * @return {?}
     */
    getLastVisibleItemIndex() {
        for (let /** @type {?} */ i = this.items.length - 1; i >= 0; i--) {
            if (!this.items[i].invisible) {
                return i;
            }
        }
        return -1;
    }
    /**
     * @param {?} direction
     * @param {?=} opposite
     * @return {?}
     */
    getEdgeVisibleItemIndex(direction, opposite) {
        return direction === (!opposite ? Direction.forward : Direction.backward) ?
            this.getLastVisibleItemIndex() : this.getFirstVisibleItemIndex();
    }
    /**
     * @return {?}
     */
    getFirstVisibleItem() {
        const /** @type {?} */ index = this.getFirstVisibleItemIndex();
        if (index >= 0) {
            return this.items[index];
        }
    }
    /**
     * @return {?}
     */
    getLastVisibleItem() {
        const /** @type {?} */ index = this.getLastVisibleItemIndex();
        if (index >= 0) {
            return this.items[index];
        }
    }
    /**
     * @param {?} direction
     * @param {?=} opposite
     * @return {?}
     */
    getEdgeVisibleItem(direction, opposite) {
        return direction === (!opposite ? Direction.forward : Direction.backward) ?
            this.getLastVisibleItem() : this.getFirstVisibleItem();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FetchByDirection {
    constructor() {
        this.count = 0;
        this.reset();
    }
    /**
     * @return {?}
     */
    reset() {
        const /** @type {?} */ count = this.count;
        this.shouldFetch = false;
        this.startIndex = null;
        this._newItemsData = null;
        this.items = null;
        this.count = count;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    set newItemsData(items) {
        this._newItemsData = items;
        this.count++;
    }
    /**
     * @return {?}
     */
    get newItemsData() {
        return this._newItemsData;
    }
}
class FetchModel {
    constructor() {
        this.forward = new FetchByDirection();
        this.backward = new FetchByDirection();
    }
    /**
     * @return {?}
     */
    reset() {
        this[Direction.forward].reset();
        this[Direction.backward].reset();
    }
    /**
     * @return {?}
     */
    get count() {
        return this[Direction.backward].count + this[Direction.forward].count;
    }
    /**
     * @return {?}
     */
    get items() {
        return [
            ...this[Direction.backward].items ? this[Direction.backward].items : [],
            ...this[Direction.forward].items ? this[Direction.forward].items : [],
        ];
    }
    /**
     * @return {?}
     */
    get shouldFetch() {
        return this[Direction.forward].shouldFetch || this[Direction.backward].shouldFetch;
    }
    /**
     * @return {?}
     */
    get hasNewItems() {
        return !!(this[Direction.forward].newItemsData || this[Direction.backward].newItemsData);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ClipByDirection {
    constructor() {
        this.shouldClip = false;
        this.size = null;
    }
}
class ClipModel {
    constructor() {
        this.forward = new ClipByDirection();
        this.backward = new ClipByDirection();
    }
    /**
     * @return {?}
     */
    get shouldClip() {
        return this[Direction.forward].shouldClip || this[Direction.backward].shouldClip;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const checkDatasource = (datasource) => {
    if (!datasource) {
        throw new Error('No datasource provided');
    }
    if (!('get' in datasource)) {
        throw new Error('Datasource get method is not implemented');
    }
    if (typeof datasource.get !== 'function') {
        throw new Error('Datasource get is not a function');
    }
    if (datasource.get.length < 2) {
        throw new Error('Datasource get method invalid signature');
    }
    return datasource;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Workflow {
    /**
     * @param {?} context
     */
    constructor(context) {
        this.count = 0;
        this.countDone = 0;
        this.resolver = Observable$1.create(_observer => this.observer = _observer);
        this.bindData = () => {
            this.next = true;
            context.changeDetector.markForCheck();
        };
        this.datasource = checkDatasource(context.datasource);
        this.settings = new Settings(context.datasource.settings);
        this.viewport = new Viewport(context.elementRef, this.settings);
        this.buffer = new Buffer();
        this.fetch = new FetchModel();
        this.clip = new ClipModel();
    }
    /**
     * @return {?}
     */
    reset() {
        this.pending = false;
        this.direction = null;
        this.next = false;
        this.fetch.reset();
        this.clip = new ClipModel();
    }
    /**
     * @param {?=} direction
     * @return {?}
     */
    start(direction) {
        this.count++;
        this.log(`---=== Workflow ${this.count} run`);
        this.reset();
        this.pending = true;
        this.direction = direction || null;
        return Promise.resolve(this);
    }
    /**
     * @return {?}
     */
    continue() {
        return Promise.resolve(this);
    }
    /**
     * @return {?}
     */
    finalize() {
        // stop 1 cycle
    }
    /**
     * @return {?}
     */
    end() {
        this.pending = false;
        this.countDone++;
        this.viewport.saveScrollPosition();
        this.finalize();
    }
    /**
     * @return {?}
     */
    done() {
        this.log(`---=== Workflow ${this.count} done`);
        this.end();
        this.observer.next(this.next);
    }
    /**
     * @param {?} error
     * @return {?}
     */
    fail(error) {
        this.log(`---=== Workflow ${this.count} fail`);
        this.end();
        this.observer.error(error);
    }
    /**
     * @return {?}
     */
    dispose() {
        this.observer.complete();
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    log(...args) {
        if (this.settings.debug) {
            console.log.apply(this, args);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ShouldFetch {
    /**
     * @param {?} workflow
     * @return {?}
     */
    static run(workflow) {
        if (workflow.direction !== Direction.backward) {
            ShouldFetch.shouldFetchByDirection(Direction.forward, workflow);
        }
        if (workflow.direction !== Direction.forward) {
            ShouldFetch.shouldFetchByDirection(Direction.backward, workflow);
        }
        return Promise.resolve(workflow);
    }
    /**
     * @param {?} direction
     * @param {?} workflow
     * @return {?}
     */
    static shouldFetchByDirection(direction, workflow) {
        const /** @type {?} */ paddingEdge = workflow.viewport.padding[direction].getEdge();
        const /** @type {?} */ limit = workflow.viewport.getLimit(direction);
        if ((direction === Direction.forward && workflow.buffer.eof) ||
            (direction === Direction.backward && workflow.buffer.bof)) {
            workflow.fetch[direction].shouldFetch = false;
        }
        else {
            workflow.fetch[direction].shouldFetch =
                (direction === Direction.forward) ? paddingEdge < limit : paddingEdge > limit;
        }
        if (workflow.fetch[direction].shouldFetch) {
            ShouldFetch.setStartIndex(direction, workflow);
        }
    }
    /**
     * @param {?} direction
     * @param {?} workflow
     * @return {?}
     */
    static setStartIndex(direction, workflow) {
        const /** @type {?} */ forward = direction === Direction.forward;
        const /** @type {?} */ back = -workflow.settings.bufferSize;
        let /** @type {?} */ start;
        if (workflow.buffer.lastIndex[direction] === null) {
            start = workflow.settings.startIndex + (forward ? 0 : back);
        }
        else {
            start = workflow.buffer.lastIndex[direction] + (forward ? 1 : back);
        }
        workflow.fetch[direction].startIndex = start;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Fetch {
    /**
     * @param {?} workflow
     * @return {?}
     */
    static run(workflow) {
        const /** @type {?} */ result = [];
        if (workflow.fetch[Direction.backward].shouldFetch) {
            result.push(Fetch.fetchByDirection(Direction.backward, workflow));
        }
        if (workflow.fetch[Direction.forward].shouldFetch) {
            result.push(Fetch.fetchByDirection(Direction.forward, workflow));
        }
        return Promise.all(result).then(() => workflow);
    }
    /**
     * @param {?} data
     * @param {?} direction
     * @param {?} workflow
     * @return {?}
     */
    static success(data, direction, workflow) {
        workflow.log(`resolved ${data.length} ${direction} items ` +
            `(index = ${workflow.fetch[direction].startIndex}, count = ${workflow.settings.bufferSize})`);
        workflow.fetch[direction].newItemsData = data;
    }
    /**
     * @param {?} direction
     * @param {?} workflow
     * @return {?}
     */
    static fetchByDirection(direction, workflow) {
        const /** @type {?} */ result = new Promise((resolve, reject) => {
            const /** @type {?} */ success = (data) => {
                Fetch.success(data, direction, workflow);
                resolve(true);
            };
            const /** @type {?} */ _get = /** @type {?} */ (workflow.datasource.get);
            const /** @type {?} */ _getResult = _get(workflow.fetch[direction].startIndex, workflow.settings.bufferSize, success, reject);
            if (_getResult && typeof _getResult.then === 'function') {
                // DatasourceGetPromise
                _getResult.then(success, reject);
            }
            else if (_getResult && typeof _getResult.subscribe === 'function') {
                // DatasourceGetObservable
                _getResult.subscribe(success, reject);
            }
        });
        return result;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Item {
    /**
     * @param {?} $index
     * @param {?} data
     * @param {?} nodeId
     */
    constructor($index, data, nodeId) {
        this.$index = $index;
        this.data = data;
        this.nodeId = nodeId;
        this.invisible = true;
    }
    /**
     * @return {?}
     */
    getParams() {
        return Routines.getParams(this.element);
    }
    /**
     * @param {?} direction
     * @param {?=} opposite
     * @return {?}
     */
    getEdge(direction, opposite) {
        return Routines.getEdge(this.element, direction, opposite);
    }
    /**
     * @return {?}
     */
    hide() {
        Routines.hideElement(this.element);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProcessFetch {
    /**
     * @param {?} workflow
     * @return {?}
     */
    static run(workflow) {
        ProcessFetch.runByDirection(workflow, Direction.backward);
        ProcessFetch.runByDirection(workflow, Direction.forward);
        return workflow;
    }
    /**
     * @param {?} workflow
     * @param {?} direction
     * @return {?}
     */
    static runByDirection(workflow, direction) {
        const /** @type {?} */ fetch = workflow.fetch[direction];
        if (!fetch.newItemsData) {
            // no fetch
            return;
        }
        const /** @type {?} */ eof = direction === Direction.forward ? 'eof' : 'bof';
        workflow.buffer[eof] = fetch.newItemsData.length !== workflow.settings.bufferSize;
        if (!fetch.newItemsData.length) {
            // empty result
            return;
        }
        fetch.items = fetch.newItemsData.map((item, index) => {
            const /** @type {?} */ $index = fetch.startIndex + index;
            const /** @type {?} */ nodeId = workflow.settings.itemIdPrefix + String($index);
            return new Item($index, item, nodeId);
        });
        if (direction === Direction.forward) {
            workflow.buffer.items = [...workflow.buffer.items, ...fetch.items];
        }
        else {
            workflow.buffer.items = [...fetch.items, ...workflow.buffer.items];
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Render {
    /**
     * @param {?} workflow
     * @return {?}
     */
    static run(workflow) {
        if (!workflow.fetch.hasNewItems) {
            return workflow;
        }
        workflow.bindData();
        return new Promise((resolve, reject) => setTimeout(() => {
            const /** @type {?} */ error = Render.setElements(workflow);
            if (!error) {
                resolve(workflow);
            }
            else {
                reject(error);
            }
        }));
    }
    /**
     * @param {?} workflow
     * @return {?}
     */
    static setElements(workflow) {
        const /** @type {?} */ items = workflow.fetch.items;
        for (let /** @type {?} */ j = items.length - 1; j >= 0; j--) {
            const /** @type {?} */ nodes = workflow.viewport.children;
            for (let /** @type {?} */ i = nodes.length - 1; i >= 0; i--) {
                if (nodes[i].id === items[j].nodeId) {
                    items[j].element = nodes[i];
                }
            }
            if (!items[j].element) {
                // todo: do we really need this check?
                return new Error('Can not associate item with element');
            }
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AdjustFetch {
    /**
     * @param {?} workflow
     * @return {?}
     */
    static run(workflow) {
        AdjustFetch.runByDirection(Direction.forward, workflow);
        AdjustFetch.runByDirection(Direction.backward, workflow);
        return workflow;
    }
    /**
     * @param {?} direction
     * @param {?} workflow
     * @return {?}
     */
    static runByDirection(direction, workflow) {
        const /** @type {?} */ items = workflow.fetch[direction].items;
        if (!items) {
            return;
        }
        AdjustFetch.processFetchedItems(items);
        const /** @type {?} */ height = Math.abs(items[0].element.getBoundingClientRect().top -
            items[items.length - 1].element.getBoundingClientRect().bottom);
        if (direction === Direction.forward) {
            return this.adjustForward(workflow, height);
        }
        else {
            return this.adjustBackward(workflow, height);
        }
    }
    /**
     * @param {?} items
     * @return {?}
     */
    static processFetchedItems(items) {
        for (let /** @type {?} */ i = items.length - 1; i >= 0; i--) {
            const /** @type {?} */ element = items[i].element.children[0];
            element.style.left = '';
            element.style.position = '';
            items[i].invisible = false;
        }
    }
    /**
     * @param {?} workflow
     * @param {?} size
     * @return {?}
     */
    static adjustForward(workflow, size) {
        const /** @type {?} */ paddingForward = workflow.viewport.padding[Direction.forward];
        const /** @type {?} */ _paddingSize = paddingForward.size || 0;
        paddingForward.size = Math.max(_paddingSize - size, 0);
    }
    /**
     * @param {?} workflow
     * @param {?} size
     * @return {?}
     */
    static adjustBackward(workflow, size) {
        const /** @type {?} */ viewport = workflow.viewport;
        const /** @type {?} */ _scrollPosition = viewport.scrollPosition;
        const /** @type {?} */ paddingBackward = viewport.padding[Direction.backward];
        const /** @type {?} */ paddingForward = viewport.padding[Direction.forward];
        // need to make "size" pixels in backward direction
        // 1) via paddingTop
        const /** @type {?} */ _paddingSize = paddingBackward.size || 0;
        let /** @type {?} */ paddingSize = Math.max(_paddingSize - size, 0);
        paddingBackward.size = paddingSize;
        const /** @type {?} */ paddingDiff = size - (_paddingSize - paddingSize);
        // 2) via scrollTop
        if (paddingDiff > 0) {
            size = paddingDiff;
            viewport.scrollPosition += size;
            const /** @type {?} */ diff = size - viewport.scrollPosition - _scrollPosition;
            if (diff > 0) {
                paddingSize = paddingForward.size || 0;
                paddingForward.size = paddingSize + diff;
                viewport.scrollPosition += diff;
            }
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ShouldClip {
    /**
     * @param {?} workflow
     * @return {?}
     */
    static run(workflow) {
        if (workflow.settings.clipAfterFetchOnly && !workflow.fetch.shouldFetch) {
            return workflow;
        }
        // todo think about optimization for case of scrolling
        ShouldClip.shouldClipByDirection(Direction.forward, workflow);
        ShouldClip.shouldClipByDirection(Direction.backward, workflow);
        return workflow;
    }
    /**
     * @param {?} direction
     * @param {?} workflow
     * @return {?}
     */
    static shouldClipByDirection(direction, workflow) {
        const /** @type {?} */ items = workflow.buffer.items;
        if (!items.length) {
            return false;
        }
        const /** @type {?} */ forward = direction === Direction.forward;
        const /** @type {?} */ viewport = workflow.viewport;
        const /** @type {?} */ viewportLimit = viewport.getLimit(direction, true);
        const /** @type {?} */ firstIndex = workflow.buffer.getFirstVisibleItemIndex();
        const /** @type {?} */ lastIndex = workflow.buffer.getLastVisibleItemIndex();
        const /** @type {?} */ firstItemEdge = items[firstIndex].getEdge(direction);
        const /** @type {?} */ lastItemEdge = items[lastIndex].getEdge(direction);
        let /** @type {?} */ i, /** @type {?} */ itemEdge, /** @type {?} */ start = -1, /** @type {?} */ end = -1;
        const /** @type {?} */ getItemEdge = (index) => index === firstIndex ? firstItemEdge : (index === lastIndex ? lastItemEdge :
            items[index].getEdge(direction));
        if ((forward && lastItemEdge <= viewportLimit) || (!forward && firstItemEdge >= viewportLimit)) {
            // all items should be clipped
            start = firstIndex;
            end = lastIndex;
        }
        else {
            if (forward) {
                start = firstIndex;
            }
            else {
                end = lastIndex;
            }
            for (forward ? (i = 0) : (i = lastIndex); forward ? (i <= lastIndex) : (i >= 0); forward ? i++ : i--) {
                itemEdge = getItemEdge(i);
                if (forward && itemEdge <= viewportLimit) {
                    end = i;
                }
                else if (!forward && itemEdge >= viewportLimit) {
                    start = i;
                }
                else {
                    break;
                }
            }
        }
        if (start >= 0 && end >= 0) {
            for (i = start; i <= end; i++) {
                items[i].toRemove = true;
            }
            workflow.clip[direction].shouldClip = true;
            workflow.clip[direction].size =
                items[end].getEdge(Direction.forward) - items[start].getEdge(Direction.backward);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Clip {
    /**
     * @param {?} workflow
     * @return {?}
     */
    static run(workflow) {
        if (!workflow.clip.shouldClip) {
            return workflow;
        }
        Clip.runByDirection(Direction.forward, workflow);
        Clip.runByDirection(Direction.backward, workflow);
        workflow.buffer.items = workflow.buffer.items.filter(item => {
            if (item.toRemove) {
                workflow.buffer.cache.add(item);
                item.hide();
                return false;
            }
            return true;
        });
        workflow.bindData();
        return new Promise((resolve, reject) => setTimeout(() => {
            resolve(workflow);
        }));
    }
    /**
     * @param {?} direction
     * @param {?} workflow
     * @return {?}
     */
    static runByDirection(direction, workflow) {
        if (!workflow.clip[direction].shouldClip) {
            return;
        }
        const /** @type {?} */ opposite = direction === Direction.forward ? Direction.backward : Direction.forward;
        workflow.viewport.padding[opposite].size += workflow.clip[direction].size;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WorkflowRunner {
    /**
     * @param {?} context
     */
    constructor(context) {
        this.count = 0;
        this.defaultDirection = Direction.forward;
        this.context = context;
        this.workflow = new Workflow(this.context);
        this.initialize();
    }
    /**
     * @return {?}
     */
    initialize() {
        const /** @type {?} */ flow = this.workflow;
        const /** @type {?} */ onScroll = ($event) => this.scroll($event);
        this.onScrollListener = this.context.renderer.listen(flow.viewport.scrollable, 'scroll', onScroll);
        this.itemsSubscription = flow.buffer.$items.subscribe(items => this.context.items = items);
        this.flowResolverSubscription = flow.resolver.subscribe(this.resolve.bind(this));
        this.run();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    scroll($event) {
        if (this.workflow.viewport.syntheticScrollPosition !== null) {
            if (this.workflow.viewport.scrollPosition === this.workflow.viewport.syntheticScrollPosition) {
                this.workflow.viewport.syntheticScrollPosition = null;
                return;
            }
            this.workflow.viewport.syntheticScrollPosition = null;
        }
        // debouncedRound(() => this.run(direction), 25);
        this.run();
    }
    /**
     * @param {?} next
     * @return {?}
     */
    resolve(next) {
        if (this.newDirection) {
            this.run(this.newDirection);
            this.newDirection = null;
        }
        else if (next) {
            this.run(this.workflow.direction);
        }
        else if (this.directionQueue) {
            this.run(this.directionQueue);
            this.directionQueue = null;
        }
        else {
            this.count++;
            this.finalize();
        }
    }
    /**
     * @param {?=} direction
     * @return {?}
     */
    run(direction) {
        if (!direction) {
            direction = this.defaultDirection;
            this.directionQueue =
                direction === Direction.forward ? Direction.backward : Direction.forward;
        }
        if (this.workflow.pending) {
            this.newDirection = direction;
            return;
        }
        this.workflow.start(direction)
            .then(() => this.fetch())
            .then(() => this.clip())
            .then(() => this.workflow.done())
            .catch(error => this.workflow.fail(error));
    }
    /**
     * @return {?}
     */
    fetch() {
        return this.workflow.continue()
            .then(ShouldFetch.run)
            .then(Fetch.run)
            .then(ProcessFetch.run)
            .then(Render.run)
            .then(AdjustFetch.run);
    }
    /**
     * @return {?}
     */
    clip() {
        return this.workflow.settings.infinite ?
            null :
            this.workflow.continue()
                .then(ShouldClip.run)
                .then(Clip.run);
    }
    /**
     * @return {?}
     */
    dispose() {
        this.onScrollListener();
        this.itemsSubscription.unsubscribe();
        this.flowResolverSubscription.unsubscribe();
        this.workflow.dispose();
    }
    /**
     * @return {?}
     */
    finalize() {
        // stop queue
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UiScrollComponent {
    /**
     * @param {?} changeDetector
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(changeDetector, elementRef, renderer) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.workflowRunner = new WorkflowRunner(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.workflowRunner.dispose();
    }
}
UiScrollComponent.decorators = [
    { type: Component, args: [{
                selector: 'ui-scroll',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
<div data-padding-backward></div>
<div *ngFor="let item of items" id="{{item.nodeId}}">
  <div [style.position]="item.invisible ? 'fixed' : null" [style.left]="item.invisible ? '-99999px' : null" >
    <ng-template
      [ngTemplateOutlet]="template"
      [ngTemplateOutletContext]="{
        $implicit: item.data,
        index: item.$index
     }">
    </ng-template>
  </div>
</div>
<div data-padding-forward></div>
`
            },] },
];
/** @nocollapse */
UiScrollComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: Renderer2, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UiScrollDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} resolver
     */
    constructor(templateRef, viewContainer, resolver) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.resolver = resolver;
    }
    /**
     * @param {?} datasource
     * @return {?}
     */
    set uiScrollOf(datasource) {
        this.datasource = datasource;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ templateView = this.templateRef.createEmbeddedView({});
        const /** @type {?} */ compFactory = this.resolver.resolveComponentFactory(UiScrollComponent);
        const /** @type {?} */ componentRef = this.viewContainer.createComponent(compFactory, null, this.viewContainer.injector, [templateView.rootNodes]);
        componentRef.instance.datasource = this.datasource;
        componentRef.instance.template = this.templateRef;
    }
}
UiScrollDirective.decorators = [
    { type: Directive, args: [{ selector: '[uiScroll][uiScrollOf]' },] },
];
/** @nocollapse */
UiScrollDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ComponentFactoryResolver, },
];
UiScrollDirective.propDecorators = {
    "uiScrollOf": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UiScrollModule {
}
UiScrollModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    UiScrollComponent,
                    UiScrollDirective
                ],
                imports: [CommonModule],
                entryComponents: [UiScrollComponent],
                exports: [UiScrollDirective],
                providers: []
            },] },
];
/** @nocollapse */
UiScrollModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { UiScrollModule, UiScrollComponent as ɵa, UiScrollDirective as ɵb };
//# sourceMappingURL=ngx-ui-scroll.js.map
