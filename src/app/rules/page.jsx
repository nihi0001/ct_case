// rules list view
import Link from "next/link";
import {data} from "./rules"

export default async function Page() {
     console.log(data);
  
    return (
      <main className="p-16 items-center max-w-screen-lg mt-12">
       <div>
        <h1 className="text-2xl md:text-4xl font-semibold mb-12 ">Regler for webtilængelighed </h1>
        <p className="text-base mb-7 max-w-[38rem]">Webtilgængelighed garanterer, at mennesker med handicap eller funktionsnedsættelser kan bruge offentlige hjemmesider og mobilapps uden barrierer. Dette indebærer at sikre, at indholdet er let at navigere, forståeligt og tilgængeligt for alle. </p>
        <p className="text-base mb-10 max-w-[45rem]">Ved at fjerne hindringer som manglende alternative tekster til billeder og komplekse navigationsfunktioner, skaber webtilgængelighed en mere inkluderende digital verden.</p>
      <ul className="space-y-7">
        {data.map(rule => (
          <li key={rule.rulename}className="flex items-center justify-between p-2 border-b text-lg" >{rule.rulename}
          <Link className="bg-orange hover:bg-bannerBlue text-white text-base p-1.5 px-5 rounded-xl hover:bg-bannerBlue" href={`/rules/${rule.rulename}`} prefetch={false}>
            Læs mere
          </Link>
          </li>
          
        ))}
       
      </ul>
      </div>
      </main>
    );
  } 
