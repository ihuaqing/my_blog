module.exports = function(app) {
    app.get('/diary_table', function(req, res) {
        if(req.session.user) {
            var diary_week = global.dbHelper.getModel('diary_week');
            diary_week.findOne({id: 1}, function(err, doc) {
                if(doc === null){
                    doc.amount = 3
                }
                console.log(doc.amount);
                res.render('diary_table', {week: doc.amount});
            })
        }else{
            req.session.error = '请先登陆'
            res.redirect('login');
        }
    })

    app.post('/diary_table', function(req,res) {
       var ans = req.body.w_amount;
       //ans即得到的周数
       
       var diary_week = global.dbHelper.getModel('diary_week');
       diary_week.findOne({id: 1}, function(error, doc) {
           if(doc){
               console.log('更新');
               diary_week.update({id: 1}, {
                   amount: ans
               }, {strick: false}, function(error, doc) {
                   //handle error
               })
           }else{
               console.log('创建');
               diary_week.create({
                   id: 1,
                   amount: ans
               }, function(error, doc) {
                   //handle err and doc
               })
           }
       })
    })
}
