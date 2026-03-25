import { test } from '../fixtures/baseTest';
import { testData } from '../utils/testData';


test('verify login functionality', async ({ loginPage }) => {
    await loginPage.login(testData.username, testData.password);
  } 
);

