module.exports = function(app) {
    app.get('/score_table', function(req, res) {
        res.render('score_table');
    })
}
