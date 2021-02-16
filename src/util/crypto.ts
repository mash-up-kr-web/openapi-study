import CryptoJS from 'crypto-js';

const KEY = 'goSeaTogether';

export const serialize = (states: any) => {
  const stringified = JSON.stringify(states);
  const result = CryptoJS.AES.encrypt(stringified, KEY).toString();

  return result;
};

export const deserialize = (encrypted: string) => {
  const bytes = CryptoJS.AES.decrypt(encrypted, KEY);
  const result = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return result;
};
