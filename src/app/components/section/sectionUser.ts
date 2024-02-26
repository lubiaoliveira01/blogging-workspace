interface IAuthor {
  id?: number
  username: string
}

export interface ISectionUser {
  id?: number
  timestamp: string
  author: IAuthor
  title: string
  subtitle: string
  content: string
}
