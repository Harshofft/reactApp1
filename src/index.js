import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
// function greet(names) {
//     console.log(names);
//     return (<h1>hey{names}</h1>)   
// }
const Hello =(probs)=>{
    console.log(probs);
    return (<h1>hello</h1>)
}


root.render(<>
<Hello names="harry" city="newyork"/>
<h1>Hello World </h1>
{/* <greet names="harry"/>
<greet names="harry"/>   */}
</>);