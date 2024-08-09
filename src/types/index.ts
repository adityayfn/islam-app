type transliteration = {
  en: string
  id: string
}

type name = {
  short: string
  long: string
  transliteration: transliteration
  translation: transliteration
}

type revelation = {
  arab: string
  en: string
  id: string
}
type tafsir = {
  id: string
}

export type SurahsType = {
  number: number
  sequence: number
  numberOfVerses: number
  name: name
  revelation: revelation
  tafsir: tafsir
}

///////////////////

export type DoaType = {
  nama: string
  arab: string
  latin: string
  arti: string
  riwayat: string
  keterangan?: string | string[]
  kata_kunci?: any[]
}

///////////////////

export type HaditsListType = {
  name: string
  slug: string
}

type pagination = {
  totalItems: number
  currentPage: number
  pageSize: number
  totalPages: number
  startPage: number
  endPage: number
  startIndex: number
  endIndex: number
  pages: number[]
}

export type ItemsHadits = {
  number: number
  arab: string
  id: string
}

export type HaditsContentType = {
  name: string
  arab: string
  number: number
  id: string
}

export type HaditsType = {
  name: string
  slug: string
  total: number
  pagination: pagination
  items: ItemsHadits[]
}

//////////////////

type NumberVerses = {
  inQuran: number
  inSurah: number
}

type SajdaMeta = {
  recommended: boolean
  obligatory: boolean
}

type MetaVerses = {
  juz: number
  page: number
  manzil: number
  ruku: number
  hizbQuarter: number
  sajda: SajdaMeta
}

type TextVerses = {
  arab: string
  transliteration: {
    en: string
  }
}

type TranslationVerses = {
  en: string
  id: string
}

type AudioVerses = {
  primary: string
  secondary: string[]
}

type TafsirVerses = {
  id: {
    short: string
    long: string
  }
}

export type VersesType = {
  number: NumberVerses
  meta: MetaVerses
  text: TextVerses
  translation: TranslationVerses
  audio: AudioVerses
  tafsir: TafsirVerses
}
// const ayahs:
//   | NumberVerses
//   | AudioVerses
//   | TextVerses
//   | TranslationVerses
//   | TafsirVerses
//   | MetaVerses
//   | undefined
