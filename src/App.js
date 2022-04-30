import React from "react";
import {add,sub,multi,div} from "./Calc" ;

function App(){
    return(
        <>
        <ul>  
          <li>The sum of two number is:<br/>{add(40,44)}</li>
          <li>The sub of two number is:<br/>{sub(40,4)}</li>
          <li>The multiply of two number is:<br/>{multi(40,4)}</li>
          <li>The division of two number is:<br/>{div(40,4)}</li>
        </ul>
        </>
    );
}
export default App;