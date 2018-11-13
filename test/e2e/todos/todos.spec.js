import puppeteer from 'puppeteer';
import { el, elCount } from '../../utils';

const URL = 'http://localhost:8888';
let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto(URL);
    await page.setViewport({ width: 1280, height: 1280 });
});

describe('Add new todo item', () => {
    test('Can add new item', async () => {
        let itemCount;

        itemCount = await elCount(page, el('todo-item'));
        expect(itemCount).toEqual(3);

        await page.waitForSelector(el('todo-add-item'));
        await page.click(el('todo-add-item'));
        await page.type(el('todo-add-item'), 'Another new item');
        await page.type(el('todo-add-item'), String.fromCharCode(13));

        itemCount = await elCount(page, el('todo-item'));
        expect(itemCount).toEqual(4);
    });

    test('After enter is clicked input value is cleared', async () => {
        await page.waitForSelector(el('todo-add-item'));
        await page.click(el('todo-add-item'));
        await page.type(el('todo-add-item'), 'Another new item');
        await page.type(el('todo-add-item'), String.fromCharCode(13));

        const input = await page.$eval(el('todo-add-item'), elem => elem.value);
        // used to be '' but react/chrome appears to have update how that work
        expect(input).toBe(undefined);
    });
});

afterAll(() => {
    browser.close();
});
