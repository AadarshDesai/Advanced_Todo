import { MainComponent } from './components/MainComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './shared/Layout';
// import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainComponent/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
