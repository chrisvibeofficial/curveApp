const {createUser, bulkuser} = require("../controller/user")

const router = require("express").Router()


// const {Router}= require("express")

router.post("/user",createUser)


router.post("/multiple",bulkuser)


module.exports = router