import type { WeatherType } from './types'

export const getWeatherKurume = async (): Promise<WeatherType> => {
  const res = await fetch(`${process.env.weather_api_url}/api/forecast/city/${process.env.weather_code_kurume}`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  const data = await res.json()
  return data
}

export const getWeatherFukuoka = async () => {
  const res = await fetch(`${process.env.weather_api_url}/api/forecast/city/${process.env.weather_code_fukuoka}`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  const data = await res.json()
  return data
}
