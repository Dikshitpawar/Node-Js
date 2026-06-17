

export function loggerMiddleware(req,res,next){
    const path = req.path
    const method = req.method
    const time = new Date();

    console.log(`${time} : ${method} : ${path}`);

    next()
}