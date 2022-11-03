export const formatDate = (date, locale = "en") =>
  new Date(date).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
