import Link from 'next/link';

const NavBar = (props) => (
  <nav
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      background: 'orange',
      height: 35,
      fontSize: 16,
    }}
  >
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/new">
      <a>Newest</a>
    </Link>
    <Link href="/show">
      <a>Show</a>
    </Link>
    <Link href="/ask">
      <a>Ask</a>
    </Link>
    <Link href="/jobs">
      <a>Jobs</a>
    </Link>
  </nav>
);

export default NavBar;
