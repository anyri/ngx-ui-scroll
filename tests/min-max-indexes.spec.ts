import { makeTest, TestBedConfig } from './scaffolding/runner';
import { Misc } from './miscellaneous/misc';

const configList: TestBedConfig[] = [{
  datasourceSettings: { startIndex: 1, padding: 0.5, itemSize: 20, minIndex: -49, maxIndex: 100 },
  templateSettings: { viewportHeight: 200, itemHeight: 20 }
}, {
  datasourceSettings: { startIndex: 600, padding: 1.2, itemSize: 40, minIndex: -69, maxIndex: 1300 },
  templateSettings: { viewportHeight: 100, itemHeight: 40 }
}, {
  datasourceSettings: { startIndex: 174, padding: 0.7, itemSize: 25, minIndex: 169, maxIndex: 230 },
  templateSettings: { viewportHeight: 50, itemHeight: 25 }
}, {
  datasourceSettings: { startIndex: 33, padding: 0.62, itemSize: 90, minIndex: 20, maxIndex: 230, horizontal: true },
  templateSettings: { viewportWidth: 450, itemWidth: 90, horizontal: true }
}, {
  datasourceSettings: {
    startIndex: 1,
    padding: 0.25,
    itemSize: 20,
    minIndex: -40,
    maxIndex: 159,
    windowViewport: true
  },
  templateSettings: { noViewportClass: true, viewportHeight: 0, itemHeight: 20 }
}];

const commonConfig = configList[0]; // [-49, ..., 100]

const startIndexAroundMinIndexConfigList: TestBedConfig[] = [{
  ...commonConfig, datasourceSettings: { ...commonConfig.datasourceSettings, startIndex: -9999 }
}, {
  ...commonConfig, datasourceSettings: { ...commonConfig.datasourceSettings, startIndex: -50 }
}, {
  ...commonConfig, datasourceSettings: { ...commonConfig.datasourceSettings, startIndex: -49 }
}, {
  ...commonConfig, datasourceSettings: { ...commonConfig.datasourceSettings, startIndex: -48 }
}];

const startIndexAroundMaxIndexConfigList: TestBedConfig[] = [{
  ...commonConfig, datasourceSettings: { ...commonConfig.datasourceSettings, startIndex: 99 }
}, {
  ...commonConfig, datasourceSettings: { ...commonConfig.datasourceSettings, startIndex: 100 }
}, {
  ...commonConfig, datasourceSettings: { ...commonConfig.datasourceSettings, startIndex: 101 }
}, {
  ...commonConfig, datasourceSettings: { ...commonConfig.datasourceSettings, startIndex: 999 }
}];

const _testCommonCase = (settings: TestBedConfig, misc: Misc, done: Function) => {
  const { maxIndex, minIndex, itemSize, startIndex, padding } = settings.datasourceSettings;
  const viewportSize = misc.getViewportSize(settings);
  const totalSize = (maxIndex - minIndex + 1) * itemSize;
  const viewportSizeDelta = viewportSize * padding;

  const negativeSize = (startIndex - minIndex) * itemSize;
  const negativeItemsAmount = Math.ceil(viewportSizeDelta / itemSize);
  const negativeItemsSize = negativeItemsAmount * itemSize;
  const bwdPaddingSize = negativeSize - negativeItemsSize;

  const positiveSize = (maxIndex - startIndex + 1) * itemSize;
  const positiveItemsAmount = Math.ceil((viewportSize + viewportSizeDelta) / itemSize);
  const positiveItemsSize = positiveItemsAmount * itemSize;
  const fwdPaddingSize = positiveSize - positiveItemsSize;

  expect(misc.getScrollableSize()).toEqual(totalSize);
  expect(misc.padding.backward.getSize()).toEqual(bwdPaddingSize);
  expect(misc.padding.forward.getSize()).toEqual(fwdPaddingSize);
  done();
};

const _testStartIndexEdgeCase = (settings: TestBedConfig, misc: Misc, done: Function) => {
  const { maxIndex, minIndex, itemSize, startIndex, padding } = settings.datasourceSettings;
  const viewportSize = misc.getViewportSize(settings);
  const totalSize = (maxIndex - minIndex + 1) * itemSize;
  const viewportSizeDelta = viewportSize * padding;
  let _startIndex = Math.max(minIndex, startIndex); // startIndex < minIndex
  _startIndex = Math.min(maxIndex, _startIndex); // startIndex > maxIndex

  // visible part of the viewport must be filled
  const viewportItemsAmount = Math.ceil(viewportSize / itemSize);
  const diff = _startIndex + viewportItemsAmount - maxIndex - 1;
  if (diff > 0) {
    _startIndex -= diff;
  }

  const negativeSize = (_startIndex - minIndex) * itemSize;
  const negativeItemsAmount = Math.ceil(viewportSizeDelta / itemSize);
  const negativeItemsSize = negativeItemsAmount * itemSize;
  const bwdPaddingSize = Math.max(0, negativeSize - negativeItemsSize);

  const positiveSize = (maxIndex - _startIndex + 1) * itemSize;
  const positiveItemsAmount = Math.ceil((viewportSize + viewportSizeDelta) / itemSize);
  const positiveItemsSize = positiveItemsAmount * itemSize;
  const fwdPaddingSize = Math.max(0, positiveSize - positiveItemsSize);

  expect(misc.getScrollableSize()).toEqual(totalSize);
  expect(misc.padding.backward.getSize()).toEqual(bwdPaddingSize);
  expect(misc.padding.forward.getSize()).toEqual(fwdPaddingSize);
  done();
};

describe('Min/max Indexes Spec', () => {

  describe('Common cases', () => {
    configList.forEach(config =>
      makeTest({
        config,
        title: 'should fill the viewport and the paddings',
        it: (misc: Misc) => (done: Function) =>
          spyOn(misc.workflow, 'finalize').and.callFake(() =>
            _testCommonCase(config, misc, done)
          )
      })
    );
  });

  describe('startIndex\'s around minIndex', () => {
    startIndexAroundMinIndexConfigList.forEach(config =>
      makeTest({
        config,
        title: 'should reset backward padding',
        it: (misc: Misc) => (done: Function) =>
          spyOn(misc.workflow, 'finalize').and.callFake(() =>
            _testStartIndexEdgeCase(config, misc, done)
          )
      })
    );
  });

  describe('startIndex\'s around maxIndex', () => {
    startIndexAroundMaxIndexConfigList.forEach(config =>
      makeTest({
        config,
        title: 'should reset forward padding',
        it: (misc: Misc) => (done: Function) =>
          spyOn(misc.workflow, 'finalize').and.callFake(() =>
            _testStartIndexEdgeCase(config, misc, done)
          )
      })
    );
  });

});
