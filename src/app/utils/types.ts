type Author = {
  id?: number
  username: string
}

export type SectionComments = {
  id: number
  respondsTo: SectionComments | null
  author: Author
  timestamp: string
  content: string
}

export type SectionUser = {
  id?: number
  timestamp: string
  author: Author
  title: string
  subtitle: string
  content: string
  comments: SectionComments[]
}
