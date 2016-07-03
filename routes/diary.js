module.exports = function(app) {
    app.get('/diary', function(req, res) {
        res.render('diary');
    })

    app.post('/diary', function(req, res) {
        var kk = req.body.my_diary;
        var diary = global.dbHelper.getModel('diary');
        diary.findOne({}, function(error, docs) {
            if(docs) {
                //更新
                diary.update({id: kk.id}, {
                    content: kk.content
                }, {strict: false}, function(error, doc){
                    //处理是否更新的逻辑
                })
            }else{
                //创建 
                diary.create({
                    id: kk.id,
                    content: kk.content
                }, function(error, doc) {
                   //处理是否创建的逻辑 
                })
            }
        })
    })
}
