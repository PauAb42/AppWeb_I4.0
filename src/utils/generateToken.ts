import jwt from 'jsonwebtoken';

const ACCESS_SECRET = 'secret1234utd';

export const generateAccessToken = (userId: string) => {
  return jwt.sign(
    { userId },
    ACCESS_SECRET,
    { expiresIn: '15m' }
  );
};


// Ejemplo de uso
const userId = 'abc123';
const accessToken = generateAccessToken(userId);

console.log('Access Token:', accessToken);