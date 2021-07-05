import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Form from './Form';
//export const DataContext = React.createContext();

function App() {

  const [queryStr,setQueryStr] = useState([]);
  const handleQuery = (query) => {
    setQueryStr([...query]);
  }
console.log("query str - App", queryStr);
  return (
    <div>
        <div className="nav">
        <Header/>
        <Form handleQuery={handleQuery}/>
       </div>
       {/* <DataContext.Provider value={queryStr}> */}
        <Main queryStr={queryStr}/>
       {/* </DataContext.Provider> */}
    </div>
  );
}

export default App;
