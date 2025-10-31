// This config is used by `murphie run`. Do not import playwright/test here.
export default {
  testDir: './tests',
  outputDir: '.murphie/artifacts',
  reporter: [
    ['list'],
    ['json', { outputFile: '.murphie/results/report.json' }],
    ['html', { outputFolder: '.murphie/html-report', open: 'never' }]
  ],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  retries: 0
};
