import { score } from "@/lib/calculatorResult";
import Image from "next/image";
import ResultScore from "@/app/components/ResultScore"
import Link from "next/link";

// Revalidate route every 30 minutes
export const revalidate = 1800;

export const metadata = {
  title: "Resultat side",
  description: "Se hjemmesidens resultat og de forskellige fejltyper, som du kan rette for at gøre den mere tilgængelighed",
};


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
      <div className="pt-10 ml-14">
        <ul className="bg-orange hover:bg-bannerBlue rounded-full w-16 p-3">
        <Link href={"/"} prefetch={false}>
        <svg 
        fill="white"
        width={40}
        height={40}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        aria-label="Tilbage til forsiden">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
        </svg> 
        </Link>
        </ul>
      </div>

      <div className="p-16">
        <h1 className="text-4xl font-semibold mb-12">Resultat for website</h1>
        <div>
          <article className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <section>
            <h1 className="mb-5 text-base md:text-2xl">Resultat for {resultData.url.substring(0, 30)}...</h1>
           
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

          <h2 className="text-3xl mb-8">Fejltyper på websitet:</h2>

          <details className="border-b mb-6">
            <summary>
              <span className="text-lg">{majorError.length} Kritiske fejl</span>

            </summary>
            {majorError.map(
              (oneRule) => {
                return <div className="p-3" key={oneRule.id}> <h2 className="mt-4 font-medium text-base">{oneRule.id}</h2>
                <p className="mb-4 mt-4">{oneRule.description}</p>



                  <Link className="bg-orange text-white text-base  p-1 px-4  rounded-xl" href={`/rules/${oneRule.id}`} prefetch={false} aria-label={`Læs mere om ${oneRule.id}`} >
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



                  <Link className="bg-orange text-white text-base p-1 px-4 rounded-xl mb-7" href={`/rules/${oneRule.id}`} prefetch={false} aria-label={`Læs mere om ${oneRule.id}`}  >
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



                  <Link className="bg-orange text-white text-base p-1 px-4  rounded-xl" href={`/rules/${oneRule.id}`} prefetch={false}  aria-label={`Læs mere om ${oneRule.id}`}>
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