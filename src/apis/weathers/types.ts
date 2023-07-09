type detailType = {
  weater: string
  wind: string
  wave: string
}

type temperatureType = {
  min: { celsius: string | null; fahrenheit: string | null }
  max: { celsius: string | null; fahrenheit: string | null }
}

type chanceOfRainType = {
  T00_06: string
  T06_12: string
  T12_18: string
  T18_24: string
}

type imageType = {
  title: string
  url: string
  width: number
  height: number
}

type locationType = {
  area: string
  prefecture: string
  district: string
  city: string
}

type copyRightType = {
  title: string
  link: string
  url: string
  width: number
  height: number
}

export type forecastsType = {
  date: string
  dateLabel: string
  telop: string
  detail: detailType
  temperature: temperatureType
  chanceOfRain: chanceOfRainType
  image: imageType
}

export type DescriptionType = {
  publicTime: string
  publicTimeFormatted: string
  headlineText: string
  bodyText: string
}

export type WeatherType = {
  publicTime: string
  publicTimeFormatted: string
  publishingOffice: string
  title: string
  link: string
  description: DescriptionType
  forecasts: forecastsType[]
  location: locationType
  copyright: copyRightType
}
