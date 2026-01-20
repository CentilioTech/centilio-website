export interface BlogPost {
  Id: number
  Title: string
  Slug: string
  Excerpt?: string
  Content: string
  Preview_Url?: string
  Created_User_Name: string
  Created_Time: string
  Scheduled_Time: string
  Keywords?: string
  style?: string
}

export interface BlogApiResponse {
  success: boolean
  data: BlogPost[]
  total_records: number
  next_page: boolean
}

export interface BlogDetailResponse {
  success: boolean
  data: BlogPost[]
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  hasNextPage: boolean
}