import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

export const signup = async(req,res,next)=>{
    const {username,email,password}=req.body;

    if(!username || !email || !password||username===''||email===''||password===''){
        next(errorHandler(400,"All fields are required")) 
    }
    //! Hashing the passsword using bcryptjs
    const hashedPassword= bcryptjs.hashSync(password,10);

    const newUser= new User({
        username,
        email,
        password:hashedPassword,
    });
    
    try {
        await newUser.save();
        res.json('Sign Up succesfull');
    } catch (error) {
       next(error) ; //coming from middleware
    }
    
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password || email === '' || password === '') {
      next(errorHandler(400, 'All fields are required'));
    }
  
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) {
        return next(errorHandler(404, 'User not found'));
      }
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) {
        return next(errorHandler(400, 'Invalid password'));
      }

      //! if all fields are correct then authenticate user- BY jwt 
      const token = jwt.sign(
        { id: validUser._id, isAdmin: validUser.isAdmin },
          process.env.JWT_SECRET
      );
  
      const { password: pass, ...rest } = validUser._doc; //This destructures the password field, renaming it as pass, while the ...rest syntax gathers all the remaining properties into a new object rest.
     // The password field is excluded from rest and can now be handled separately as pass.

         res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);

    } catch (error) {
      next(error);
    }
  };

  //! Google OAuth
  export const google=async(req,res,next)=>{
    const{name,email,googlePhotoUrl} =req.body;
    try {
        const user = await User.findOne({ email });
    // generate access token if user found by email in DB
    if (user) {
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET
      );
      const { password, ...rest } = user._doc; // save all things except password in user._doc
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
       }
       // if not found user or new user then generate new hashed password and then save user._doc
       else{
        const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8); //generated random password by this function
        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10); // hash the generated pass with bcrypt

        //create the new user
       const newUser = new User({  
        username:
          name.toLowerCase().split(' ').join('') +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      
      const token = jwt.sign(
        { id: newUser._id, isAdmin: newUser.isAdmin },
        process.env.JWT_SECRET
      );
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);  //in res password is excluded
      }
    } catch (error) {
        next(error)
    }
  }