const asyncHandler=(func)=>{
    (req,res,next)=>{
        Promise.resolve(func(req,res,next)).catch((err)=>next(err))
    }
}

export{asyncHandler}


// const asyncHandler=(fun)=>{
//     async (req,res,next)=>{
//         try{
//             await fun(req,res,next)
//         }catch(err){
//             res.status(err.code||300).json({
//                 succeess:false,
//                 message:err.message
//             })
//         }
//     }
// }

// export{asyncHandler}