/**
 * SVG to React Component Generator
 * Usage: tsx scripts/generate.ts
 * 
 * Reads SVG files from src/svg/ and generates React components in src/icons/
 */
import { readdir, readFile, writeFile, mkdir } from 'fs/promises'
import { join, basename, parse } from 'path'
import { existsSync } from 'fs'

const SVG_DIR = 'src/svg'
const ICONS_DIR = 'src/icons'

const toPascalCase = (str: string): string => {
  return str
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toUpperCase())
}

const extractSvgContent = (svg: string): { viewBox: string; content: string } => {
  const viewBoxMatch = svg.match(/viewBox="([^"]*)"/)
  const viewBox = viewBoxMatch?.[1] || '0 0 24 24'
  const contentMatch = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/)
  const content = contentMatch?.[1]?.trim() || ''
  return { viewBox, content }
}

const generateComponent = (name: string, viewBox: string, content: string): string => {
  return `import { forwardRef } from 'react'
import { Icon } from '../components/Icon'
import type { IconProps } from '../types'

export const ${name} = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} viewBox="${viewBox}" aria-label="${name}" {...props}>
    ${content}
  </Icon>
))
${name}.displayName = '${name}'
`
}

const generateIndex = (icons: string[]): string => {
  return icons.map(name => `export { ${name} } from './${name}'`).join('\n') + '\n'
}

async function main() {
  if (!existsSync(SVG_DIR)) {
    await mkdir(SVG_DIR, { recursive: true })
    console.log(`Created ${SVG_DIR} directory. Add SVG files and run again.`)
    return
  }

  const files = await readdir(SVG_DIR)
  const svgFiles = files.filter(f => f.endsWith('.svg'))

  if (svgFiles.length === 0) {
    console.log('No SVG files found in', SVG_DIR)
    return
  }

  await mkdir(ICONS_DIR, { recursive: true })

  const icons: string[] = []

  for (const file of svgFiles) {
    const name = toPascalCase(parse(file).name)
    const svgPath = join(SVG_DIR, file)
    const svg = await readFile(svgPath, 'utf-8')
    const { viewBox, content } = extractSvgContent(svg)
    const component = generateComponent(name, viewBox, content)
    const outPath = join(ICONS_DIR, `${name}.tsx`)
    await writeFile(outPath, component)
    icons.push(name)
    console.log(`Generated: ${name}`)
  }

  await writeFile(join(ICONS_DIR, 'index.ts'), generateIndex(icons))
  console.log(`\nGenerated ${icons.length} icons`)
}

main().catch(console.error)
