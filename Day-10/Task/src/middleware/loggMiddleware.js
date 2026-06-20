
export function loggerMiddlerware(req,res,next){
    const time = new Date()
    const method = req.method;
    const path = req.path;
    console.log(`${time} - ${method} - ${path}`);
    next();
}

// rate limiting
// joi validation