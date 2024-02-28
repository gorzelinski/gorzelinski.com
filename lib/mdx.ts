import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

type Frontmatter = {
  title: string
  description: string
  date: Date
  updated: Date
  image: {
    alt: string
    caption: string
    src: string
  }
}

type FrontmatterFile = {
  frontmatter: Frontmatter
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

  const frontmatter = parsedFile.data as Frontmatter
  const content = parsedFile.content

  return {
    frontmatter,
    content
  }
}
