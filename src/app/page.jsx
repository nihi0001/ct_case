
// forside
export default function LandingPage() {
  return (  
    <div className="grid md:justify-evenly md:flex md:max-h-screen md:p-24 md:mt-20">
    <div className="grid p-10"> 
    <h1 className="tracking-widest text-xl font-normal">Web tilgængelighed</h1>
    <img src="/diversa_frontpage.svg" alt="logo" height={300} width={300}	className="mb-10"/>

    <p className="text-2xl mb-7 max-w-md">Få dit website tjekket for tilgængelighed - <span className="text-orange">gratis og øjeblikkeligt resultat!</span>
    </p>

      <form action="/result" className="flex flex-col">
      <input 
      className="border border-1 rounded-md p-3 bg-input text-base w-full"
      type="text"
      name="url"
      placeholder="https://example.com"
      required/>

    <button className=" p-3 rounded-xl bg-orange text-white mt-3  max-w-72"
    type="submit" 
    value="check website">
      Se resultatet
    </button>
    </form>
    </div>

    <div className="grid md:items-center">
      <img className="" src="/accessibility-check.png" alt="check" width={400} height={400} />
    </div>
    </div>
   
  );
}



