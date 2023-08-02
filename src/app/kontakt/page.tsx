import Image from "next/image"
import kontakt from "/public/kontakt.jpg"
import Navbar from "@/components/ui/Navbar"

const page = () => {
  return (
    <>
      <div className="absolute top-0 left-0">
        <Navbar />
      </div>

      <div className="flex flex-row-reverse">
        <div className="relative pl-4">
          <Image
            src={kontakt}
            alt="uśmiechnięta Marta"
            placeholder="blur"
            quality={100}
            sizes="100vw"
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              objectFit: "contain",
              opacity: "0.75"
            }}
          />
        </div>
          <div className="text-white flex flex-col gap-4 justify-center">
            <h1 className="text-3xl ">Marta Klisowska</h1>
            <a  href="tel:793792883">Tel. 793792883</a> 
            <a  href="mailto:Klisowska.marta@gmail.com" target="_blank">e-mail: Klisowska.marta@gmail.com</a>
          </div>
      </div>
    </>
  )
}

export default page