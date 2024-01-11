type ActiveClasses = 'active' | 'active-subtle' | ''

export function selectActiveClass(
  pathname: string,
  href: string,
  partiallyActive: boolean = false
): ActiveClasses {
  if (pathname === href) return 'active'
  else if (partiallyActive && pathname.includes(href)) return 'active-subtle'
  else return ''
}
