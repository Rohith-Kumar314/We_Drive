import * as jwt from 'jsonwebtoken';

export function signAccessToken(payload){
    return jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:"2h"});
}

export function signRefreshToken(payload){
    return jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET, {expiresIn:"45d"});
}