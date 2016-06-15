module.exports = function ( app ) {
    app.get('/logout', function(req, res){
        console.log('进行登出');
        req.session.user = null;
        req.session.error = null;
        res.redirect('/');
    });
}
