import Link from 'next/link';
import HeadTags from '../components/head';
import NavBar from '../components/nav';

const Content = (props) => (
  <div
    style={{
      fontFamily: 'Verdana, Geneva, sans-serif',
      fontSize: '12pt',
      color: '#000000',
      background: 'rgb(246, 246, 239)',
      maxWidth: 940,
      margin: 'auto',
    }}
  >
    <HeadTags />
    <NavBar />
    <main>
      <ol>
        {props.data.map((story) => (
          <li key={story.id}>
            <div>
              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                style={{ color: '#000066', textDecoration: 'none' }}
              >
                {story.title}
              </a>
              {story.domain && (
                <a
                  href={story.domain}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  style={{ color: '#000000', textDecoration: 'none' }}
                >
                  {' '}
                  ({story.domain})
                </a>
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
);

export default Content;
