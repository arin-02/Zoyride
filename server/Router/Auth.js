const express=require('express');
// const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const jswt=require('jsonwebtoken');
const router=express.Router();
require('../ComponentBackend/Mongodb');
const Userteacher=require('../Model/Userschema');
router.get('/', (req,res)=>{
    res.send('Hello world from Auth routerjs')
});

// router.post('/register',(req,res)=>{

//     const {name,subject,phoneNum,address,class_standard}=req.body;

//     console.log(req.body);
//     // console.log(req.body.name);
//     // console.log(req.body.class_standard);
//     // console.log(subject);

//     // res.json({message:req.body});
//     // res.send("mera registration page");

//     if(!name || !subject || !phoneNum || !address||!class_standard)
//     {
//         return res.status(422).json({error:"please fill the fields properly"});
//     }
//     //database:user filling 


//     Userteacher.findOne({phoneNum:phoneNum}).then((userExist)=>{
//         if(userExist)
//         {
//             res.status(422).json({error:"phoneNum already exist"});
//         }
//         const adduser=new Userteacher({name:name,subject:subject,phoneNum:phoneNum,address:address,class_standard:class_standard})
//         // single bhi likh skte hai ye becoz same value
        
//         adduser.save().then(()=>{
//             res.status(200).json({message:"successfully added"});
//         }).catch((err)=>{
//             res.status(500).json({error:"failed to add user"});
//         })
//     }).catch((err)=>
//         {console.log(err);}
//     )

// });

router.post('/register',async(req,res)=>{

    const { tagname, nameofuser:name,email,password,cpassword,subject,phoneNum,address,class_standard}=req.body.userinfo;

    // console.log(req.body);


    if(!tagname ||!name || !email || !password|| !cpassword || !subject || !phoneNum || !address||!class_standard)
    {
        return res.status(422).json({error:"please fill the fields properly"});
    }
    //database:user filling 

    try{
       const userExist= await Userteacher.findOne({phoneNum:phoneNum})
       if(userExist)
            {
                res.status(422).json({error:"phoneNum already exist"});
            }
            
            const adduser=new Userteacher({tagname:tagname,name:name,email:email,password:password,cpassword:cpassword,subject:subject,phoneNum:phoneNum,address:address,class_standard:class_standard})

           const userregister= await adduser.save();
            if(userregister)
            {
                res.status(200).json({message:"successfully added"});
            }
            else
            {
                res.status(500).json({error:"failed to add user"});
            }
           
    } catch(err){
        
        console.log(err);
    }
    
    

});

// LOGIN Route
router.post('/login',async(req,res)=>{
    try{
        // let token;
        const { tagname ,email , password }  = req.body.loginuserinfo;
        if( !tagname || !email || !password  )
        {
            return res.status(400).json({error:"please enter a valid field"});
        }
        const userlogin = await Userteacher.findOne({email: email});
        // console.log(userlogin);
        
        if(userlogin)
        {
            const ismatch= await bcrypt.compare(password,userlogin.password);

            // const token= await userlogin.generateAuthToken();
            // console.log(token);
            
            // res.cookie("jetoken",token,{
            //     expires:new Date(Date.now()+25892000000),
            //     httpOnly:true
            // });

            if(!ismatch)
            {
                res.status(400).json({error:"USER error"});
                
            }
            else
            {
                res.json({ email,tagname,password});
                
            }
        }
        else
        {
            res.status(400).json({error:"please enter a valid field"});
        }

        

        
    }
    catch(err){
        console.log(err);

    }
//    console.log(req.body);
//    res.json({message:req.body});
})

module.exports=router;