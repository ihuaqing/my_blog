module.exports = function(app) {
    app.get('/diary', function(req, res) {
        if(req.session.user) {
            var diary = global.dbHelper.getModel('diary');
            diary.find({}, function(error, docs) {
                console.log(docs);
                res.render('diary', {diary: docs});
            })
        }else{
            req.session.error = '请先登陆';
            res.redirect('login');
        }
    })

    app.post('/diary', function(req, res) {
        var kk = req.body.one_diary;
        //kk是对象数组
        
        var diary = global.dbHelper.getModel('diary');
        diary.findOne({}, function(error, docs) {
            if(docs) {
                //更新
                diary.update({id: kk[0].id}, {
                    content: kk[0].content
                }, {strict: false}, function(error, doc){
                //处理是否更新的逻辑
                })
            }else{
                //创建 
                diary.create({
                    id: kk[0].id,
                    content: kk[0].content
                }, function(error, doc) {
                //处理是否创建的逻辑 
                })
            }
        })
    })
}
