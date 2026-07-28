export function pageToPath(page: string, slug?: string): string {
  switch (page) {
    case 'home':
      return '/';
    case 'about':
      return '/about';
    case 'programs':
      return '/programs';
    case 'events':
      return '/events';
    case 'event-detail':
      return `/events/${slug ?? ''}`;
    case 'gallery':
      return '/gallery';
    case 'volunteer':
      return '/volunteer';
    case 'donate':
      return '/donate';
    case 'blog':
      return '/blog';
    case 'blog-detail':
      return `/blog/${slug ?? ''}`;
    case 'contact':
      return '/contact';
    default:
      return '/';
  }
}

export function pathToPage(pathname: string): string {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/events/')) return 'event-detail';
  if (pathname.startsWith('/blog/')) return 'blog-detail';
  const clean = pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  return clean || 'home';
}
