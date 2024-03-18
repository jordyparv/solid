// import AES from 'crypto-js/aes';
import enc from 'crypto-js';
export const md5 = (str) => {
    // return AES.encrypt(str, process.env.SECRET_TITLE).toString();
    return enc.MD5(str).toString();

}