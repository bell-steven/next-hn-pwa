import Link from 'next/link'

export default props => (
  <nav
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      background: 'orange',
      height: 25,
      fontSize: 15,
    }}
  >
    <Link prefetch href="/">
      <a>Home</a>
    </Link>
    <Link prefetch href="/new">
      <a>Newest</a>
    </Link>
    <Link prefetch href="/show">
      <a>Show</a>
    </Link>
    <Link prefetch href="/ask">
      <a>Ask</a>
    </Link>
    <Link prefetch href="/jobs">
      <a>Jobs</a>
    </Link>
  </nav>
)
