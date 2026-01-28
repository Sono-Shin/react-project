import './App.css'

import InfoCard from './InfoCard'

const cards = [
  {
    idx: 1, //고유값이 키로 사용되어야함 
    content: "Props pass data from one component to another.",
    author: "Alice"
  }, {
    idx: 2,
    title: "React Composition",
    content: "Composition makes your components more reusable"
  }
]

function App() {

  return (
    <>
      {cards.map(cardData1 => (
        <InfoCard key={cardData1.idx} {...cardData1} />
      ))}
    </>
  )
}

export default App