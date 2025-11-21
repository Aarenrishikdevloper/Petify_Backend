export interface IuserIn{
    name:string; 
    email:string; 
    password:string; 
    //address?:string | null; 
    //phone?:string | null;
} 
export interface IuserLogin{
    email:string; 
    password:string;
}
export interface createPromo {
  category: string;
  title: string;
  image: string;
}
