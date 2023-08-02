import ImagesAlbum from "@/components/ui/ImagesAlbum";
import MyCard from "@/components/ui/MyCard";

export default function Home() {
  return (
    <main >
      <div className="container w-[85vw] h-[85vh]">
        <ImagesAlbum />
        <div className="absolute top-[7vh]">
          <MyCard />
        </div>
      </div>
    </main>
  )
}
