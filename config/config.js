module.exports = {
    development: {
        port: process.env.PORT || 4000,
        privateKey: 'SOFT-UNI-WORKSHOP',
        databaseUrl: `mongodb+srv://user:softuni-password@softuni-5daup.mongodb.net/exam?retryWrites=true&w=majority`
    },
    production: {}
};