// rules single page
import {data} from "../rules"

export default async function Page({params}) {
    const {id} = params;
    const rule = data.find(rule => rule.rulename === id)
  console.log(rule);
    return (
      <main>
      <ul>
        <li>{rule.description}</li>
      </ul>
      </main>
    );
  } 