import { score } from "@/lib/calculatorResult";
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
  const resultData = await response.json();
  console.log(resultData);

  const total = score(resultData);
  const webScore = total[0];
  const majorError = total[1];
  const moderatError = total[2];
  const minorError = total[3];

  console.log(webScore);


  return (
    <main>
      <div className="p-16 mt-12">
        <h1 className="text-4xl font-semibold mb-12">Resultat for website</h1>
        <div>
          <article className="grid grid-cols-1 md:grid-cols-2 gap-16">
<section>
            <h1 className="mb-5 text-2xl">Resultat for {resultData.url.substring(0, 30)}...</h1>
           
            <Image
              alt="billede af hjemmesiden som er blevet testet"
              src={resultData.screenshot.url}
              width={450}
              height={500}
            />
            </section>
            <section>
            <ResultScore resultData={webScore} />
            </section>
          </article>
        </div>
      </div>

      <div className="bg-lightGrey">
        <article className="p-12 items-center max-w-screen-lg mt-5">

          <h2 className="text-3xl mb-8 ">Fejltyper på websitet:</h2>

          <details className="border-b mb-6">
            <summary>
              <span className="text-lg">{majorError.length} Kritiske fejl</span>

            </summary>
            {majorError.map(
              (oneRule) => {
                return <div className="p-3" key={oneRule.id}> <h2 className="mt-4 font-medium text-base">{oneRule.id}</h2>
                <p className="mb-4 mt-4">{oneRule.description}</p>



                  <Link className="bg-orange text-white text-base  p-1 px-4  rounded-xl" href={`/rules/${oneRule.id}`} prefetch={false}>
                    Læs mere
                  </Link>

                </div>
              }
            )}
          </details>
          <details className="border-b mb-6">
            <summary>
              <span className="text-lg grow">{moderatError.length} Moderate fejl</span>

            </summary>
            {moderatError.map(
              (oneRule) => {
                return <div className="p-3" key={oneRule.id}> 
                <h2 className="mt-4 font-medium text-base">{oneRule.id}</h2>
                <p className="mb-4 mt-4 text-sm">{oneRule.description}</p>



                  <Link className="bg-orange text-white text-base p-1 px-4 rounded-xl mb-7" href={`/rules/${oneRule.id}`} prefetch={false}>
                    Læs mere
                  </Link>

                </div>
              }
            )}
          </details>

          <details className="border-b mb-6">
            <summary>
              <span className="text-lg">{minorError.length} Mindre fejl</span>

            </summary>
            {minorError.map(
              (oneRule) => {
                return <div className="p-3" key={oneRule.id}> <h2 className="mt-4 font-medium text-base">{oneRule.id}</h2>
                <p className="mb-4 mt-4 text-sm">{oneRule.description}</p>



                  <Link className="bg-orange text-white text-base p-1 px-4  rounded-xl" href={`/rules/${oneRule.id}`} prefetch={false}>
                    Læs mere
                  </Link>

                </div>
              }
            )}
          </details>




        </article>
      </div>
    </main>
  );
} 