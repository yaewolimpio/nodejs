import bcryptjs from 'bcrypt'
import pool from '../config/database.js'
import jwt from 'jsonwebtoken'

export const gerarHashSenha = async(senha)=> bcrypt.hash(senha, 10)
export const compararSenha = async (senha, hash)=>{ bcrypt.compare(senha, hash)}

export const gerarToken = (payload) => jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {expiresIn: '8h'}
)