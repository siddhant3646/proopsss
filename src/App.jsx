import {Child} from "./Child";

import { Child2 } from "./Child2";

export function App ()
{
    console.log("App_is_called.")
    return(
    <div>
        <p>My Details:</p>
        <ul>
            <li>Siddhant</li>
            <li>Singh</li>
        </ul>
        <Child firstName={"Ambuj"} lastName={"Singh"} age={23} />
        <Child2 car = {{brand:"Ciaz",color:"Grey",speed:200}} image={<img src="https://picsum.photos/200/300" />}> 
        <img src="https://picsum.photos/200/300" />
        </Child2>
    </div>
    )
}