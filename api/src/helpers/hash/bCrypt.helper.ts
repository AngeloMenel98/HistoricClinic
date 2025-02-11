import { compare, hash } from 'bcryptjs';

const SALT_ROUNDS = 10;

const hashValue = (value: string) => hash(value, SALT_ROUNDS);

const compareHash = (value: string, hash: string) => compare(value, hash);

export { hashValue, compareHash };
