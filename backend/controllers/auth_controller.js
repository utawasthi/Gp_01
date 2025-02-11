


const registerUser = async (req , res) => {
  try{
    const {name , email , password} = req.body;
    console.log(`${name} ${email} ${password}`);
  }catch(error){
    console.log("some error occured !" , error);
  }
}

// http://localhost:3000/api/registerUser

const loginUser = async (req , res) => {

}

module.exports = {
    registerUser,
    loginUser,
}
