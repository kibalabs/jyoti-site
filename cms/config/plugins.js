module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
        accessKeyId: env('AWS_KEY'),
        secretAccessKey: env('AWS_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: 'sendmail',
      settings: {
        defaultFrom: env('STRAPI_EMAIL'),
        defaultReplyTo: env('STRAPI_EMAIL'),
        testAddress: env('STRAPI_EMAIL'),
      },
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('STRAPI_JWT_SECRET'),
    },
  },
  'update-static-content': {
    enabled: true,
    config: {
      owner: 'kibalabs',
      repo: 'jyoti-site',
      workflowId: 'app-deploy.yml',
      githubToken: env('GITHUB_TOKEN'),
      branch: 'main',
    },
  },
});
