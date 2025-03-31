import { ExpressServer } from "./common/expressServer.js";
import { logger } from "./config/logger.config.js";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";


const server = new ExpressServer({  
    port: process.env.PORT || 8080,
    serverCookiesSign: process.env.SERVER_COOKIES_JWT_NAME,
    logger: logger,
    routerList: [],
    errorHandlerMiddleware: errorHandlerMiddleware
})

export default server