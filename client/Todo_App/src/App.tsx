import { MainComponent } from './components/Pages/MainComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './shared/Layout';
import { Important } from './components/Pages/Important';
import { Planned } from './components/Pages/Planned';
import { Tasks } from './components/Pages/Tasks';
import { GettingStarted } from './components/Pages/GettingStarted';
// import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainComponent/>}/>
          <Route path="/important" element={<Important/>}/>
          <Route path="/planned" element={<Planned/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/getstarted" element={<GettingStarted/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
