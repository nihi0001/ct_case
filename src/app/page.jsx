// forside

import Image from "next/image";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Frontpage",
  description: "Description",
};

export default async function Home() {

  const params = new URLSearchParams({
   // url: "https://www.charlietango.dk",
   url: "https://www.kea.dk", "https://www.dsb.dk", "https://www.dr.dk",
  });

  const response = await fetch(
    `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`,
  );
  const data = await response.json();

  return (
    <>
    <h1>Product name</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae deserunt soluta, nam quam numquam odio enim? Vero dolorum veniam necessitatibus, eum beatae quas obcaecati mollitia nihil quia tempora facere?
    </p>

    <form>
      <input 
      type="url"
      name="url"
      id="url"
      placeholder="https://example.com"
      required
      />
    </form>

    <button type="submit">Check it</button>
    </>
  );
}
