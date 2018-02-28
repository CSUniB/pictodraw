const User = require('./userModel');

module.exports = {
  createUser: (req, res, next) => {
    return new Promise ((resolve, reject) => {
      User.findOne(req.body, (err, doc) => {
        if (err || doc) {
          reject({type: 'DB', err});
        }
        return resolve();
      });
    }).then(() => {
      User.create(req.body, (err, doc) => {
        if (err) {
          reject({type: 'DB', err});
        }
        res.locals.userData = doc;
        next();
      })
    }).catch(() => res.redirect('/login'));
  },
  verifyUser: (req, res, next) => {
    User.findOne(req.body, (err, doc) => {
      if (err || !doc) {
        console.error(err)
        return res.redirect('/signup');
      }
      res.locals.userData = doc;
      next();
    })
  }
}