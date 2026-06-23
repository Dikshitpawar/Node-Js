
export function logMiddleware(req,res,next){
    const time = new Date().toLocaleString();
    const path = req.path
    const method = req.method

    console.log(`${time} - ${method} - ${path}`)
    next()
}