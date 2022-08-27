import CryptoJS from "crypto-js";


export function encrypt(value: string) {
    
    const secretKey = String(import.meta.env.VITE_API_ENCRYPT_SECRET_KEY);
    var key = CryptoJS.enc.Utf8.parse(secretKey);
    var iv = CryptoJS.enc.Utf8.parse(secretKey);

    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();

    return encrypted;
}



