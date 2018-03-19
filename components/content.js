import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Content = props => (
  <div
    style={{
      fontFamily: 'Verdana, Geneva, sans-serif',
      fontSize: '12pt',
      color: '#000000',
      background: 'f6faff',
      maxWidth: 940,
      margin: 'auto',
    }}
  >
    <header>
      <Head />
      <Nav />
    </header>
    <main>
      <ol>
        {props.data.map(story => (
          <li key={story.id}>
            <div>
              <Link href={story.url}>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  style={{ color: '#000066', textDecoration: 'none' }}
                >
                  {story.title}
                </a>
              </Link>
              {story.domain && (
                <Link href={story.domain}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    style={{ color: '#000000', textDecoration: 'none' }}
                  >
                    {' '}
                    ({story.domain})
                  </a>
                </Link>
              )}
              <div style={{ fontSize: '8.5pt' }}>
                {story.points} points by {story.user} {story.time_ago} |{' '}
                {story.comments_count} comments
              </div>
            </div>
            <br />
          </li>
        ))}
      </ol>
    </main>
  </div>
)

export default Content
