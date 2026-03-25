import {Page, Locator} from '@playwright/test';
import { env } from '../../config/env.ts';

export class LoginPage {
    constructor(private page: Page) {}

    async navigate(){
        await this.page.goto(env.baseURL);
      
    }

    async login(username: string, password: string){
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
    }
}