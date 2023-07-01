

 exports.myMiddlewareSession = (req,send,next) => {
    console.log("ENTROU MIDDLEWARE ");
    next();
 }