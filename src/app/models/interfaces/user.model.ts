import { Perfil } from '../enums/perfil.model';

export default interface  User {
  idUser?: number;
  name?: String;
  email?: String;
  password?: String;
  confPassword?: String;
  perfil?: Perfil;
}
