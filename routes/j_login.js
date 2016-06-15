var check = 0;
//js中没有声明这一回事吗

check.prototype = {
    _test: function() {
        console.log('测试成功');
    },

    _checkLogin: function(req, res, next) {
        if(!req.session.user) { 
            req.session.error =  '请先登陆';
            res.render('login');
        }
        next();
    },

    _checkNotLogin: function(req, res, next) {
        if(req.session.user) {
            req.session.error = '已登陆';
            res.render('back');
        }
        next();
    }
}


check.test3 = function() {
    console.log('测试成功3');
}

module.exports = check;

