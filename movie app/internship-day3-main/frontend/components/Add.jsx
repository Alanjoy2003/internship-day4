import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';

const Add = ({person}) => {
  const [counter,setCounter]=useState(0);
  const[form,setForm]=useState({
"sname":person.sname,
"adm":person.adm,
"department":person.department,
"semester":person.semester
  })
  let postData=()=>{
    //console.log(form);
    axios.post('http://localhost:4000/new-movie',form).then((res)=>{
      alert('Movie data posted')
    })
  }
 // let valueAdd=()=>{
   // setCounter(counter+1);
  //}
  function valuecap(e){
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }
  return   (<Box
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>
  <div>
    <TextField
      required
      id="outlined-required"
      label="Required"
      defaultValue="MovieName"
      name='MovieName'
      value={form.MovieName}
      onChange={valuecap}
    /><br></br>
    <TextField
      required
      id="outlined-required"
      label="Required"
      defaultValue="Category"
      name='Category'
      value={form.Category}
      onChange={valuecap}
    /><br></br>
        <TextField
      required
      id="outlined-required"
      label="Required"
      defaultValue="MovieDirector"
      name='MovieDirector'
      value={form.MovieDirector}
      onChange={valuecap}
    /><br></br>
        <TextField
      required
      id="outlined-required"
      label="Required"
      defaultValue="ReleaseYear"
      name='ReleaseYear'
      value={form.ReleaseYear}
      onChange={valuecap}
    /><br></br>
    <Button variant="text" onClick={postData}>submit</Button>
    <br/>
   {/*<small>Button clicked {counter}(Times)</small>*/}
    </div>
    </Box>
  )
}

export default Add