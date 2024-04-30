import { score } from "@/lib/calculatorResult";
 import Image from "next/image";
 import ResultScore from "@/app/components/ResultScore"

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
    <main className="p-14">
      <h1 className="text-3xl mb-8">Web resultat</h1>
      <div>
      <article className="grid grid-cols-2 gap-4">
      <h1>Resultat for {data.url.substring(0, 30)}...</h1>
      <p>Fandt {data.violations.length} fejl</p>
      <Image
        alt={data.url}
        src={data.screenshot.url}
        width={450}
        height={500}
      />
      <ResultScore data={webScore} />
      </article>
      <article>
        <h2>Fejltyper:</h2>

        <details className="border-2">
        <summary>
      <h3 className="text-lg">{majorError.length} Kritiske fejl</h3>
</summary>
</details>

<details className="border-2">
<summary>
      <h3 className="text-lg grow">{moderatError.length} Moderate fejl</h3>
      </summary>
      </details>

      <details className="border-2">
      <summary>
      <h3 className="text-lg">{minorError.length} Mindre fejl</h3>
      </summary>
      </details>
      </article>
      </div>
    </main>
  );
} 