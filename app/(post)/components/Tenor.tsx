interface TenorProps {
  postid: string
  aspectRatio?: string
  width?: string
  title: string
  displayTitle: string
  searchLink: string
}

export default function Tenor({ 
  postid, 
  aspectRatio = "1.77778", 
  width = "100%", 
  title
}: TenorProps) {
  const aspect = parseFloat(aspectRatio);
  const src = `https://tenor.com/embed/${postid}`;
  
  return (
    <div style={{ width, position: 'relative' }}>
      <div style={{ paddingTop: `${(1 / aspect) * 100}%` }} />
      <iframe
        src={src}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          display: 'block',
          border: 0
        }}
        allowFullScreen
        title={`Tenor GIF ${postid}`}
      />
    </div>
  )
}
