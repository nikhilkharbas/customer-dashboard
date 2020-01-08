import { Request, Response } from 'express'
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

// DB
import { connect } from '../database'
// Interfaces

export async function login(req: Request, res: Response): Promise<Response | void> {
    console.log('repsonse',res);
    let username = req.body.username
    try {
        const conn = await connect();
        const users = await conn.query('SELECT * FROM users where username = ?',[username]);
        if (!users) { return res.sendStatus(403); }
        bcrypt.compare(req.body.password,users[0][0].password,(err, isMatch) => {
            if (err) { return err; }
            if (!isMatch) { return res.sendStatus(403); }
            const token = jwt.sign({ users }, process.env.SECRET_TOKEN,{
                algorithm: 'HS256',
                expiresIn: process.env.jwtExpirySeconds
              }); // , { expiresIn: 10 } seconds
            res.status(200).json({ token });
        });
   
        //return res.json(users[0]);
    }
    
    catch (e) {
        console.log(e)
    }
}