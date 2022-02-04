import { readFileSync } from "fs";
import { join } from 'path';
export const private_key = readFileSync(join(__dirname, '..', '..', 'private_keys.rsa'));

export const public_key = readFileSync(join(__dirname, '..', '..', 'public_keys.pub'));