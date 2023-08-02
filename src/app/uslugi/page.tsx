import Navbar from "@/components/ui/Navbar"

const page = () => {
  return (
    <>
      <Navbar />
      <div className="text-center max-w-5xl px-4 leading-relaxed text-lg ">
        <div>
          <h1 className="text-2xl">Moja działalność głównie obejmuje:</h1>
          <ol >
            <li>1. Projekty szkoleniowe z wykorzystaniem dofinansowań-unijnych</li>
            <li>2. Projekty taneczno-rozwojowe</li>
          </ol>
          <br />
          <p className="pt-4"> W ramach prowadzonych projektów taneczno-ruchowych wybieram i wynajmuję przestrzeń na organizację wydarzenia, dobieram ekspertów do współpracy, planuję strategię marketingową oraz promuję wydarzenie, obsługuję social media dla promowania wydarzenia, koordynuję dzień wydarzenia oraz rozliczam obsługę wydarzenia.</p>
        </div>
        <br />
        <ul className="pt-4">
          Usługi obejmują w szczególności:
          <li className="pt-1">zarządzanie ryzykiem projektu</li>
          <li className="pt-1">zarządzanie zadaniami w projekcie</li>
          <li className="pt-1">prowadzenie harmonogramu projektu</li>
          <li className="pt-1">opracowanie i koordynowanie budżetu projektu</li>
          <li className="pt-1">zarządzanie zespołem projektowym</li>
        </ul>
      </div >
    </>
  )
}

export default page