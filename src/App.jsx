import Hero from './components/Hero'
import './App.css'

import Demo from './components/Demo'

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'/>

          <div classNam='app'>
            <Hero/>
            <Demo/>

          </div>

      </div>
      </main>
  )
}


export default App