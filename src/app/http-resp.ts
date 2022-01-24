import { Title } from './models/interfaces/title.model';

export interface HttpResp {
    content: Title[] ;
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: Sorted;
    first: boolean;
    numberOfElements: number,
    empty: boolean;
}


export interface Sorted {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

export interface Pageable {
  sort: Sorted;
  offset: number;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
  paged: boolean;
}
