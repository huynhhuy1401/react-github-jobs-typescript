export interface IJob {
  id: string
  type: string
  url: string
  created_at: string
  company: string
  company_url: string
  location: string
  title: string
  description: string
  how_to_apply: string
  company_logo: string
}

export interface IParams {
  description: string
  location: string
  lat: number
  long: number
  full_time: boolean
  markdown: boolean
}
