module.exports = function ( app ) {
    app.get('/register', function(req, res) {
        res.render('register');
    });
    //普通get(跳转)请求直接进行

    //post请求(提交表单),进行注册的身份验证
    app.post('/register', function (req, res) {
        var User = global.dbHelper.getModel('user'),
            uname = req.body.uname;
        User.findOne({name: uname}, function (error, doc) {
            if (error) {
                res.send(500);
                req.session.error = '网络异常错误！';
                console.log(error);
            } else if (doc) {
                req.session.error = '用户名已存在！';
                res.send(500);
            }else if (req.body.upwd !== req.body.upwd_re) {
                req.session.error = '输入两次密码不同';
                res.send(500);
            }else {
                User.create({
                    name: uname,
                    password: req.body.upwd
                }, function (error, doc) {
                    if (error) {
                        res.send(500);
                        console.log(error);
                    } else {
                        req.session.error = '用户名创建成功！';
                        res.send(200);
                    }
                });
            }
        });
    });
}
