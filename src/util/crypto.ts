import CryptoJS from 'crypto-js';

export const serialize = (states: any) => {
  const stringified = JSON.stringify(states);
  const result = CryptoJS.AES.encrypt(stringified, 'secret key 123').toString();

  return result;
};

export const deserialize = (encrypted: string) => {
  const bytes = CryptoJS.AES.decrypt(encrypted, 'secret key 123');
  const result = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return result;
};
