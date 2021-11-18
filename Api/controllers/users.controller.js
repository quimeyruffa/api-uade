var UserService = require('../services/user.service');
var UserImgService = require('../services/userImg.service');

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getUsers = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var Users = await UserService.getUsers({}, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({ status: 200, data: Users, message: "Succesfully Users Recieved" });
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({ status: 400, message: e.message });
    }
}
exports.getUsersByMail = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let filtro = { email: req.body.email }
    console.log('filtro', filtro)
    try {
        var Users = await UserService.getUsers(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({ status: 200, data: Users, message: "Succesfully Users Recieved" });
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createUser = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller", req.body)
    var User = {
        name: req.body.name,
        lastname: req.body.lastname,
        password: req.body.password,
        dni: req.body.dni,
        email: req.body.email,
        telefono: req.body.telefono
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var createdUser = await UserService.createUser(User)
        return res.status(201).json({ createdUser, message: "Succesfully Created User" })
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log('ERROR ', e)
        return res.status(400).json({ status: 400, message: e.message })
    }
}
exports.createChild = async function (req, res, next) {
    console.log('Creando al niño', req.body)
    // var f = req.body.birth;
    // f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
    var Child = {
        parent: req.body.parent,
        name: req.body.name,
        birth: req.body.birth,
        bloodType: req.body.bloodType,
        alergias: req.body.alergias,
        enfermedades: req.body.enfermedades,
        telefono: req.body.telefono,
    }

    try {
        var createdChild = await UserService.createChild(Child)
        return res.status(201).json({ createdChild, message: "Succesfully Created Child" })
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({ status: 400, message: "User Child was Unsuccesfull" })
    }
}
exports.getChild = async function (req, res, next) {

    try {
        var searchedChild = await UserService.getChild(req.body.token)
        return res.status(201).json({ searchedChild, message: "Succesfully Searched Child" })
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({ status: 400, message: "User Child was Unsuccesfull" })
    }
}
exports.getVaccine = async function (req, res, next) {
    try {
        var searchedVaccine = await UserService.getVaccine(req.body.id, req.body.name, req.body.fecha)
        return res.status(201).json({ searchedVaccine, message: "Succesfully Searched Vaccine" })
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({ status: 400, message: "Searched Vaccine was Unsuccesfull" })
    }
}

exports.setVaccineChild = async function (req, res, next) {

    var Vaccine = {
        child: req.body.child,
        nameVaccine: req.body.nameVaccine,
        dateChild: req.body.dateChild,
        lugar: req.body.lugar,
        fechaVacunacion: req.body.fechaVacunacion
    }
    try {
        var createVaccine = await UserService.createVaccine(Vaccine);
        return res.status(201).json({ createVaccine, message: "Succesfully Created Vaccine" })
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({ status: 400, message: "Create Vaccine was Unsuccesfull" })
    }

}
exports.setControlChild = async function (req, res, next) {
    var Control = {
        child: req.body.child,
        fecha: req.body.fecha,
        peso: req.body.peso,
        altura: req.body.altura,
        diametro: req.body.diametro,
        observaciones: req.body.observaciones,
        history: req.body.history,
        estudios: req.body.estudios
    }

    try {
        var createControl = await UserService.createControl(Control);
        return res.status(200).json({ createControl, message: "Succesfully create control"})
    }catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({ status: 400, message: "Create Vaccine was Unsuccesfull" })
    }
}

exports.recoverPassword = async function (req, res,next) {
    try {
        var RecoverPassword= await UserService.recoverPassword(req.body.dni, req.body.password)
        return res.status(201).json({ RecoverPassword, message: "Succesfully Recover Password" })
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({ status: 400, message: "Recover Password was Unsuccesfull" })
    }
}
exports.getControl = async function (req, res, next) {
    try {
        var getControl = await UserService.getControl(req.body.child)
        return res.status(201).json({ getControl, message: "Succesfully Searched Control" })
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({ status: 400, message: "Searched Control was Unsuccesfull" })
    }
}

exports.updateUser = async function (req, res, next) {

    // Id is necessary for the update
    if (!req.body.name) {
        return res.status(400).json({ status: 400., message: "Name be present" })
    }


    var User = {

        name: req.body.name ? req.body.name : null,
        email: req.body.email ? req.body.email : null,
        password: req.body.password ? req.body.password : null
    }
    try {
        var updatedUser = await UserService.updateUser(User)
        return res.status(200).json({ status: 200, data: updatedUser, message: "Succesfully Updated User" })
    } catch (e) {
        return res.status(400).json({ status: 400., message: e.message })
    }
}

exports.removeUser = async function (req, res, next) {

    var id = req.params.id;
    try {
        var deleted = await UserService.deleteUser(id);
        res.status(200).send("Succesfully Deleted... ");
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
}


exports.loginUser = async function (req, res, next) {

    // Req.Body contains the form submit values.
    console.log("body", req.body);
    var User = {
        email: req.body.email,
        password: req.body.password
    }

    try {
        // Calling the Service function with the new object from the Request Body
        var loginUser = await UserService.loginUser(User);
        console.log(loginUser)
        return res.status(201).json({ loginUser, message: "Succesfully login", status: true })
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({ status: 400, message: "Invalid username or password", status: false })
    }
}

exports.guardarImagenUser = async function (req, res, next) {

    console.log("ImgUser", req.body)
    // Id is necessary for the update
    if (!req.body.email) {
        return res.status(400).json({ status: 400., message: "Mail must be present" })
    }

    let userImg = {
        email: req.body.email,
        nombreImagen: req.body.nombreImagen
    }

    try {
        if (userImg.nombreImagen !== '') {
            var newUserImg = await UserImgService.createUserImg(userImg);
        }

        return res.status(201).json({ status: 201, message: "Imagen cargada" });

    } catch (e) {
        console.log("error guardar imagen", e)
        return res.status(400).json({ status: 400., message: e.message })
    }
}

exports.getImagenUserByMail = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    //obtener filtro
    var filtro = {
        mail: req.body.email
    }
    try {
        var UsersImg = await UserImgService.getImagenesByUser(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        console.log("userByDni", UsersImg)
        if (UsersImg.total === 0)
            return res.status(201).json({ status: 201, data: UsersImg, message: "No existe Mail" });
        else
            return res.status(200).json({ status: 200, data: UsersImg, message: "Succesfully Users Recieved" });
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({ status: 400, message: e.message });
    }
}


