
import { ApiError } from '../../utils/Apierror.utils.js'
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import { User } from '../../models/user.models.js'


const registerUser=
    async(req,res)=>{
        const{userName,email,password}=req.body
        try {
           

    
            const checkUser=await User.findOne(
                {
                    email 
                }
            )

            if(checkUser){
                return res.json({
                    success: false,
                    message: "User Already exist",
                  });
            }
            const hashPass = await bcrypt.hash(password,12); // Correct way


            const newUser=new User({
                userName:userName,
                email:email,
                password:hashPass
            })

           await newUser.save()         // save() mule new user madhe tayar kelela navin data db madhe store honar
           res.json({
            success: true,
            message: "Registration successful",
          });
        } catch (error) {
            throw new ApiError(401,error.message)
            
        }
    }


    const LoginUser = async (req, res) => {
        const { email, password } = req.body;
        console.log('Request Password:', password);
        console.log('Request Email:', email);
    
        try {
            // Find user by email
            const checkUser = await User.findOne({ email });
            if (!checkUser) {
                console.log('User not found');
                return res.json({
                    success: false,
                    message: "User does not exist",
                });
            }
    
            const checkPasswordMatch = await bcrypt.compare(
                password,
                checkUser.password
              );
              console.log(checkPasswordMatch);
              
              if (!checkPasswordMatch)
                return res.json({
                  success: false,
                  message: "Incorrect password! Please try again",
                });
          
              const token = jwt.sign(
                {
                  id: checkUser._id,
                  role: checkUser.role,
                  email: checkUser.email,
                  userName: checkUser.userName,
                },
                "CLIENT_SECRET_KEY",
                { expiresIn: "60m" }
              );
          
              res.cookie("token", token, { httpOnly: true, secure: false }).json({
                success: true,
                message: "Logged in successfully",
                user: {
                  email: checkUser.email,
                  role: checkUser.role,
                  id: checkUser._id,
                  userName: checkUser.userName,
                },
              });
           
        } catch (error) {
            console.error('Login Error:', error.message);
            return res.status(401).json({
                success: false,
                message: error.message,
            });
        }
    };
    
    
const LogoutUser=async(req,res)=>{
    res.clearCookie('token').json({
        success:true,
        message:'logged out'
    })
}

const AuthMiddleware=async(req,res,next)=>{
    const token=req.cookies.token;
    if(!token) return res.status(401).json({
        success:false,
        message:'unothorized user'
    })

    try {
        const decodedToken=jwt.verify(token,'DINESH_DESHMUKH');
        req.user=decodedToken
        next()
    } catch (error) {
        res.status(401).json({
            success:false,
            message:'unothorized user!'
        })        
    }
}

export {registerUser,LoginUser ,LogoutUser,AuthMiddleware}