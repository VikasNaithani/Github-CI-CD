const config = {
    use: {
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
    },
    reporter: [
      ['list'],
      [
        'playwright-qase-reporter',
        {
          debug: true,
          testops: {
            uploadAttachments: true,
            run: {
              complete: true,
            },
          },
        },
      ],
    ],
  };
  module.exports = config;
