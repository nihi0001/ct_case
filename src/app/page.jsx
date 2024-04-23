// forside

export default function LandingPage(){
  return (
    <>
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
