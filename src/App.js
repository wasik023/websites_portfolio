import Navbar from "./components/navbar/navbar";
import Intro  from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Team from "./components/team/team";
import Contact  from "./components/contactus/contactus";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewPage from "./components/clickformore/newpage";
import Whatido from "./components/clickformore/whatidof"
import Aboutus from "./components/clickformore/aboutmef"
import NewPage1 from "./components/morefrontend/samfront";
import Samnav from "./components/morefrontend/samnav";
import Aboutsam from "./components/morefrontend/aboutsam";
import Faizan from "./components/morefrontend/faizan_portfolio";
import Aboutfazi from "./components/morefrontend/contactfaizi";

function App() {
  return (
    <div className="App">
  <Router> {/* Top-level router */}
      <Routes> {/* Define all routes */}
        <Route path="/" element={(
          <>
            <Navbar />
            <Intro />
            <Skills />
            <Team />
            <Contact />
          </>
        )} />

        <Route path="/newpage" element={<PageWithChildren />} /> 
        <Route path="/newpage1" element={<PageWithChildren1 />} /> 
        <Route path="/Faizan_Portfolio" element= {<PageWithChildren2/>} />
     
      </Routes>
    </Router>
      <Footer />
    </div>
  );
}
function PageWithChildren() {
  return (
    <div>
       <Whatido />
      <NewPage />
      <Aboutus />
    </div>
  );
}
  function PageWithChildren1() {
    return (
      <div>
        <Samnav />
         <NewPage1 />
        <Aboutsam />
      </div>
    );
}

function PageWithChildren2() {
  return (
    <div>
      <Samnav />
       <Faizan />
      <Aboutfazi />
    </div>
  );
}


export default App;
