import './App.css'

const element1 = <h1>Hello,world!</h1>
const element2 = (
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
)
const language = "javascript"

console.log(element1);
console.log(element2);

function Basic() {
  const name = "sh.shin"
  const age = 25;
  const isAdmin = true;

  return (
    <div>
      <p>Name : {name}</p>
      <p>Age next year : {age + 1}</p>
      <p>{name + "'s Profile"}</p>
      <p>Admin status : {String(isAdmin)}</p>
    </div>
  )
}

function App() {

  return (
    <div>
      {/* 주석은 jsx 에서 컨트롤 / 슬래쉬 */}
      <h1>닫힌태그는 필수</h1>
      <br />
      {language}
      <Basic />
      {element2}
    </div>)
}

export default App
