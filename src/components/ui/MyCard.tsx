import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

const MyCard = () => {
  return (
    <Card className="bg-transparent border-none">
      <CardHeader >
        <CardTitle > <h1 className="text-5xl text-white">Marta Klisowska</h1></CardTitle>
        <CardDescription><p className="text-slate-200">zarządanie projektami</p></CardDescription>
      </CardHeader>
      <CardContent>
        <ul >
          <li >
            <Link className="hover:underline" href="/o-mnie">O MNIE</Link>
          </li>
          <li>
            <Link className="hover:underline" href="/uslugi">USŁUGI</Link>
          </li>
          <li>
            <Link className="hover:underline" href="/kontakt">KONTAKT</Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

export default MyCard