import './App.css'

function App() {

  return (
    <div className='card'>
        <img className='avatar' src="/avatar-jessica.jpeg" alt="#" />
      <div className='info'>
        <h1>Jessica Randall</h1>
        <p className='address'>London, United Kingdom</p>
      </div>
      <p>&quot;Front-end developer and avid reader. &quot;</p>
      <div className='links'>
        <button>GitHub</button>
        <button>Frontend Mentor</button>
        <button>LinkedIn</button>
        <button>Twitter</button>
        <button>Instagram</button>
      </div>
    </div>
  )
}

export default App
