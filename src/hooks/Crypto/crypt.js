import cryptojs from "crypto-js";

function encryptData(data) {
  if (data && data.trim().length > 0)
    return cryptojs.AES.encrypt(data, import.meta.env.VITE_APP_SALT).toString();
  else return null;
}

function decryptData(data) {
  if (data && data.trim().length > 0)
    return cryptojs.AES.decrypt(data, import.meta.env.VITE_APP_SALT).toString(
      cryptojs.enc.Utf8
    );
  else return null;
}

export default { encryptData, decryptData };
