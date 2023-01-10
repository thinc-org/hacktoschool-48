// import { Request, Response, NextFunction } from 'express';
// import { userSchema } from './model/user'; // import User Schema 
// import { UserModel } from './model/user';\
// import { collections } from './services/mongoose.service';

// const checkRole = (collections?.user.schema. : string) => {
//     return (req: Request, res: Response, next: NextFunction) => {
//         const { userSchema } = req.body;

//         if (!) {
//             return res.status(401).send({ message: "You are not authorized" });
//         }
//         UserModel.findById(userSchema._id).then((result) => {
//             if (!result) {
//                 return res.status(401).send({ message: "You are not authorized" });
//             }
//             if(result.roles.indexOf(role) === -1){
//                 return res.status(401).send({ message: "You are not authorized to access this route" });
//             }
//             next();
//         }).catch(() => {
//             res.status(500).send({ message: "Error fetching user" });
//         });
//     }
// };

// export default checkRole;


