var url = require('url');
var querystring = require('querystring');

module.exports = function(app) {
    app.get('/diary', function(req, res) {
        if(req.session.user) {
            var diary = global.dbHelper.getModel('diary');

            var qu = url.parse(req.url).query;
            var id = querystring.parse(qu).id;
            switch(id) {
                case "0":
                    diary.find({id: "0"},function(err, doc) {
                        if(!doc.content){
                            doc = [{content: ' '}];          
                        }   
                        res.render('diary', {diary:doc, id: id});
                    })      
                    break;
                case "1":
                    diary.find({id: "1"},function(err, doc) {
                        if(!doc.content){
                            doc = [{content: ' '}];          
                        }   
                        res.render('diary', {diary:doc, id: id});
                    })      
                    break;
                case "2":
                    diary.find({id: "2"},function(err, doc) {
                        if(!doc.content){
                            doc = [{content: ' '}];          
                        }   
                        res.render('diary', {diary:doc, id: id});
                    })      
                    break;
                case "3": 
                    diary.find({id: "3"},function(err, doc) {
                        if(!doc.content){
                            doc = [{content: ' '}];          
                        }   
                        res.render('diary', {diary:doc, id: id});
                    })      
                    break;
                case "4": 
                    diary.find({id: "4"},function(err, doc) {
                        if(!doc.content){
                            doc = [{content: ' '}];          
                        }   
                        res.render('diary', {diary:doc, id: id});
                    })      
                    break;
                case "5":
                    diary.find({id: "5"},function(err, doc) {
                        if(!doc.content){
                            doc = [{content: ' '}];          
                        }   
                        res.render('diary', {diary:doc, id: id});
                    })      
                    break;
                case "6":
                    diary.find({id: "6"},function(err, doc) {
                        if(!doc.content){
                            doc = [{content: ' '}];          
                        }   
                        res.render('diary', {diary:doc, id: id});
                    })      
                    break;
                default:
                    res.redirect('diary_table');
            }
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
