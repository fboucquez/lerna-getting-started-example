/**
 * @jest-environment jsdom
 */

import {someText} from './index';

test('some test', () => {
    expect(someText).toBeDefined
});
