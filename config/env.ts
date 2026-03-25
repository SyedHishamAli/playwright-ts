type Envtype = 'prod' | 'qa' | 'dev';

const environments = {
    prod: {
        baseURL: 'https://www.saucedemo.com/'
    },
    qa: {
        baseURL: 'https://www.saucedemo.com/'
    },
    dev: {
        baseURL: 'https://www.saucedemo.com/'
    }
};

const currentEnv = process.env.ENV as Envtype || 'dev';

if (!environments[currentEnv]){
    throw new Error('Invalid ENV: ${currentEnv}');
}
export const env = environments[currentEnv];