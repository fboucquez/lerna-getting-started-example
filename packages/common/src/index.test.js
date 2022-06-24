"use strict";
/**
 * @jest-environment jsdom
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
test('some test', () => {
    expect(index_1.someText).toBeDefined;
});
