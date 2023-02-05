import React,{useState}from 'react'
import { Parser } from '@json2csv/plainjs';
import axios from 'axios';
import { isDisabled } from '@testing-library/user-event/dist/utils';
const port = "http://localhost:8000";


function Instagram() {
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
        link.download = 'instagram.csv';
        link.click();
      };

    const handleOnClick = async() =>{ //**********************change api key later */

      const options = {
        method: 'GET',
        url: 'https://instagram-data12.p.rapidapi.com/user/details-by-username/',
        params: {username: username.username},
        headers: {
          'X-RapidAPI-Key': '1480eeed4bmsh22876a9e7a36605p1a60abjsne2db0bdaf0eb',
          'X-RapidAPI-Host': 'instagram-data12.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        setJson(response.data);

        if(Object.keys(json).length == 0) {
          console.log("server busy")
          alert('server busy')
          return
        }

        const val = json.data.user;

        const obj = {
          username:val.username,
          fullname:val.full_name,
          biography:val.biography,
          email:val.business_email,
          phone:val.business_phone_number,
          category:val.category_name,
          follows:val.edge_follow.count,
          followers:val.edge_followed_by.count,
        }
        setData(obj)
        setIsDisabled(false)
        console.log(obj)
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

export default Instagram
