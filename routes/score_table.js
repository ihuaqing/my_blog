module.exports = function(app) {
    app.get('/score_table', function(req, res) {
        if(req.session.user) {
            var score_table = global.dbHelper.getModel('score_table');
            var week_eva = global.dbHelper.getModel('week_eva');
            var table;
            score_table.find({}, function(error, docs) {
                week_eva.find({}, function(error, doc) {
                    console.log('get from database');
                    console.log(doc);
                    res.render('score_table', {eva_table: doc, table: docs});
                })
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
                    if(index1 === 42*4) {
                        return;
                    }
                    score_table.update({id: kk[index1].id},{
                        color: kk[index1].color,
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
                    if (index === 42*4) {
                        return;
                    }
                    score_table.create({
                        id: kk[index].id,
                        color: kk[index].color,
                        eva: kk[index].eva
                    }, function(error, doc) {
                        if(doc) {
                        }else{
                        }
                    });
                    iterator(index+1);
                })(0);
            }
        })

        var kk_eva = req.body.my_eva;
        console.log('into database');
        console.log(kk_eva);
        var week_eva = global.dbHelper.getModel('week_eva');

        week_eva.findOne({}, function(error, docs) {
            if(docs) {
            console.log('eva更新');
                (function iterator(index1){
                    if(index1 === 4) {
                        return;
                    }
                    
                    week_eva.update({eva_id: kk_eva[index1].eva_id},{
                        eva: kk_eva[index1].eva,
                    },{strict: false},function(error,doc){
                        if(doc){
                        }else{
                        }
                    });
                    iterator(index1 + 1);
                })(0);
            }else{
                console.log('eva创建');
                (function iterator(index){
                    if (index === 4) {
                        return;
                    }
                    week_eva.create({
                        eva_id: kk_eva[index].eva_id,
                        eva: kk_eva[index].eva
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
