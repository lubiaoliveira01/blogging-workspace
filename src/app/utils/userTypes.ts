export type Posts = {
  id: number
  title: string
  subtitle: string
  content: string
}

export type User = {
  id?: number
  username: string
  memberSince: string
  friendIds: number[]
  posts: Posts[]
}
