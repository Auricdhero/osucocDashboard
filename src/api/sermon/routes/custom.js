module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/sermons/:slug',
            handler: 'sermon.findOne',
            config: {
                auth: false
            }
        }
    ]
}