var express = require('express')
var router = express.Router()
var UserController = require('../../controllers/users.controller');
var UploadController = require('../../controllers/upload.controller');
var MailController = require('../../controllers/mail.controller');
var Authorization = require('../../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/user.routes');
  });
router.post('/registration', UserController.createUser)
router.post('/createChild', UserController.createChild)
router.post('/login/', UserController.loginUser)
router.get('/',Authorization, UserController.getUsers)
router.post('/getChild', UserController.getChild)
router.post('/recoverPassword', UserController.recoverPassword)

//VACCINE
router.post('/setVaccine', UserController.setVaccineChild)
router.post('/getVaccine', UserController.getVaccine)


//CONTROLS
router.post('/setControl', UserController.setControlChild)
router.post('/getControl', UserController.getControl)


router.post('/userByMail',  UserController.getUsersByMail)
router.put('/', Authorization, UserController.updateUser)
router.delete('/:id', Authorization, UserController.removeUser)
router.post('/guardarImgUser',UserController.guardarImagenUser)
router.post('/uploadImg',UploadController.uploadFilesImgUser);
router.post('/imgUserByMail',Authorization,UserController.getImagenUserByMail)
router.post('/sendMail',MailController.sendEmail)



// Export the Router
module.exports = router;

 

//api/users
//api/users/registration
//api/users/login