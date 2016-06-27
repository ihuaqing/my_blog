module.exports = function(app) {
    app.get('/score_table', function(req, res) {
        if(req.session.user) {
            var score_table = global.dbHelper.getModel('score_table');
            score_table.find({}, function(error, docs) {
                res.render('score_table', {table: docs});
            })
        }else{
            req.session.error = '请先登陆';
            res.redirect('login');
        }  
    });

    app.post('/score_table', function(req, res) {
        var kk = req.body.my_table;
        //console.log(kk.length);
        //console.log(kk);
        //此时kk是个对象数组
        
        
        var score_table = global.dbHelper.getModel('score_table');
        //异步接下来不能用for循环
        score_table.findOne({}, function(error, docs) {
            if(docs) {
            console.log('更新');
                (function iterator(index1){
                    if(index1 === 42*2) {
                        return;
                    }
                    console.log(kk[index1].color);
                    score_table.update({id: kk[index1].id},{
                        color: kk[index1].color
                    },{strict: false},function(error,doc){
                        if(doc){
                        }else{
                        }
                    });
                    iterator(index1 + 1);
                })(0);
            }else{
                console.log('创建');
                (function iterator(index){
                    if (index === 42*2) {
                        return;
                    }
                    score_table.create({
                        id: kk[index].id,
                        color: kk[index].color
                    }, function(error, doc) {
                        if(doc) {
                        }else{
                        }
                    });
                    iterator(index+1);
                })(0);
            }
        })
    });
}
