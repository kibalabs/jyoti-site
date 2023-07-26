module.exports = ({ env }) => {
  const client = env('STRAPI_DATABASE_CLIENT', 'sqlite');

  const connections = {
    sqlite: {
      connection: {
        filename: env('STRAPI_DATABASE_FILENAME'),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('STRAPI_DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
