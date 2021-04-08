import jwt from "jsonwebtoken";
import { secret } from '../controllers/user.js'

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500; // less than 500 -> our token otherwise google auth token

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;