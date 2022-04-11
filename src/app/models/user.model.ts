export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Adress;
  phone: string;
  website: string;
  company: Company;
}

export class Adress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Position;
}

export class Position {
  lat: number;
  lng: number;
}

export class Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
