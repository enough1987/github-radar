import { isEmpty, loadingDefer, areEqualShallow, sortArrayByfield,
  searchFields } from './index';

describe('utils ', () => {
  it('loadingDefer ', async () => {
    const results = await loadingDefer(10);

    expect(results)
      .toEqual('user-login');
  });

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
      areEqualShallow({ a: 1 }, { a: 1 }),
      areEqualShallow({ b: 1 }, { a: 1 }),
      areEqualShallow({ a: 1, b: 2 }, { a: 1 }),
      areEqualShallow({ a: 1, b: 2 }, { b: 2, a: 1 }),
      areEqualShallow({}, { b: 2, a: 1 })
    ];

    expect(results)
      .toEqual([
        true, false, false, true, false
      ]);
  });

  it('sortArrayByfield ', () => {
    const results = [
      sortArrayByfield('test')({ test: 2 }, { test: 1 }),
      sortArrayByfield('test')({ test: 1 }, { test: 2 }),
      sortArrayByfield('test')({ test: 'a' }, { test: 'c' }),
      sortArrayByfield('test')({ test: 'c' }, { test: 'a' }),
      sortArrayByfield('test')({ test: 1 }, { test: 1 })
    ];

    expect(results)
      .toEqual([
        1, -1, -1, 1, 0
      ]);
  });

  it('searchFields ', () => {
    const results = [
      searchFields([{ test: 'test ' }], 'test', 'test'),
      searchFields([{ test: 'test ' }], 'rock', 'test'),
      searchFields([{ test: 'test ' }], 'test', 'rock')
    ];

    expect(results)
      .toEqual([
        [{ test: 'test ' }], [], []
      ]);
  });
});
