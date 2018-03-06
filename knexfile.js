module.exports = {
  development: {
    client: "pg",
    connection: "postgresql:///poems",
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
  },
};
