---
name: obsidian-to-mdx
description: >-
  Convert Obsidian markdown to this project's MDX format. Use when the user
  pastes or imports content from Obsidian, or asks to convert a blog post draft.
---

# Obsidian to MDX Conversion

Convert Obsidian-flavored markdown to this project's MDX dialect. Apply all steps below to the target `.mdx` file.

## Conversion Steps

### 1. Non-breaking spaces

Replace all Unicode non-breaking space characters (`U+00A0`) with regular spaces. If a non-breaking space is genuinely needed (e.g., after single-letter Polish prepositions), use the explicit `&nbsp;` entity instead.

### 2. Callouts

Obsidian callouts use blockquote syntax. Convert to the `<Callout>` JSX component.

**Before:**

```md
> [!Note]
> Content here.
```

**After:**

```mdx
<Callout variant="info">

Content here.

</Callout>
```

Variant mapping:

| Obsidian     | MDX variant |
| ------------ | ----------- |
| `[!Note]`    | `info`      |
| `[!Warning]` | `warning`   |
| `[!Danger]`  | `danger`    |
| `[!Success]` | `success`   |

The `<Callout>` component also accepts an optional `title` prop: `<Callout variant="info" title="Title">`.

Blank lines after `<Callout>` and before `</Callout>` are required for MDX to parse inner markdown.

### 3. Wikilinks

Convert all Obsidian `[[wikilinks]]` to standard markdown links.

**Internal links to other posts:**

| Obsidian                               | MDX                                             |
| -------------------------------------- | ----------------------------------------------- |
| `[[Post Title]]`                       | `[Post Title](/blog/post-slug/)`                |
| `[[Post Title\|display text]]`         | `[display text](/blog/post-slug/)`              |
| `[[Post Title#Section\|display text]]` | `[display text](/blog/post-slug/#section-slug)` |

**Same-page anchor links:**

| Obsidian                          | MDX                             |
| --------------------------------- | ------------------------------- |
| `[[#Section Name]]`               | `[Section Name](#section-name)` |
| `[[#Section Name\|display text]]` | `[display text](#section-name)` |

Slugify section names for anchors: lowercase, spaces to hyphens, strip special characters. **Strip Polish diacritics** (ą→a, ć→c, ę→e, ł→l, ń→n, ó→o, ś→s, ź→z, ż→z) — the blog's `slugify` function removes them, so anchor links must match (e.g., `Funkcje cyklu życia` → `#funkcje-cyklu-zycia`).

For Polish (`.pl.mdx`) files, prefix internal blog links with `/pl/` (e.g., `/pl/blog/post-slug/`).

### 4. Highlights

Convert Obsidian highlight syntax to the `<Highlight>` JSX component.

**Before:**

```md
This is ==highlighted text== in a sentence.
```

**After:**

```mdx
This is <Highlight>highlighted text</Highlight> in a sentence.
```

### 5. Image embeds

Convert Obsidian image embeds to standard markdown images.

**Before:**

```md
![[my-image.png]]
```

**After:**

```md
![Descriptive alt text](my-image.png)
```

Always provide meaningful alt text. Images with a title attribute get wrapped in a `<figure>` automatically by the MDX pipeline:

```md
![Alt text](image.png 'Caption text becomes figcaption')
```

### 6. Code snippet formatting

Code snippets (JS/TS/JSX/TSX) inside fenced code blocks should follow the project's Prettier rules:

- Single quotes (not double)
- No semicolons
- No trailing commas
- 2-space indentation (spaces, not tabs)

### 7. Verification

After all conversions, verify:

- No `[[` or `]]` remain (except inside code blocks)
- No `> [!` callout syntax remains
- No `==text==` highlight syntax remains
- No `![[` image embeds remain
- No stray non-breaking spaces remain
- No Polish diacritics in anchor slugs (e.g., `#sekcja-życia` should be `#sekcja-zycia`)
- No linter errors introduced
