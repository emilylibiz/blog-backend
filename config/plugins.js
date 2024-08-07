    // ~/strapi-aws-s3/backend/config/plugins.js
    
    module.exports = ({ env }) => ({
        upload: {
          config: {
            provider: 'aws-s3',
            providerOptions: {
              accessKeyId: env('AWS_ACCESS_KEY_ID'),
              secretAccessKey: env('AWS_ACCESS_SECRET'),
              region: env('AWS_REGION'),
              params: {
                ACL: env('AWS_ACL', 'public-read'),
                signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
                Bucket: env('AWS_BUCKET'),
              },
            },
            actionOptions: {
              upload: {},
              uploadStream: {},
              delete: {},
            },
          },
        },
        sitemap: {
          enabled: true,
          config: {
            cron: '0 0 0 * * *',
            limit: 45000,
            xsl: true,
            autoGenerate: false,
            caching: true,
            allowedFields: ['id', 'uid', 'urlSlug', 'tagName'],
            excludedTypes: [],
          },
        },
  });