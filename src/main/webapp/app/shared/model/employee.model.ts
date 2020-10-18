export interface IEmployee {
  id?: number;
  name?: string;
  address?: string;
  gender?: string;
}

export class Employee implements IEmployee {
  constructor(public id?: number, public name?: string, public address?: string, public gender?: string) {}
}
