const {createUser} = require("../controller/user")

const router = require("express").Router()


// const {Router}= require("express")

router.post("/user",createUser)


module.exports = router