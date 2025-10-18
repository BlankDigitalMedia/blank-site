'use client'

interface TenorProps {
  postid: string
  aspectRatio?: string
  width?: string
  title: string
  displayTitle: string
  searchLink: string
}

export default function Tenor({ postid, aspectRatio = "1.65625", width = "100%", title, displayTitle, searchLink }: TenorProps) {
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        className="tenor-gif-embed"
        data-postid={postid}
        data-share-method="host"
        data-aspect-ratio={aspectRatio}
        data-width="120%"
        style={{ marginLeft: '-10%' }}
      >
        <a href={`https://tenor.com/view/${title}-gif-${postid}`}>{displayTitle} GIF</a> from <a href={searchLink}>Wolf Of Wall Street GIFs</a>
      </div>
      <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    </div>
  )
}
