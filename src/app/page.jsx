
// forside
export default function LandingPage() {
  return (  
    <div className="flex justify-start max-h-screen p-24 gap-x-72">
    <div className="grid p-12 gap-x-6 gap-3 mt-20"> 
    <h1 className="tracking-widest text-xl font-normal	">Web tilgængelighed</h1>
    <img src="/diversa_frontpage.svg" alt="logo" height={300} width={300}	className="mb-10"/>

    <p className="text-2xl mb-7 max-w-md">Få dit website tjekket for tilgængelighed - gratis og øjeblikkeligt resultat!
    </p>

      <form action="/result" className="flex flex-col max-w-72">
      <input 
      className="border border-1 rounded-md p-3 bg-input text-base"
      type="text"
      name="url"
      placeholder="https://example.com"
      required/>

    <button className=" p-3 rounded-xl bg-orange text-white mt-3"
    type="submit" 
    value="check website">
      Se resultatet
    </button>
    </form>
    </div>

    <div className=" grid items-end ">
      <img className="grid items-center" src="/accessibility-check.png" alt="check" width={500} height={500} />
    </div>
    </div>
   
  );
}



