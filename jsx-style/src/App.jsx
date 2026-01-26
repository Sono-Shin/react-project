import './App.css'
const disableInput = true

const divStyle = {
  background: 'lightblue',
  margin: '12px',
  padding: '20px',
  borderRadius: '8px'
}
function App() {

  return (
    <>
      <label htmlFor='username' //for 예약어라서 바뀐거임
      >
        username
      </label>
      <input type='text' id='username'
        className='input-field' //className 예약어라서 바뀐거임
        maxLength={29} //카멜 case
        disabled={disableInput}
      />

      <span style={{
        fontWeight: "bold",
        fontStyle: "italic"
      }}>font style</span>

      <div style={divStyle}>divStyle1</div>

      <div style={{ ...divStyle, background: 'red' }}>divStyle2</div>
      {/* ...객체 스프레딩 */}

      {/* ...style 를 이용하여 css 각각 다르게 지정 가능.. 많이 안 사용할 거 같음.*/}

    </>
  )
}

export default App
