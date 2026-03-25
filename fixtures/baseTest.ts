import { test as base } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { DashboardPage } from '../src/pages/DashboardPage';
import { testData } from '../utils/testData';

type MyFixtures = {
    loginPage : LoginPage;
    dashboardPage : DashboardPage;
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) =>{
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await use(loginPage)
    },
    dashboardPage: async ({ loginPage, page }, use) => {
        await loginPage.login(testData.username, testData.password);
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage)
    }
});


