module.exports = function(app, passport) {
    var path = require("path");
    app.set("views", path.join(__dirname, "..", "web/src/app"));
    app.get('/', function(req, res){
     res.render('./login/login.module#LoginModule');
    });
   
    app.get('/login', function(req, res){
     res.render('./login/login.module#LoginModule', {message:req.flash('loginMessage')});
    });
   
    app.post('/login/login', passport.authenticate('local-login', {
     successRedirect: './layout/layout.module#LayoutModule',
     failureRedirect: './login/login.module#LoginModule',
     failureFlash: true
    }),
     function(req, res){
      if(req.body.remember){
       req.session.cookie.maxAge = 1000 * 60 * 3;
      }else{
       req.session.cookie.expires = false;
      }
      res.redirect('/');
     });
    }