import { useState } from "react";
import TextField from '@mui/material/TextField';


 const AddUserForm = (props)=>{
    const initialFormState = {id:null,name:'',username:'',item_description:''}
    const [user,setUser] =  useState(initialFormState);

    const handleInputChange = (event)=>{
       const {name,value} = event.target
       setUser({...user,[name]:value})
    }
    return (
    <form  onSubmit={
        event => {
            event.preventDefault();
            props.addUser(user);
            setUser(initialFormState);
        }
    }>
        <div>
            <h1 className="tit-name">CRUD - USERS</h1>
            <h6 className="tit-slogan">add the <small>User</small>s with <small>art</small></h6>
        </div>
        
       
        <TextField sx={{height:80,width:250}}  color="success" onChange={handleInputChange} name="name" value={user.name}  label="your Name " id="outlined-basic"  variant="outlined"/>
        <TextField sx={{height:80,width:250}}  color="success" onChange={handleInputChange} name="Job_Role" value={user.Job_Role} label="Job Role" id="outlined-basic"  variant="outlined"/>
        <TextField sx={{height:130,width:250}} color="success" onChange={handleInputChange} name="Profile_Details" value={user.Profile_Details} 
        id="outlined-multiline-static" label="Profile Details" multiline rows={4}  placeholder=""/>
      
        <button className="btn-input">Create User</button>
      </form>
    )
 }

export default AddUserForm;
