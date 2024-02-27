interface IAuthor {
  id?: number
  username: string
}

export interface ISectionComments {
  id: number
  respondsTo: ISectionComments | null
  author: IAuthor
  timestamp: string
  content: string
}

export interface ISectionUser {
  id?: number
  timestamp: string
  author: IAuthor
  title: string
  subtitle: string
  content: string
  comments: ISectionComments[]
}
