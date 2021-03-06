export interface IAddress {
    city: string,
    geo: { lat: string, lng: string },
    street: string,
    suite: string,
    zipcode: string
}

export interface ICompany {
    bs: string,
    catchPhrase: string,
    name: string
}

export interface IEmployee {
    address: IAddress,
    company: ICompany,
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string
}

export interface IEmployeeDtlRoute {
    match: { params: { id: number } }
}

export interface IPosts {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface ILocation {
    formatted_address: string
}