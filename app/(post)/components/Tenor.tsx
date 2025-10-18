'use client'

interface TenorProps {
  postid?: string
  gifUrl?: string
  aspectRatio?: string
  width?: string
  title: string
  displayTitle: string
  searchLink: string
}

export default function Tenor({ postid, gifUrl, aspectRatio = "1.65625", width = "100%", title, displayTitle, searchLink }: TenorProps) {
  if (gifUrl) {
    return (
      <div style={{ overflow: 'hidden', textAlign: 'left' }}>
        <img
          src={gifUrl}
          alt={displayTitle}
          style={{ clipPath: 'inset(0 10% 0 10%)', width: 'auto', height: 'auto', display: 'block' }}
        />
      </div>
    )
  }

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        className="tenor-gif-embed"
        data-postid={postid}
        data-share-method="host"
        data-aspect-ratio={aspectRatio}
        data-width={width}
      >
        <a href={`https://tenor.com/view/${title}-gif-${postid}`}>{displayTitle} GIF</a> from <a href={searchLink}>Wolf Of Wall Street GIFs</a>
      </div>
      <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    </div>
  )
}
