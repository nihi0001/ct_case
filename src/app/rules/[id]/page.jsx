// rules single page
import RulesComponent from "@/app/components/RulesComponent";

export default async function GetRules() {

    return (
      <div>
        <ul>
          <RulesComponent />
        </ul>
      </div>
    );
  } 



  // const {id} = params;
  //   const rule = data.find(rule => rule.rulename === id);

//   <main>
//   <div>
//     { data.map( rule => {
//       return(
//         <div key={data.id}>
//           <strong>{rule.rulename}</strong>
//           <br />
//           {rule.description}
//         </div>
//       )
//     })}
//   </div>
// </main>