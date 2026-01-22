import './App.css'
const isLoggedIn = false
const hasMessages = true
const message = "Hello,world!"
const fruit = ["apple", "banana", "cherry"]
function App() {

  return (
    <>
      {isLoggedIn ? <h1>Hello!</h1> : <h1>Sign in</h1>}
      {hasMessages && <h2>You have new messages!</h2>}
      {message && <p>Message : {message}</p>}

      {[0, 123, 'A', 'Hello', true, false]}
      { /*숫자만 문자형만 노출 된다*/}

      <ul>
        {fruit.map((fruit, index) => (

          <li key={index}> {fruit} </li>
          //리스트의 변동사항을 빠르게 파악하기위해 key 값 입력
        ))}
      </ul>
    </>
  )
}

export default App
