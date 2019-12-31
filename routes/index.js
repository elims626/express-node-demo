var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'index' });
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'login' });
});
router.get('/register', (req, res) => {
  res.render('register', { title: 'register' });
});

router.post('/login', (req, res) => {
  // 登录业务逻辑
  const { body } = req;
  const { username, password } = body;
  User.findOne({username, password}, (err, data) => {
    if(err) throw err;
    if (data) {
      res.render("index.jade");
    } else {
      res.send('---账号或密码错误---');
    }
  })
});
router.post('/register', (req, res) => {
  // 注册业务逻辑
  const { body } = req;
  const { username, password } = body;
  const user = new User({username, password});
  user.save((err, data) => {
    if(err) throw err;
    if (data) {
      res.render("login.jade");
    } else {
      res.send('---账号注册失败---');
    }
  })
});

module.exports = router;
