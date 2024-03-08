// Path: ./config/env/production/server.js
// starting from Strapi v 4.6.1 server.js has to be the following

module.exports = ({ env }) => ({
    proxy: true,
    host: "0.0.0.0",
    port: process.env.PORT,
    url: env('https://emily-blog-backend-eedb993a47c4.herokuapp.com'),
    app: { 
      keys: env.array('WbXqpKL604vssxQFToKLXf+R1E5QNhmngj5Lx+PDYjw=')
    },
    admin: {
      auth: {
        secret: env('7T0RpepaSNI0TrA0FaNA7BR4pyZ/ik36RN/1zYooHVY='),
      },
    },
  })
  