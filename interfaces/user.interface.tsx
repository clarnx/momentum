export interface IUser {
  firstName: string;
  lastName: string;
  short_description: string;
  description: string;
  skills: [];
  linkedin: string;
  email: string;
  picture?: string;
  phone: {
    prefix: string;
    number: string;
  };
}
