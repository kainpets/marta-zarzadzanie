import Image from "next/image"
import narady from "/public/narady.jpg"
import narady2 from "/public/narady2.jpg"
import piatka from "/public/piątka.jpg"
import telefon from "/public/telefon.jpg"

const ImagesAlbum = () => {
  return (
    <div
      className="grid grid-cols-2 max-w-5xl"
    >
      <div style={{ position: 'relative', height: '400px' }}>
        <Image
          alt="Marta na naradzie"
          src={narady}
          fill
          style={{
            objectFit: 'contain', opacity: "0.6"
          }}
        />
      </div>
      <div style={{ position: 'relative', height: '400px' }}>
        <Image
          alt="Marta na naradzie"
          src={telefon}
          fill
          style={{
            objectFit: 'contain', opacity: "0.6"
          }}
        />
      </div>
      <div style={{ position: 'relative', height: '400px' }}>
        <Image
          alt="Marta na naradzie"
          src={piatka}
          fill
          style={{
            objectFit: 'contain', opacity: "0.6"
          }}
        />
      </div>
      <div style={{ position: 'relative', height: '400px' }}>
        <Image
          alt="Marta na naradzie"
          src={narady2}
          fill
          style={{
            objectFit: 'contain', opacity: "0.6"
          }}
        />
      </div>
    </div>
  )
}

export default ImagesAlbum