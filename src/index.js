import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import Greetings from "./app";
import {HelloUser ,HelloUsers} from "./app";
root.render(<>
<Greetings/>
<HelloUser name="Harsh" emoji="👋"/>
<HelloUser name="Harry" emoji="😊"/>
<HelloUsers name="Harry" emoji="🌄🌄"/>
</>);    