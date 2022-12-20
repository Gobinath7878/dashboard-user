import { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';




const EditUserForm = (props)=>{
   const [user,setUser] = useState(props.currentUser)

   useEffect(()=>{
        setUser(props.currentUser)
   },[props])

   const handleInputChange = (event)=>{
    const {name,value} = event.target

    setUser({...user,[name]:value})
    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if(!user.name&&!user.username&&!user.Profile_Details) return;
                props.updateUser(user.id,user);
            }
        }>
        
        <div>
        <h1 className="tit-name">CRUD - USERS</h1>
        <h6 className="tit-slogan">Edit the <small>User</small>s with <small>art</small></h6>
        </div>

        <TextField sx={{height:80,width:250}}  color="success" onChange={handleInputChange} name="name" value={user.name}  label="type your Name" id="outlined-basic"  variant="outlined"/>
        <TextField sx={{height:80,width:250}}  color="success" onChange={handleInputChange} name="Job_Role" value={user.Job_Role} label="Job Role" id="outlined-basic"  variant="outlined"/>
        <TextField sx={{height:130,width:250}} color="success" onChange={handleInputChange} name="Profile_Details" value={user.Profile_Details} 
        id="outlined-multiline-static" label="Profile Details" multiline rows={4}  placeholder=""/>

            <div className="flex-btn">
            <button className="btn-input">Update User</button>
            <button className="btn-input1" onClick={()=>{
                props.setEditing(false)
            }}>Cancel</button>
            </div>
            
          </form>
    )
}

export default EditUserForm;
