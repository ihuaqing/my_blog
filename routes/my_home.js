module.exports = function(app) {
    app.get('/my_home', function(req, res) {
        if(req.session.user) {
            res.render('my_home');
        }else{
            req.session.error = '请先登陆';
            res.redirect('login');
        }
    })
}
