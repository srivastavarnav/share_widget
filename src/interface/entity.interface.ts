import { ACCESS_LIST } from "../enums/access.enum";

interface EntityType {
    id: number;
    avatarUrl: string;
    name: string;
    email:string;
    isPerson: boolean;
    access: string;
  }
  
  export default EntityType;