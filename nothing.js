//使用session
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    var err = req.session.err;
    res.locals.message = '';
    if (err) res.locals.message = <div..>
    //提示信息(已html格式呈现)
    next();
})
