import { Page } from 'playwright';

export class DashboardPage {
    constructor(private page: Page) {}

    async getTitle(){
        const pagetitle = await this.page.title();
        return pagetitle;
    }
}