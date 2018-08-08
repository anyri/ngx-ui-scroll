import { Scroller } from '../scroller';
import { Process, ProcessSubject, Run, Direction } from '../interfaces/index';

export default class End {

  static run(scroller: Scroller, isFail?: boolean) {
    scroller.state.endCycle();
    End.calculateParams(scroller);
    scroller.purgeCycleSubscriptions();
    scroller.finalize();

    let next: Run | null = null;
    const logData = `${scroller.settings.instanceIndex}-${scroller.state.wfCycleCount}-${scroller.state.cycleCount}`;
    if (isFail) {
      scroller.log(`%c---=== Workflow ${logData} fail`, 'color: #006600;');
    } else {
      scroller.log(`%c---=== Workflow ${logData} done`, 'color: #006600;');
      next = End.getNextRun(scroller);
    }

    scroller.callWorkflow(<ProcessSubject>{
      process: Process.end,
      status: next ? 'next' : 'done',
      payload: next
    });
  }

  static calculateParams(scroller: Scroller) {
    const items = scroller.buffer.items;
    const length = items.length;
    const viewportBackwardEdge = scroller.viewport.getEdge(Direction.backward);
    const viewportForwardEdge = scroller.viewport.getEdge(Direction.forward);
    let index = null;
    for (let i = 0; i < length; i++) {
      const edge = scroller.viewport.getElementEdge(items[i].element, Direction.backward, true);
      if (edge > viewportBackwardEdge) {
        index = i;
        break;
      }
    }
    scroller.state.firstVisibleItem = index !== null ? {
      $index: items[index].$index,
      data: items[index].data,
      element: items[index].element
    } : {};

    index = null;
    for (let i = length - 1; i >= 0; i--) {
      const edge = scroller.viewport.getElementEdge(items[i].element, Direction.forward, true);
      if (edge < viewportForwardEdge) {
        index = i;
        break;
      }
    }
    scroller.state.lastVisibleItem = index !== null ? {
      $index: items[index].$index,
      data: items[index].data,
      element: items[index].element
    } : {};
  }

  static getNextRun(scroller: Scroller): Run | null {
    let nextRun: Run | null = null;
    if (scroller.state.fetch.hasNewItems || scroller.state.clip.shouldClip) {
      nextRun = {
        scroll: scroller.state.scroll
      };
    }
    return nextRun;
  }
}
