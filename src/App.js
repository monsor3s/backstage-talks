import GlobalStyle from "./styles/global";
import Issue from "./components/Issue/Index";
import PageIssueSix from './pages/IssueSix'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Issue />
        <Routes>
          <Route path='/' element={<PageIssueSix/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
