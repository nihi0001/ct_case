
// forside
export default function LandingPage() {
  return (  
    <div className="grid p-6 gap-x-6 gap-3"> 
    <h1>Web tilgængelighed</h1>
    <p>Få dit website tjekket for tilgængelighed - gratis og øjeblikkeligt resultat!
    </p>

      <form action="/result">
      <input 
      className="border-solid border-2 p-2"
      type="text"
      name="url"
      placeholder="https://example.com"
      required/>

    <button className=" p-3 rounded-xl bg-orange text-white"
    type="submit" 
    value="check website">
      Check website
    </button>
    </form>
    </div>
   
  );
}



