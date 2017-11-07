// Return full element test id selector string.
export const el = (id) => `[data-test-id="${id}"]`;

// Return element count.
export const elCount = (page, elId) => page.$$eval(elId, el => el.length);