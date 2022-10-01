import { useEffect, useMemo, useState } from "react"
import { debounce } from "../utils"

export const useLoadMore = (items, itemsPerLoad = 8) => {
  const allItems = useMemo(() => (items ? items : []), [items])
  const [filteredItems, setFilteredItems] = useState(allItems)
  const [currentItems, setCurrentItems] = useState(
    filteredItems.slice(0, itemsPerLoad)
  )
  const [hasMore, setHasMore] = useState(
    currentItems.length < filteredItems.length
  )
  const [loadMore, setLoadMore] = useState(false)
  const [query, setQuery] = useState("")

  const handleLoadMore = () => {
    setLoadMore(true)
  }

  const handleKeyUp = e => {
    if (query && currentItems.length > 0 && e.key === "Enter") {
      e.target.blur()
      document.querySelector("article")?.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  const handleInputChange = debounce(e => {
    setQuery(e.target.value.trim().toLowerCase())
  }, 250)

  useEffect(() => {
    if (query) {
      const matchingItems = allItems.filter(post => {
        const { title, description, categories, tags } = post.frontmatter
        return (
          title.toLowerCase().includes(query) ||
          description.toLowerCase().includes(query) ||
          categories.includes(query) ||
          tags.includes(query)
        )
      })
      setFilteredItems(matchingItems)
    } else {
      setFilteredItems(allItems)
    }
  }, [query, allItems])

  useEffect(() => {
    setCurrentItems(filteredItems.slice(0, itemsPerLoad))
  }, [filteredItems, itemsPerLoad])

  useEffect(() => {
    const isMore = currentItems.length < filteredItems.length
    setHasMore(isMore)
  }, [currentItems, filteredItems])

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = currentItems.length
      const isMore = currentLength < filteredItems.length
      const nextResults = isMore
        ? filteredItems.slice(currentLength, currentLength + itemsPerLoad)
        : []
      setCurrentItems([...currentItems, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore, filteredItems, currentItems, itemsPerLoad])

  return {
    allItems,
    currentItems,
    filteredItems,
    hasMore,
    handleInputChange,
    handleKeyUp,
    handleLoadMore,
  }
}
