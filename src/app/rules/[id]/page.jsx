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
        <div>
        <h1>{rule.rulename}</h1>
        <h2>{rule.impact}</h2>
        <p>{rule.longDescription}</p>
        <p>{rule.issueType}</p>
        </div>
      </main>
    );
  } 


