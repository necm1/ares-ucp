/**
 * @interface API
 */
export interface API {
  status: string;
  code: number;
  exception: string;
  errors: [{ message: string; trace: string }];
  data: any;
}

/**
 * @interface APIPagination
 */
export interface APIPagination {
  data: any;
  from: number;
  links: APIPaginationLinks[];
  path: string;
  to: number;
  total: number;
  // tslint:disable-next-line:variable-name
  current_page: number;
  // tslint:disable-next-line:variable-name
  first_page_url: string;
  // tslint:disable-next-line:variable-name
  last_page: number;
  // tslint:disable-next-line:variable-name
  last_page_url: string;
  // tslint:disable-next-line:variable-name
  next_page_url: string;
  // tslint:disable-next-line:variable-name
  per_page: number;
  // tslint:disable-next-line:variable-name
  prev_page_url: string;
  // tslint:disable-next-line:variable-name
}

/**
 * @interface APIPaginationLinks
 */
export interface APIPaginationLinks {
  url: string;
  label: string;
  active: boolean;
}
