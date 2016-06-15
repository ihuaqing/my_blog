module.exports = function(app) {
    app.get('/my_home', function(req, res) {
        res.render('my_home');
    })
}
