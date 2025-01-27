const {employeInfo} = require ("../models")

const  {v4:uuidv4} = require ("uuid")


exports.createUser =async (req,res)=>{
  try {
    const {fullName, sex, age, isMarried} = req.body
const newUser  = await  employeInfo.create({
  id:uuidv4(),
  fullName,
  sex,
  age,
  isMarried
})


res.status(201).json({message:`New user created`, data:newUser})

  } catch (error) {
    res.status(500).json({message:`error.message`})
  }
}