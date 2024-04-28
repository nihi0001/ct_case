// rules list view
import Link from "next/link";
import {data} from "./rules"

export default async function Page() {
     console.log(data);
  
    return (
      <main className="p-6 items-center max-w-screen-lg mx-auto mt-12">
       <div>
        <h1 className="text-4xl font-semibold mb-12 ">Rules</h1>
      <ul className="space-y-7">
        {data.map(rule => (
          <li key={rule.rulename}className="flex items-center justify-between p-2 border-b text-lg" >{rule.rulename}
          <button className="bg-orange text-white text-base p-0.5 px-4 rounded-xl"><Link href={`/rules/${rule.rulename}`} prefetch={false}>
            Læs mere
            </Link>
            </button>
          </li>
          
        ))}
       
      </ul>
      </div>
      </main>
    );
  } 
