
import { randomInt } from "../utils/randomInt"
import { Request, Response } from "express";

class ProductController {


    static index (req: Request, res:Response) {
        
        return res.status(200).redirect('/views/index.html');
    }


}

export default ProductController;