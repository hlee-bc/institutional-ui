export interface User {
  emails: Email[]
  otp: boolean
  username: string
  id: number
}

export interface Email {
  email: string
  id: number
  is_active: boolean
}
