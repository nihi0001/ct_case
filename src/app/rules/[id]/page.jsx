// rules single page
import { data } from "../rules"

export async function generateStaticParams() {
  return data.map((regl) => ({
    id: regl.rulename,
  }));
}

export default async function Page({params}) {
    const {id} = params;
    console.log(id)
    const ruleFilter = data.filter(oneRule => oneRule.rulename === id);
   const rule = ruleFilter[0]
    

    return (
      <main>
        <div className="">
        <svg 
        width={40}
        height={40}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 448 512">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
        </svg>
        </div>
        <div className="p-8 md:p-72 md:ps-96">
        <h1 className="text-2xl font-semibold mb-4">{rule.rulename}</h1>
        <hr className="color:black md:w-full" />
        <h2 className="mt-4 text-xl">{rule.impact}</h2> <br />
        <p className="text-xl">{rule.longDescription}</p> <br />
        <p className="text-xl">{rule.issueType}</p>
        </div>
      </main>
    );
  } 


