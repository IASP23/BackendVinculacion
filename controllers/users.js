import { User } from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import {} from 'dotenv/config'


export const getUsers = async (req, res) => {
  try {
    const Users = await User.findAll();
    res.json( Users );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.send(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createUser = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const newUser = await User.create(req.body);
    console.log(newUser);
    res.status(200).send(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    /*     const {userName  , password , role  } = req.body ;
     */
    const userUpdate = await User.findByPk(id);
    /*     userUpdate.userName = userName ; 
    userUpdate.password = password ; 
    userUpdate.role = role ;  */
    userUpdate.set(req.body);
    await userUpdate.save();
    res.send("Updating");
  } catch (error) {
    return res.sendStatus(500).json({ message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({
      where: { id },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const user = await User.findOne({
    where: { userName: req.body.userName },
  });

  if (user) {
    const validatePassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (validatePassword) {
        
        res.json( { success :  createToken(user)})
    }
    else{
        res.json({ error: "Verifique x sus credenciales" });
    }
  } else {
    res.json({ error: "Verifique sus credenciales" });
  }
  /* console.log(user) */
};

const createToken = (user) => {
/*   const id = user.id ;
  const token = jwt.sign({id : id } , process.env.SECRET_TOKEN  , 
    {expiresIn : process.env.EXPIRED_TOKEN}) ; 
   return token ; */
        let payload = { //Create object
          usuario : user.id ,
          time : Date()
      }
      const token = jwt.sign(payload , process.env.JWT_SECRET_KEY )
      return token ; 
      /* return jwt.encode ( payload , "Token");  */
}