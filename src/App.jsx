import './App.css'

function App() {

  return (
    <div className='flex flex-col items-center justify-center gap-7 p-10 rounded-lg card'>
        <img className='avatar mb-4' src="/avatar-jessica.jpeg" alt="#" />
      <div className='info font-semibold'>
        <h1>Jessica Randall</h1>
        <p className='address'>London, United Kingdom</p>
      </div>
      <p>&quot;Front-end developer and avid reader. &quot;</p>
      <div className='flex flex-col gap-4'>
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
