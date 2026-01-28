import './App.css'

import CardLayout from './CardLayout';

const App = () => (
  <div>
    <CardLayout title="About">
      <p>Props of Components</p>
    </CardLayout>

    <CardLayout title="Details">
      <ul>
        <li>Feature A</li>
        <li>Feature B</li>
        <li>Feature C</li>
      </ul>
    </CardLayout>

    <CardLayout title="Contact">
      <p>Email: example@example.com</p>
      <p>Phone: 123-456-7890</p>
    </CardLayout>
  </div>
);

export default App



// import './App.css'

// import InfoCard from './InfoCard'

// const cards = [
//   {
//     idx: 1, //고유값이 키로 사용되어야함 
//     content: "Props pass data from one component to another.",
//     author: "Alice"
//   }, {
//     idx: 2,
//     title: "React Composition",
//     content: "Composition makes your components more reusable"
//   }
// ]

// function App() {

//   return (
//     <>
//       {cards.map(cardData1 => (
//         <InfoCard key={cardData1.idx} {...cardData1} /> //...객체 안에 있는 모든 속성을 props로 한 번에 전달한다
//       ))}
//     </>
//   )
// }

// export default App