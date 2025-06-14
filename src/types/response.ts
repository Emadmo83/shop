export interface ApiResponseType<T> {
  success: boolean;
  message?: string;
  status: number;
  data: T;
  redirect_to?: string;
}

export interface ApiFilterResultType<T> {
  entity_count: number
  current_page: number
  page_count: number
  start_page: number
  take: number
  has_next: boolean
  has_previous: boolean
  data: T[]
}
