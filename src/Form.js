import React from 'react';
import WebUrl from './WebUrl';

const Form = (props) => {
    const [query, setQuery] = React.useState("");
  const [queryArr, setQueryArr] = React.useState(["",""]);

  function handleClearSearch() 
  { 
        setQuery("");
        props.handleQuery("")
  }
  
  function handleSubmit(event) { 
        event.preventDefault();
        console.log("straight from keyboard - form" , query);
        if (query !== ""){
        const str1 = query;
        const strAr = str1.split(' '); 
        const queryUrl =  WebUrl.news3 + strAr.join('+');
        console.log("query url - form - ",queryUrl);
        const queryUpdateArr = [...queryArr];
        queryUpdateArr[0] = queryUpdateArr[1];
        queryUpdateArr[1] = queryUrl;
        console.log("Updated query Array - form", queryUpdateArr)
        console.log("1 & 2 same?", queryUpdateArr[0]?.slice(queryUpdateArr[0]?.lastIndexOf('=') + 1) === queryUpdateArr[1]?.slice(queryUpdateArr[1]?.lastIndexOf('=') + 1))
        setQueryArr(queryUpdateArr);
        props.handleQuery(queryUpdateArr);
        }
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