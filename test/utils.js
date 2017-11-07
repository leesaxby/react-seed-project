export const el = (id) => `[data-test-id="${id}"]`;

export const elCount = (page, elId) => page.$$eval(elId, el => el.length);