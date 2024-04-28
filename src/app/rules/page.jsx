// rules list view
import Link from "next/link";
import {data} from "./rules"

export default async function Page(params) {
  const {id} = params;
  const rule = data.find(rule => rule.rulename === id);
  
    return (
      <main>
        <h1><strong>Rules</strong></h1>
        <ul>
          { data.map( rule => (
          <li key={rule.rulename}><Link href={"/rules/page"} prefetch={false}>{rule.rulename}</Link></li>
          ))}
        </ul>
      </main>
    );
  } 


  // {data.map(rule => (
  //   <li key={rule.rulename}>{rule.rulename}</li>
  // ))}


  // <ul>
  //       { data.map( rule => (
  //         <li key={rule.rulename}><a href="/rules/page" prefetch={false}>{rule.rulename}</a></li>
  //       ))}
  // </ul>