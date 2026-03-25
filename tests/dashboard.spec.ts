import { expect } from '@playwright/test';
import { test } from '../fixtures/baseTest';

test('Verify use navigates to the dashboard', async ({ dashboardPage }) => {
    const title = await dashboardPage.getTitle();
    await expect(title).toBe('Swag Labs')
});