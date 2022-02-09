import React from 'react';
import Codearea from './components/Codearea';
import Navbar from './components/Navbar';
import Output from './components/Output';
import CodeProvider from './context/CodeProvider';
import "./links.scss";
import Quotes from "./components/Quotes"
const App = () => {
  return (
    <CodeProvider>
      <Navbar />
      <Codearea />
      <Output />
    </CodeProvider>
  )
};

export default App;
