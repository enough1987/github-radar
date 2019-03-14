import { isEmpty, areEqualShallow, sortArrayByfield } from './index';

describe('utils ', () => {
  it('isEmpty ', () => {
    const results = [
      isEmpty(), isEmpty([]), isEmpty('test')
    ];

    expect(results)
      .toEqual([
        true, true, false
      ]);
  });

  it('areEqualShallow ', () => {
    const results = [
      areEqualShallow({ a: 1 }, { a: 1 }), areEqualShallow({ b: 1 }, { a: 1 }), areEqualShallow({ a: 1, b: 2 }, { a: 1 })
    ];

    expect(results)
      .toEqual([
        true, false, false
      ]);
  });

  it('sortArrayByfield ', () => {
    const results = [
      sortArrayByfield('test')({ test: 2 }, { test: 1 }),
      sortArrayByfield('test')({ test: 1 }, { test: 2 }),
      sortArrayByfield('test')({ test: 'a' }, { test: 'c' }),
      sortArrayByfield('test')({ test: 'c' }, { test: 'a' })
    ];

    expect(results)
      .toEqual([
        1, -1, -1, 1
      ]);
  });
});
