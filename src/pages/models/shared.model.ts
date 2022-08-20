export enum LanguageType {
    English = 'English',
    Portuguese = 'Portuguese'
}

export const LanguageImagePath = {
    "English": '/images/flags/usa_flag.png',
    "Portuguese": '/images/flags/brasil_flag.png',
}

export const LanguageTypes = Object.keys(LanguageType) as LanguageType[];