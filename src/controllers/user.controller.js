const userRegister=async (req,res)=>{
    // res.status(200).json({
    //     message:"success"
    // })
    res.render('register')
}

const userHome=async(req,res)=>{
    res.render('user')
}
const admin=async(req,res)=>{
    res.render("admin")
}
const notFound404=async(req,res)=>{
    res.render("noteFound404")
}

export {userRegister,userHome,admin,notFound404}