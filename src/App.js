import Gallery from "./components/Gallery";
import{useState} from "react";



import images from './images/dice-1.png';
import images from './images/dice2';
import images  from './images/dice3';
import images  from './images/dice4';
import images  from './images/dice5';
import images  from './images/dice6';

function App() {

const [pos,setPos] = useState (0);


return (
<Gallery
images={[
"/images/dice-1.png",
"/images/dice-2.png",
"/images/dice-3.png",
"/images/dice-4.png",
"/images/dice-5.png",
"/images/dice-6.png"
]}


pos={pos}

onPrev= {() => {
setPos(pos - 1);
}}

onNext={() => {
setPos(pos+1);
}}
/>
);
}

export default App; 