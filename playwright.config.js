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
            api: {
              token: '7f2067fbe9739d010cb390a37ddef7187862907b090de9035b045e4ea0f294ef',
            },
            project: 'EW',
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