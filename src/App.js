// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

/* import logo from './logo.svg'; */

import './App.css';

import React from 'react';

// import { Helmet } from "react-helmet";

import Header from './components/Header';

function App() {
  return (
    <div className="App">

      {/* <Helmet>
        <title>Advanced Appliance Repair</title>
        <meta name="description" content="Advanced Appliance Repair overview, contact, and expertise." />
        <meta name="keywords" content="Advanced Appliance Repair, website, web development, React" />
        <meta name="author" content="Advanced Appliance Repair" />
      </Helmet> */}

      <Header />

      {/* <Home />
      <About />
      <Publications />
      <Project />
      <Gallery />
      <Contact />
      <Footer /> */}

    </div>
  );
}

export default App;