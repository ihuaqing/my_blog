var url = require('url');
var querystring = require('querystring');

module.exports = function(app) {
    app.get('/diary', function(req, res) {
        if(req.session.user) {
            var diary = global.dbHelper.getModel('diary');

            var qu = url.parse(req.url).query;
            var id = querystring.parse(qu).id;
            diary.find({id: id}, function(err, doc) {
                if(doc.length === 0) {
                    doc = [{content: ''}];
                }
                res.render('diary', {diary:doc, id: id});
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
        diary.findOne({id : kk[0].id}, function(error, docs) {
            if(docs) {
                //更新
                console.log('更新');
                diary.update({id: kk[0].id}, {
                    content: kk[0].content
                }, {strict: false}, function(error, doc){
                //处理是否更新的逻辑
                })
            }else{
                //创建 
                console.log('创建');
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
