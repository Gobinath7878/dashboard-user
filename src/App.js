import { useState } from "react";
import AddUserForm from "./Update";
import UserTable from "./UserTable";
import EditUserForm from "./EditUserForm";
import './App.css'


function App() {

const usersData = [
    {id:1,
    name:'Gobi Gobu',
    Job_Role:'Fullstack developer',
    Profile_Details:'Myself Gobi.I did M.Sc.I wish to coding for creating websites.I am interested to working in React',
  },
  {id:2,
    name:'Ramesh',
    Job_Role:'Java developer',
    Profile_Details:'Strong in design and integration with intuitive problem-solving skills.',
  },

  
    
];

const addUser = (user)=>{
    user.id = users.length + 1;
    setUsers([...users,user])
}
const deleteUser = (id)=>{
    setUsers(users.filter((user)=>user.id!==id))
    setEditing(false);
}

    const [users,setUsers] = useState(usersData);
    const [editing,setEditing] = useState(false)
    

    const initialFormState = {id:null,name:'',Job_Role:'',Profile_Details:''}

    const [currentUser,setCurrentUser] = useState(initialFormState);

    const editRow = (user)=>{
        setEditing(true);
        setCurrentUser({id:user.id,name:user.name,Job_Role:user.Job_Role,Profile_Details:user.Profile_Details});
    }

    const updateUser = (id,updatedUser)=>{
        setEditing(false);
        setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
    }

  return (
    <>
      <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
      <div className="input-card">
            {editing?(<div>
                
                <EditUserForm 
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                />
            </div>):(<div>
                
          <AddUserForm addUser={addUser} />
          </div>
            ) 
        }

      </div>
      
    </>
  );
}

export default App;
