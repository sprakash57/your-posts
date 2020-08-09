export interface IAddress {
    city: string,
    geo: { lat: string, lang: string },
    street: string,
    suite: string,
    zipcode: string
}

export interface ICompany {
    bs: string,
    catchPhrase: string,
    name: string
}

export interface IUser {
    address: IAddress,
    company: ICompany,
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string
}