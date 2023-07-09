export type SourceType = {
  id: string | null
  name: string
}

export type ArticleType = {
  source: SourceType
  author: string | null
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string | null
}

export type NewsType = {
  status: string
  totalResults: number
  articles: ArticleType[]
}
