import './App.css';
import {useState,useEffect} from 'react';
function App() {
  useEffect(() => {
    first();
  });
  const [numbers,setNumbers]=useState([]);
  const[links,setlinks]=useState([]);
  var nums = []
  function extractedurls(){
    const string=window.location.href
    const urlPattern = /url=([^/]+)/g;
    const matches = string.match(urlPattern);
    setlinks(matches)
    if(links!=null){
      links.forEach(fetchData)
    }
  }
  const first = async()=>{
    extractedurls()
    setNumbers(nums)
  }
  const fetchData = async (ele) =>{
    try{
    const response = await fetch(ele);
    const data = await response.json();    
    Object.values(data).forEach((ele) => {
      if (!nums.includes(ele)) {
        nums.push(ele);
      }
    }
    )
  }catch(error){
    console.error('error',error)
  }
  }
  return (
    <div className="App">
      <h1>number management app</h1>
      <p>{numbers}</p>
    </div>
  );
}

export default App;
