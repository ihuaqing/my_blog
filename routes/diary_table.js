var querystring = require('querystring');
var url = require('url');

module.exports = function(app) {
    app.get('/diary_table', function(req, res) {
        //var diary = global.dbHelper.getModel('diary');
        res.render('diary_table');

        
        var qu = url.parse(req.url).query;
        var id = querystring.parse(qu).id;
        switch(id) {
            case "0":
                res.redirect('login')
                break;
            case "1":
                //diary.find({id: "1"},function(err, doc) {
                    res.render('login');
                //})      
                break;
            case "2":
                diary.find({id: "2"},function(err, doc) {
                    res.render('diary', {diary:doc});
                })      
                break;
            case "3": 
                
                break;
            case "4": 
                
                break;
            case "5":
                
                break;
            case "6":
                
                break;
        }
        
        //id==="0"?console.log('ok0'):id==="1"?console.log('ok1'):id==="2"?console.log('ok2'):id==="3"?console.log('ok3'):id==="4"?console.log('ok4'):id==="5"?console.log('ok5'):console.log('ok6');
        //id===d?(id===d?console.log('false'):console.log('ok1')):console.log('ok0');
    })
}
