import Link from 'next/link'
import Head from 'next/head'
import Nav from './nav'

const Content = props => (
  <ol
    style={{
      fontFamily: 'Verdana, Geneva, sans-serif',
      fontSize: '10pt',
      color: '#828282',
      background: 'rgb(246, 246, 239)',
    }}
  >
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#297bee" />
      <link rel="manifest" href="/static/manifest.webmanifest" />
      <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
      <title>HN Next.js PWA</title>
    </Head>
    <Nav />
    {props.data.map(story => (
      <li key={story.id}>
        <div>
          <Link href={story.url}>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              style={{ color: '#000000', textDecoration: 'none' }}
            >
              {story.title}
            </a>
          </Link>
          {story.domain && (
            <Link href={story.domain}>
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                style={{ color: '#828282', textDecoration: 'none' }}
              >
                {' '}
                ({story.domain})
              </a>
            </Link>
          )}
          <div style={{ fontSize: '7pt' }}>
            {story.points} points by {story.user} {story.time_ago} |{' '}
            {story.comments_count} comments
          </div>
        </div>
        <br />
      </li>
    ))}
  </ol>
)

export default Content
