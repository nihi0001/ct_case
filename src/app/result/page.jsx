import { score } from "@/lib/calculatorResult";
import { data } from "../rules/rules";
import Image from "next/image";
import ResultScore from "@/app/components/ResultScore"
import Link from "next/link";

// Revalidate route every 30 minutes
//export const revalidate = 1800;

export default async function Page({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(
    `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`
  );
  const data = await response.json();


  const total = score(data);
  const webScore = total[0];
  const majorError = total[1];
  const moderatError = total[2];
  const minorError = total[3];


  return (
    <main>
      <div className="p-12">
        <h1 className="text-3xl mb-8">Resultat for website</h1>
        <div>
          <article className="grid grid-cols-2 gap-4">
            <h1>Resultat for {data.url.substring(0, 30)}...</h1>
            <p>Fandt {data.violations.length} typer fejl</p>
            <Image
              alt= "billede af hjemmesiden som er blevet testet"
              src={data.screenshot.url}
              width={450}
              height={500}
            />
            <ResultScore data={webScore} />
           
          </article>
        </div> 
        </div>

        <div className="bg-lightGrey">
          <article className="p-12 items-center max-w-screen-lg mt-12">

            <h2 className="text-3xl mb-8 ">Fejltyper:</h2>

            <details className="border-b mb-6">
              <summary>
                <span className="text-lg">{majorError.length} Kritiske fejl</span>

              </summary>
              <p className="mb-4 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum accusamus excepturi dolorem dolore eligendi molestias eum repellat alias dignissimos quia impedit, esse vitae nisi soluta accusantium corporis iste! Consequuntur?</p>
              {data.map(rule => (
          <li key={rule.rulename}className="flex items-center justify-between p-2 border-b text-lg" >{rule.rulename}
          <button className="bg-orange text-white text-base p-0.5 px-4 rounded-xl"><Link href={`/rules/${rule.rulename}`} prefetch={false}>
            Læs mere
            </Link>
            </button>
          </li>
          
        ))}
            </details>

            <details className="border-b mb-6">
              <summary>
                <span className="text-lg grow">{moderatError.length} Moderate fejl</span>
               
              </summary>
              <p className="mb-4 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum accusamus excepturi dolorem dolore eligendi molestias eum repellat alias dignissimos quia impedit, esse vitae nisi soluta accusantium corporis iste! Consequuntur?</p>
              <button className="bg-orange text-white text-base p-0.5 px-4 rounded-xl mb-10"><Link href={`/rules/${rule.rulename}`} prefetch={false}>
            Læs mere
            </Link></button>
            </details>
            
            <details className="border-b mb-6">
              <summary>
                <span className="text-lg">{minorError.length} Mindre fejl</span>
                
              </summary>
              <p className="mb-4 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum accusamus excepturi dolorem dolore eligendi molestias eum repellat alias dignissimos quia impedit, esse vitae nisi soluta accusantium corporis iste! Consequuntur?</p>
              <button className="bg-orange text-white text-base p-0.5 px-4 rounded-xl mb-10"><Link href={`/rules/${rule.rulename}`} prefetch={false}>
            Læs mere
            </Link></button>
            </details>
          </article>
        </div>
    </main>
  );
} 