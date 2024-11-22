import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    webServer: {
        command: 'ng serve',
        url: 'http://localhost:4200',
        reuseExistingServer: !process.env['CI'],
    },
    use: {
        baseURL: 'http://localhost:4200',
        launchOptions: {
            args: ['--use-gl=desktop'],
        },
    },

    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env['CI'],
    /* Retry on CI only */
    retries: process.env['CI'] ? 2 : 2,
    /* Opt out of parallel tests on CI. */
    workers: process.env['CI'] ? 10 : 10,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: 'html',
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    timeout: 75000,

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },

        // {
        //     name: 'webkit',
        //     use: {...devices['Desktop Safari']},
        // },
        //
        // {
        //     name: 'Mobile Chrome',
        //     use: {...devices['Pixel 5']},
        // },
        // {
        //     name: 'Mobile Safari',
        //     use: {...devices['iPhone 12']},
        // },
        //
        // {
        //     name: 'Microsoft Edge',
        //     use: {...devices['Desktop Edge'], channel: 'msedge'},
        // },
        // {
        //     name: 'Google Chrome',
        //     use: {...devices['Desktop Chrome'], channel: 'chrome'},
        // },
    ],

});
