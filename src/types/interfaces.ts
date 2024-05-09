export interface OrganizationI {
  id: number;
  address: string;
  email: string;
  name: string;
}

export interface EmployeeI {
  id: number;
  email: string;
  name: string;
  phone: string;
  full_name: string;
}

export interface ServiceI {
  id: number;
  name: string;
  price: number;
  time: number;
}

export interface UserI {}