module.exports = (app) => {

    app.get('/', (req, res) => {
        res.sendFile('index.html', {
            root: './public/html'
        })
    })
}
