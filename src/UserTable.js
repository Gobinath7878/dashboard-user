import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

    const UserTable = (props)=>(
    
<div className='container'>  
   
        {props.users.length>0?(
            props.users.map((user)=>(
                
                <div className='card card-yellow'>
            <div key={user.id}>
            
             <h6>User no: {user.id}</h6>
             <h3 className='title'>{user.name}</h3>
             <div className='price'>
             <h4 className="wish">{user.Job_Role}</h4>
             </div>
             <h5 className="description">{user.Profile_Details}</h5>
          
            <button onClick={()=>{
            props.editRow(user)
            }} className="button muted-button"><CreateIcon /></button>
            <button onClick={()=>props.deleteUser(user.id)} className="button muted-button del-btn"><DeleteIcon/></button>
           
            </div>
            </div>
    ))
                ):(
                    <div className="empty">
                        <h1>Add Users <sub>Empty is no more....</sub></h1>
                    </div>
                )
            }
          


    
</div>
    );
    
    export default UserTable;