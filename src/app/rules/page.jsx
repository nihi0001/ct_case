// rules list view
import {data} from "./rules"

export default async function Page() {
     console.log(data);
  
    return (
      <main>
        <h1>Rules</h1>
      <ul>
        {data.map(rule => (
          <li key={rule.rulename}>{rule.rulename}</li>
          
        ))}
       
      </ul>
      </main>
    );
  } 