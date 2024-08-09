import { reactive } from "vue"
import { HaditsListType } from "../types"

export const HaditsList = reactive<HaditsListType[]>([
  {
    name: "Abu Dawud",
    slug: "abu-dawud",
  },
  {
    name: "Ahmad",
    slug: "ahmad",
  },
  {
    name: "Bukhari",
    slug: "bukhari",
  },
  {
    name: "Darimi",
    slug: "darimi",
  },
  {
    name: "Ibnu Majah",
    slug: "ibnu-majah",
  },
  {
    name: "Malik",
    slug: "malik",
  },
  {
    name: "Muslim",
    slug: "muslim",
  },
  {
    name: "Nasai",
    slug: "nasai",
  },
  {
    name: "Tirmidzi",
    slug: "tirmidzi",
  },
])
