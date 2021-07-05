const ApiCall = (props) => {
    console.log(props.url);
    
    if (props.isFirstLoad & props.url !== "") {
    const makeAPICall = async () => {
        const response = await fetch(props.url);
        if (!response.ok) {
          console.log("server bad response");
        }
        const data = await response.json();
        console.log(` - data :`, data);
        props.handleApiCall(data);
      };
      makeAPICall().catch((e) => {
        console.log("There has been a problem with your fetch operation: ",e.message);
      });
    }
    // else { props.handleApiCall("")}

    return (
        <>
        </>
    )
}

export default ApiCall