export interface User {
  id: number;
  name : string;
  username: string;
  email: string;
  phone: string;
  website : string;
  company: Company,
  address: Address
}

export interface Company {
  name: string;
  catchPhrase: string,
  bs: string
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
