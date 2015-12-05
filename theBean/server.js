console.log('hello, from node');

  express 		       = require('express'),
	app 			         = express(),
  port               = process.env.PORT || 3000,
	mongoose           = require('mongoose'),
	bodyParser         = require('body-parser'),
	backController 	   = require('./server/controllers/backController'),
	multer  		       = require('multer'),
	upload 			       = multer({ dest: 'uploads/' }),

  configDB           = require('./config/db.js'),
  passport           = require('passport'),
  flash              = require('connect-flash'),
  morgan             = require('morgan'),
  cookieParser       = require('cookie-parser'),
  session            = require('express-session');

mongoose.connect(configDB.url);

app.use(bodyParser());

//REST API
app.get('/api/articles',    backController.list);
app.post('/api/articles',   backController.create);
app.delete('/api/articles', backController.remove);
app.post('/api/pictures',   backController.uploadPicture);

///cp pst from easy-node-authentication
require('./config/passport')(passport); // pass passport for configuration
// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovethetimbers' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//Shortcuts
app.use('/js',          express.static(__dirname + '/client/js'));
app.use('/uploads' ,    express.static(__dirname + '/client/uploads/pictures'));
app.use('/assets',      express.static(__dirname + '/client/assets'));
app.use(express.static(__dirname + '/client')); //set shortcuts

// routes ======================================================================
require('./server/routes/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

//end cp pst


///put all this in a nother file
var storage = multer.diskStorage({

    destination: function(req, file, cb) {
      cb(null, './client/uploads/pictures');
    },
    filename: function(req, file, cb) {

    	//declare function to get file extension
      var getFileExt = function(fileName) {
        var fileExt = fileName.split(".");
        if (fileExt.length === 1 || (fileExt[0] === "" && fileExt.length === 2)) {
          return "";
        }
        return fileExt.pop();
      };

      	//not sure what cb stands for 
      cb(null, Date.now() + '.' + getFileExt(file.originalname));
    }
  });

app.use(multer({
    storage: storage
  }).single('file'));
//// end all this




//URL GETS
// app.get('/', function (req, res) {
// 	res.sendFile(__dirname + '/client/views/index.html');
// });

app.listen(port, function(req, res){
	console.log('i\'m listening');
})