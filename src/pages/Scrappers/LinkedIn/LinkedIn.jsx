import React,{useState}from 'react'
import { Parser } from '@json2csv/plainjs';
import axios from 'axios';
const port = "http://localhost:8000";


function LinkedIn() {
    const [username, setUsername] = useState({username:""});
    const[isDisabled, setIsDisabled ] = useState(true);
    const [data, setData] = useState({});
    const [json, setJson] = useState({})

    const handleOnChange = (e) =>{
        setUsername({...username, [e.target.name]: e.target.value});
    }

    const handleDownload = () => {
        const parser = new Parser();
        const csv = parser.parse(data);
        const blob = new Blob([csv], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'linkedin.csv';
        link.click();
      };

    const handleOnClick = async() =>{ //**********************change api key later */

        const options = {
            method: 'GET',
            url: 'https://linkedin-profile-data.p.rapidapi.com/linkedin-data',
            params: {url: `https://www.linkedin.com/in/${username.username}`},
            headers: {
              'X-RapidAPI-Key': '1480eeed4bmsh22876a9e7a36605p1a60abjsne2db0bdaf0eb',
              'X-RapidAPI-Host': 'linkedin-profile-data.p.rapidapi.com'
            }
          };

      axios.request(options).then(function (response) {
        setJson(response.data);

        if(Object.keys(json).length == 0) {
          console.log("server busy")
          alert('server busy')
          return
        }

        setData(json)
        setIsDisabled(false)
        console.log(data)
      }).catch(function (error) {
        console.error(error);
      });

      
    }
  return (
    <div>
        <input type="text" name = "username" placeholder='Enter phone' onChange={handleOnChange} />
        <button onClick={handleOnClick} style={{width:"150px", background:"black"}}>Send data</button>
        <button onClick={handleDownload} disabled={isDisabled} style={{width:"150px", background:"orange"}}>Send data</button>
    </div>

  )
}

export default LinkedIn
