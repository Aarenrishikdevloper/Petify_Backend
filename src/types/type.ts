export interface IuserIn {
 name: string;
 email: string;
 password: string;
 //address?:string | null;
 //phone?:string | null;
}
export interface IuserLogin {
 email: string;
 password: string;
}
export interface createPromo {
 category: string;
 title: string;
 image: string;
}

export interface createpetbody {
 name: string;
 species: string;
 breed: string;
 age: number;
 gender: string;
}

export interface updatepetbody {
 name?: string;
 species?: string;
 breed?: string;
 age?: number;
 gender?: string;
}
export interface medicalRequest {
 date: Date;
 medication: string;
 notes?: string;
 status: string;
 isNotified?: boolean;
 isNewMedical?: boolean;
}
export interface cartInput {
 productId: string;
 qty: Number;
}
export type userupdate = {
 name?: string;
 address?: string;
 phone?: string;
};
export interface ICategoryRequest {
 name: string;
 image: string;
 priority: number;
}
