import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface VerifyResponse {
  id: number;
  iat: number;
  exp: number;
}

export function compareHash(hash: string, password: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function generateHash(password: string): Promise<string> {
  const hash = await bcrypt.hash(password, 8);
  return hash;
}

export function generateToken(id: number): string {
  return jwt.sign({ id }, process.env.JWTSecretKey || 'secret', {
    expiresIn: 86400,
  });
}

export async function verifyToken(
  token: string
): Promise<VerifyResponse | undefined> {
  try {
    return jwt.verify(
      token,
      process.env.JWTSecretKey || 'secret'
    ) as VerifyResponse;
  } catch (error) {
    return undefined;
  }
}
