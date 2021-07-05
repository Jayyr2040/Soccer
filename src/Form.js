import React from 'react';
import WebUrl from './WebUrl';

const Form = (props) => {

  const [query, setQuery] = React.useState("");

  function handleClearSearch() 
  { 
        setQuery("");
        props.handleQuery("")
  }
  
  function handleSubmit(event) { 
        event.preventDefault();
        console.log("event" , query);
        const str1 = query;
        const strAr = str1.split(' '); 
        const newstrAr =  WebUrl.news3 + strAr.join('+');
        console.log(newstrAr)
        props.handleQuery(newstrAr);
        props.handleQuery("");
    }

return (
    <div className="nav-item"> 
    <form><input value={query} placeholder="Enter football club" type="text" onChange={(event) => {setQuery(event.target.value); console.log("Onchange - ",event.target.value)}}/>
    {/* {query}   */}
    <button type="submit" onClick={handleSubmit}>Search</button> 
    <button type="button" onClick={handleClearSearch}> Clear </button>
    {/* <small>API call using await/async {user3?.id}{status3.toString()}</small>   */}
    </form>
</div>

)

}

export default Form