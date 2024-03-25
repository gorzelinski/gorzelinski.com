export const isInternal = (siteUrl: string, url: string) => {
  const pageUrl = new URL(siteUrl)
  const linkUrl = new URL(url, siteUrl)

  return linkUrl.host === pageUrl.host
}
