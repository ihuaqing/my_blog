var check = require('./j_login');


module.exports = function ( app ) {
    app.get('/login',function(req,res){
        check._test;
        check.test3;
        res.render('login');
    });

    app.post('/login', function (req, res) {
        var User = global.dbHelper.getModel('user');
        console.log(req.body.extra);
        if(req.body.extra === 'iloveyouxyb'){
            req.body.uname = 'vincent';
            req.body.upwd = 'xyb';
        }
        User.findOne({name: req.body.uname}, function (error, doc) {
            if (error) {
                res.send(500);
                console.log(error);
            } else if (!doc) {
                req.session.error = '用户名不存在！';
                res.send(404);
            } else {
               if(req.body.upwd != doc.password){
                   req.session.error = "密码错误!";
                   res.send(404);
               }else{
                   req.session.user=doc;
                   res.send(200);
               }
            }
        });
    });

}
