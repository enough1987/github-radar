import { isEmpty } from './index';

describe('utils ', () => {

    it('isEmpty ', () => {
        const results = [
            isEmpty(), isEmpty([]), isEmpty('test')
        ]

        expect(results)
            .toEqual([
                true, true, false
            ]);
    });
});
