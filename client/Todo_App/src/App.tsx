import { Sidebar } from './components/Sidebar';
import { MainComponent } from './components/MainComponent';
// import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <div className='flex w-screen h-screen gap-4'>
      <div className='w-60 h-full hidden sm:block'>
        <Sidebar/>
      </div>
      <div className='bg-purple-400 h-full flex-1 rounded-lg'>
        <MainComponent/>
      </div>
    </div>
  )
}

export default App
