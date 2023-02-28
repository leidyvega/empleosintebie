export interface Job {
  id: string;
  userId: string;
  logo: string;
  name: string;
  descriptionCompany: string;
  position: string;
  department: string;
  location: string;
  salary: number;
  description: string;
  applicants?: any;

}
