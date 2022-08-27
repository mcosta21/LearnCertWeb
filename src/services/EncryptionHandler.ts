import CryptoJS from "crypto-js";


export function encrypt(value: string) {
    
    var key = CryptoJS.enc.Utf8.parse("8056483646328763");
    var iv = CryptoJS.enc.Utf8.parse("8056483646328763");

    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();

    return encrypted;
}



