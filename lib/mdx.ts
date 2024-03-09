import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

type Frontmatter = {
  slug: string
  title: string
  description: string
  image: {
    alt: string
    caption: string
    src: string
  }
}

export type FrontmatterPost = Frontmatter & {
  date: Date
  updated: Date
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

  return {
    frontmatter,
    content
  }
}
