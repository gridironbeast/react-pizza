export type PizzaItem = {
    id: string;
    title: string; 
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
  }

  export type SearchPizzaParams = {
    sortBy: string; 
    order: string;
    category: string;
    search: string;
    currentPage: string;
  }
  
  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
  }
  
  export interface PizzaSliceState {
    items: PizzaItem[];
    status: Status;
  }