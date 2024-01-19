import { expect, test } from '@playwright/test';

test('url is updated when input is entered', async ({ page, baseURL }) => {
	await page.goto('/');
	await page.getByPlaceholder('Enter name...').fill('John');

	await page.waitForTimeout(100);

	expect(page.url()).toBe(`${baseURL}/?name=John`);
});

test('checkboxes adds multiple key/value pairs to the url', async ({ page, baseURL }) => {
	await page.goto('/');
	await page.getByRole('checkbox', { name: 'Apple' }).check();

	expect(page.url()).toBe(`${baseURL}/?fruits=apple`);

	await page.getByRole('checkbox', { name: 'Banana' }).check();

	expect(page.url()).toBe(`${baseURL}/?fruits=apple&fruits=banana`);
});
