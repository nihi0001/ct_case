
// forside
export default function LandingPage() {
  return (  
    <div className="grid p-6 gap-x-6 text-center gap-3"> 
    <h1>Product Name</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt repellat nesciunt, aspernatur, ratione natus unde laudantium sunt non iusto tempora harum nam quasi accusamus adipisci iure vero itaque blanditiis sit!
    </p>

      <form action="/result">
      <input 
      className="border-solid border-2 p-2"
      type="text"
      name="url"
      placeholder="https://example.com"
      required/>

    <button className=" p-3 rounded-xl "
    type="submit" 
    value="check website">
      Check website
    </button>
    </form>
    </div>
   
  );
}



