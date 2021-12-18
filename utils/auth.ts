// import { token_secret } from "@env/index";
// import { genSalt, hash } from "bcryptjs";
// import { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// // import { accessTokenSecrete } from "../config/constants";

// /**
//  *  Function which act as middleware to verify request is valid
//  * @param {*} req
//  * @param {*} res
//  * @param {*} next
//  * @returns next
//  */
// export const authorize = function (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   const token = req.header("Autherization");
//   if (!token) {
//     return res.status(401).json({ msg: "Login Again" });
//   }
//   try {
//     const decoded: any = jwt.verify(token, token_secret!);
//     // req.user = decoded.user;
//     if (decoded.user) {
//       next();
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(403).json({ msg: "Login Again" });
//   }
// };

// export async function hashPassword(password: string) {
//   const salt = await genSalt(10);
//   return await hash(password, salt);
// }
