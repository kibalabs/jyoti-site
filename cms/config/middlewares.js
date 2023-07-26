module.exports = [
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "res.cloudinary.com",
            'kiba-jyoti-site-assets.s3.eu-west-1.amazonaws.com',
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "res.cloudinary.com",
            'kiba-jyoti-site-assets.s3.eu-west-1.amazonaws.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::body",
    config: {
      formLimit: "128mb", // modify form body
      jsonLimit: "128mb", // modify JSON body
      textLimit: "128mb", // modify text body
      formidable: {
        maxFileSize: 128 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
];
