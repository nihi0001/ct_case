
// forside
export default function LandingPage() {
  return (  
    <div className="grid md:justify-center md:flex md:max-h-screen md:p-24 md:mt-10 md:gap-72">
    <div className="grid p-10"> 
    <h1 className="tracking-widest text-base md:text-2xl font-normal">Web tilgængeligheds validator</h1>
    <img src="/diversa_frontpage.svg" alt="logo" height={300} width={300}	className="mb-12 mt-2"/>

    <p className="text-xl mb-7 md:text-3xl md:leading-normal">Få dit website tjekket for tilgængelighed - 
    <br /> 
    <span className="text-orange">gratis og øjeblikkeligt resultat!</span>
    </p>

    <form action="/result" className="flex flex-col">
      <input 
      className="border border-1 rounded-md p-3 bg-input text-base md:w-4/5"
      type="text"
      name="url"
      placeholder="https://example.com"
      required/>

      <button 
      className=" p-3 rounded-xl bg-orange text-white mt-3 max-w-72"
      type="submit" 
      value="check website">
        Se resultatet
      </button>
    </form>
    </div>

    <div className="grid w-9/12 m-auto md:items-center md:w-fit">
      <img src="/computer-check.png" alt="check" width={400} height={400} />
    </div>
    </div>
   
  );
}



