// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'language_app'
    },
    debug : true
  },

  test: {
    client: 'pg',
    connection: {
      database: 'language_app_test'
    },
      pool: {
      min: 1,
      max: 5
    },
    debug:true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
