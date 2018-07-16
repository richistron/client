import Cryptr from 'cryptr';

const Crypto = new Cryptr('tucola');

export const encode = (value) => Crypto.encrypt(value);

export const decode = (value) => Crypto.decrypt(value);

export default Crypto;
