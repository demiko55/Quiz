require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const {Server} = require('socket.io');
const io = new Server(server);

const { Create, Update, getScore } = require('../database/controllers/quiz.js');
const { Get, AddSource } = require('../database/controllers/source.js');

var multer = require('multer');
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
  destination: 'client/dist/uploads/'
})

const upload = multer({ storage })
//const upload = multer({ dest: 'uploads/' });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(__dirname + '/../client/dist'));

app.post('/quiz', (req, res) => {
  Create(req.body).then((data) => {
    res.status(200).send(data);
  }).catch((err) => {
    console.log('post data to db err', err);
    res.status(404).send();
  })
});

app.put('/score', (req, res) => {
  // console.log('req query', req.query);
  // console.log('req body', req.body);
  Update(req.body.id).then((data) => {
    res.status(200).send(data);
  }).catch((err) => {
    console.log('update score to db err', err);
    res.status(404).send();
  })
});

app.get('/score', (req, res)=>{
  getScore(req.query.id).then((data) => {
    console.log('get score from db', data);
    res.status(200).send(data);
  }).catch((err) => {
    console.log('get score to db err', err);
    res.status(404).send();
  })
})

app.get('/source', (req, res) => {
  console.log('get source', req.query);
  Get(req.query).then((data) => {
    res.status(200).send(data);
  }).catch((err) => {
    console.log('get data from db err', err);
    res.status(404).send();
  })
})

//formData is submitted as multipart bodies,need to use module like multer to handle it.
app.post('/source', upload.single('src'), (req, res) => {
  const formData = req.body;
  console.log('file', req.file);
  if (req.file) {
    formData.src = 'uploads/' + req.file.originalname;
  }
  AddSource(formData).then((data) => {
    res.status(200).send('success');
  }).catch((err) => {
    res.status(404).send(err.message);
  })
});

// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });

server.listen(process.env.PORT, ()=>{
  console.log(`listening on port ${process.env.PORT}`);
});


// var rooms = {};
// //handle incoming socket connections
// io.on('connection', function (socket) {
// 	//log a new connection
// 	console.log('a new user connected. ID: ',socket.id);
//   socket.on('disconnect', function () {
//     console.log('A user disconnected');
//  });
