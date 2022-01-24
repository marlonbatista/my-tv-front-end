import { Category } from '../enums/category.model';

export  interface Title {
  idTitle?: number;
  name?: string;
  secondName?: string;
  dateRegister?: Date;
  category?: Category;
  poster?: string;
}

export type Titles = Title[];

export interface TitleCategory {
    ANIME: Title[];
    SERIE: Title[];
    MOVIE: Title[];
}
