// path: ./config/env/production/database.js

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
};




// const parse = require('pg-connection-string').parse;

// module.exports = ({ env }) => {

//   if(env('NODE_ENV') === 'production'){
//     const config = parse(process.env.DATABASE_URL);
//     return {
//       defaultConnection: 'default',
//       connections: {
//         default: {
//           connector: 'bookshelf',
//           settings: {
//             client: 'postgres',
//             host: config.host,
//             port: config.port,
//             database: config.database,
//             username: config.user,
//             password: config.password,
//           },
//           options: {
//             ssl: false,
//           },
//         },
//       },
//     }
//   }
  
//   return {
//     defaultConnection: 'default',
//     connections: {
//       default: {
//         connector: 'bookshelf',
//         settings: {
//           client: 'sqlite',
//           filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//         },
//         options: {
//           useNullAsDefault: true,
//         },
//       },
//     },
//   }
// };