var querystring = require('querystring');
var url = require('url');

module.exports = function(app) {
    app.get('/diary_table', function(req, res) {
        if(req.session.user) {
            res.render('diary_table');
        }else{
            res.session.error('请先登陆');
            res.redirect('login');
        }
    })
}
