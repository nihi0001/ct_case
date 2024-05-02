
// forside

export const metadata = {
  title: "Forside",
  description: "Tjek dit website for web tilgængelighed",
};

export default function LandingPage() {
  return (  
    <div className="grid md:justify-center md:flex md:max-h-screen md:p-24 md:mt-10 md:gap-72">
    <div className="grid pt-20 p-10"> 
    <h1 className="tracking-widest text-base text-grey-80 md:text-2xl font-normal">Web tilgængeligheds validator</h1>
    <img src="/diversa_frontpage.svg" alt="logo" height={300} width={300}	className="mb-12 mt-2"/>

    <p className="text-xl text-grey-80 mb-7 md:text-3xl md:leading-normal">Få dit website tjekket for tilgængelighed - 
    <br /> 
    <span className="text-orange">gratis og øjeblikkeligt resultat!</span>
    </p>

    <form action="/result" className="flex flex-col">
      <input 
      className="border border-1 rounded-md p-3 bg-input text-base w-4/5"
      type="text"
      name="url"
      placeholder="example.com"
      required/>
      {/* <p>Husk at indsætte en hjemmeside med https://</p> */}

      <button 
      className=" p-3 rounded-xl bg-orange hover:bg-bannerBlue text-white mt-3 w-60"
      type="submit" 
      value="check website">
        Søg
      </button>
    </form>
    </div>

    <div className="grid w-11/12 p-10 mb-16 md:m-0 md:items-center md:w-fit">
      <img src="/computer-check.png" alt="check" width={400} height={400} />
    </div>
    </div>
   
  );
}



