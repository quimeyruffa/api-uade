// Gettign the Newly created Mongoose Model we just created 
var User = require('../models/User.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const Child = require('../models/Child.model');
const Vaccine = require('../models/Vaccine.model');
const Control = require('../models/Control.model');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the User List
exports.getUsers = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Users = await User.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Users;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Users');
    }
}

exports.createUser = async function (user) {
    // Creating a new Mongoose Object by using the new keyword
    var hashedPassword = bcrypt.hashSync(user.password, 8);
    
    var newUser = new User({
        name: user.name,
        lastname: user.lastname,
        telefono: user.telefono,
        dni: user.dni,
        email: user.email,
        date: new Date(),
        password: hashedPassword
    })
    var _details = await User.findOne({
        dni: user.dni
    });
    if(_details === null){

        try {
            // Saving the User 
            var savedUser = await newUser.save();
            var token = jwt.sign({
                id: savedUser._id
            }, process.env.SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
            return token;
        } catch (e) {
            // return a Error message describing the reason 
            console.log(e)    
            throw Error("Error while Creating User")
        }
    }else{
        throw Error("The User Already Exists")
    }
}
exports.createChild = async function (child){
    
    var newChild = new Child({
        parent: child.parent,
        name: child.name,
        birth: child.birth,
        bloodType: child.bloodType,
        alergias: child.alergias,
        enfermedades: child.enfermedades,
        telefono: child.telefono
    })
    try {
        //Saving the child 
        var savedChild = await newChild.save();
        return savedChild._id;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Child")
    }
}

exports.createVaccine = async function (vaccine){
    var newVaccine = new Vaccine({
        child:vaccine.child,
        nameVaccine: vaccine.nameVaccine,
        dateChild: vaccine.dateChild,
        lugar: vaccine.lugar,
        fechaVacunacion: vaccine.fechaVacunacion
    });
    try {
        var newVaccine = await newVaccine.save()
        return newVaccine._id;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Vaccine")
    }
}
 exports.createControl = async function (control) {
     var newControl = new Control({
        child: control.child,
        fecha: control.fecha,
        peso: control.peso,
        altura: control.altura,
        diametro: control.diametro,
        observaciones: control.observaciones,
        history: control.history,
        estudios: control.estudios
     })

     try {
        var newControl = await newControl.save()
        return newControl._id;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Control")
    }
 }
exports.getVaccine = async function(id, name, fecha){
    var _details = await Vaccine.find({
        child: id,
        nameVaccine: name,
        dateChild: fecha,
    });
    try{
        return _details;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Searching Vaccine")
    }
}
exports.getChild = async function(token){
    var _details = await Child.find({
        parent: token
    });
    try{
        return _details;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Searching Child")
    }
}
exports.updateUser = async function (user) {
    
    var id = {name :user.name}

    try {
        //Find the old User Object by the Id
        var oldUser = await User.findOne(id);
    } catch (e) {
        throw Error("Error occured while Finding the User")
    }
    // If no old User Object exists return false
    if (!oldUser) {
        return false;
    }
    //Edit the User Object
    var hashedPassword = bcrypt.hashSync(user.password, 8);
    oldUser.name = user.name
    oldUser.email = user.email
    oldUser.password = hashedPassword
    try {
        var savedUser = await oldUser.save()
        return savedUser;
    } catch (e) {
        throw Error("And Error occured while updating the User");
    }
}

exports.deleteUser = async function (id) {

    // Delete the User
    try {
        var deleted = await User.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("User Could not be deleted")
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the User")
    }
}


exports.loginUser = async function (user) {

    // Creating a new Mongoose Object by using the new keyword
    try {
        // Find the User 
        console.log("login:",user)
        var _details = await User.findOne({
            email: user.email
        });
        
        var passwordIsValid = bcrypt.compareSync(user.password, _details.password);
        if (!passwordIsValid) throw Error("Invalid username/password")

        var token = jwt.sign({
            id: _details._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return {token:token, user:_details};

    } catch (e) {
        // return a Error message describing the reason     
        throw Error("Error while Login User")
    }

}

exports.getControl = async function(child){
    var _details = await Control.find({
        child: child
    });
    try{
        return _details;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Searching Control")
    }
}