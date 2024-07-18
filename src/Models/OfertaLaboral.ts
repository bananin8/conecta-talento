import { Empresa } from "./Empresa";
import { Postulacion } from "./Postulacion";
export class OfertaLaboral{

    constructor(

        public id:number,
        public fechaCreación:Date,
        public descripcion:string,
        public cargo:string,
        public region:string,
        public tipo:string,
        public estado:string,
        public empresa: Empresa,
        public postulaciones: Postulacion
    ){}
}