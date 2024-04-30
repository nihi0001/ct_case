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
        <div className="p-8 md:p-72">
        <h1 className="text-2xl font-semibold mb-4">{rule.rulename}</h1>
        <hr className="color:black md:w-full" />
        <h2 className="mt-4 text-xl">{rule.impact}</h2> <br />
        <p className="text-xl">{rule.longDescription}</p> <br />
        <p className="text-xl">{rule.issueType}</p>
        </div>
      </main>
    );
  } 


