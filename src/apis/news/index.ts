import type { NewsType } from './types'

export const getNews = async (): Promise<NewsType> => {
  const res = await fetch(`${process.env.news_api_url}&apiKey=${process.env.news_api_key}`, {
    headers: new Headers({
      'x-api-key': process.env.news_api_key as string
    }),
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  const data = await res.json()
  return data
}
