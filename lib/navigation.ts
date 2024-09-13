export function selectActiveClass(
  pathname: string,
  href: string,
  partiallyActive: boolean = false
): 'active' | 'active-subtle' | '' {
  if (pathname === href) return 'active'
  else if (partiallyActive && pathname.includes(href)) return 'active-subtle'
  else return ''
}
