const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const Userschema= new mongoose.Schema({
    tagname: {
        type:String,
        required: true
    },
    name: {
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    cpassword:{
        type:String,
        required: true
    },
    subject: {
        type:String,
        required: true
    },
    phoneNum: {
        type:Number,
        required: true
    },
    address :{
        type:String,
        required: true
    },
    class_standard:{
        type:Array,
        required: true
    },
    // tokens: [
    //     {
    //         token:{
    //             type:String,
    //             required:true
    //         }
    //     }
    // ]

})
Userschema.pre('save', async function (next){
    console.log('hi from inside schema');
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next();
})

// generating token
// Userschema.methods.generateAuthToken = async function(){
//     try {
//         let tokenarin =jwt.sign({_id:this._id},process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({token:tokenarin});
//         await this.save();
//         return token;
//     }catch(err){
//         console.log(err);
//     }
// }
const Userteacher=mongoose.model('arinmerncollection',Userschema);

module.exports = Userteacher;

