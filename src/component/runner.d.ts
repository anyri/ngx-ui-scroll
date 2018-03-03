import { Workflow } from './workflow';
import { Direction } from './interfaces/direction';
export declare class WorkflowRunner {
    private context;
    private onScrollListener;
    private itemsSubscription;
    private flowResolverSubscription;
    workflow: Workflow;
    count: number;
    private newDirection;
    private directionQueue;
    private defaultDirection;
    constructor(context: any);
    initialize(): void;
    scroll($event: any): void;
    resolve(next: boolean): void;
    run(direction?: Direction): void;
    fetch(): Promise<Workflow>;
    clip(): Promise<{}>;
    dispose(): void;
    finalize(): void;
}
