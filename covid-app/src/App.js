import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegistrationForm from './components/Registration';
import Summary from './components/Summary';
import Layout from './Layout';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<RegistrationForm/>}/>
                <Route path="summary" element={<Summary/>}/>
                {/* <Route path="*" element={<ErrorPage/>}/> */}
            </Route>
        </Routes>
      </BrowserRouter>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
    </>
  );
}

export default App;