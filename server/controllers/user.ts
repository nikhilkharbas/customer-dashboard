import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express'
import * as bcrypt from 'bcryptjs';

// DB
import { connect } from '../database'
// Interfaces
import { User } from '../models/Users'

export async function getUsers(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const users = await conn.query('SELECT * FROM users');
        return res.json(users[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createUser(req: Request, res: Response) {
    const newUser: User = req.body;
    bcrypt.genSalt(10, (err, salt) => {
      if (err) { return err; }
      bcrypt.hash(newUser.password, salt, (error, hash) => {
        if (error) { return error; }
        newUser.password = hash;
    });
  });
    const conn = await connect();
    await conn.query('INSERT INTO users SET ?', [newUser]);
    res.json({
        message: 'New User Created'
    });
}

export async function getUser(req: Request, res: Response) {
    const id = req.params.userId;
    const conn = await connect();
    const users = await conn.query('SELECT * FROM users WHERE id = ?', [id]);
    res.json(users[0]);
}

export async function deleteUser(req: Request, res: Response) {
    const id = req.params.userId;
    const conn = await connect();
    await conn.query('DELETE FROM users WHERE id = ?', [id]);
    res.json({
        message: 'user deleted'
    });
}

export async function updateUser(req: Request, res: Response) {
    const id = req.params.userId;
    const updateUser: User = req.body;
    const conn = await connect();
    await conn.query('UPDATE users set ? WHERE id = ?', [updateUser, id]);
    res.json({
        message: 'User Updated'
    });
}