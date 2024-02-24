import Gallery from "./components/Gallery";



// import diceIcon1 from "/images/dice-1.png";
// import diceIcon2 from "/images/dice-2.png";
// import diceIcon3 from "/images/dice-3.png";
// import diceIcon4 from "/images/dice-4.png";
// import diceIcon5 from "/images/dice-5.png";
// import diceIcon6 from "/images/dice-6.png";


// class Dice extends Component {
//   constructor(props) {
//     super(props);

//     const { dice1, dice2 } = this.props;

//     this.state = {
//       defaultDice1: dice1,
//       defaultDice2: dice2
//     }
//   }

//   getDiceImage(images) {
//     switch (images) {
//       case 1: return diceIcon1;
//       case 2: return diceIcon2;
//       case 3: return diceIcon3;
//       case 4: return diceIcon4;
//       case 5: return diceIcon5;
//       case 6: return diceIcon6;
//       default: return diceIcon1;
//     }
//   }


function App() {
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
    />
 
  );
}
// }


export default App;
