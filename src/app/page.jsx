// forside

import Image from "next/image";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Frontpage",
  description: "Description",
};

export default async function LandingPage({searchParams}){
  const params = new URLSearchParams( searchParams );
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();

  return (
    <>
      <h1>Product name</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae deserunt soluta, nam quam numquam odio enim? Vero dolorum veniam necessitatibus, eum beatae quas obcaecati mollitia nihil quia tempora facere?
      </p>

      <form action="/src/result">
      <input 
      type="text"
      name="url"
      id="url"
      placeholder="https://example.com"
      required
      />
      
    <button type="submit" value="check website">Check website</button>
    
    </form>


    </>
  );
}
