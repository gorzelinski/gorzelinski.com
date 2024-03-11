import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime, { ReadTimeResults } from 'reading-time'

type Frontmatter = {
  slug: string
  title: string
  description: string
  readingTime: ReadTimeResults
  date: Date
  updated: Date
  image: {
    alt: string
    caption: string
    src: string
  }
}

export type FrontmatterPost = Frontmatter & {
  categories: string[]
  tags: string[]
  type: 'post'
}

type FrontmatterOptions = FrontmatterPost

type FrontmatterFile = {
  frontmatter: FrontmatterOptions
  content: string
}

const root = process.cwd()

export function getFilesByDirectory(...directory: string[]) {
  return fs.readdirSync(path.join(root, ...directory))
}

export function getFileByPath(...paths: string[]): FrontmatterFile {
  const filePath = path.join(root, ...paths)
  const file = fs.readFileSync(filePath, 'utf-8')
  const parsedFile = matter(file)

  const frontmatter = parsedFile.data as FrontmatterOptions
  const content = parsedFile.content
  frontmatter.readingTime = readingTime(content)

  return {
    frontmatter,
    content
  }
}

export function sortFilesByDate(
  files: FrontmatterFile[],
  order: 'ascending' | 'descending' = 'descending'
) {
  return files.sort((prev, next) => {
    const prevDate = new Date(prev.frontmatter.date).getTime()
    const nextDate = new Date(next.frontmatter.date).getTime()

    return order === 'descending' ? nextDate - prevDate : prevDate - nextDate
  })
}
