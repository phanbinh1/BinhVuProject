import React, { useEffect, Component } from "react"
import { Link } from 'react-router-dom'

import { AiOutlineUserAdd } from 'react-icons/ai';
import SearchUser from '../Users/SearchUser';
import { useState } from 'react'
//import EditUsersList from './editUser';
//import DataGrid from 'devextreme-react/data-grid';
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../../../../actions/usersActions";
import MaterialTable from 'material-table';
import "./style/usersStyle.scss";


const UsersList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getUsersList = () => dispatch(getUsersAction());
        getUsersList(); 
    }, []);
     
//    const columns = [
//         {title: "Place", field: "userName"},
//         {title: "Name", field: "email"}
//     ]

    const users = useSelector(state => state.usersList.usersList);
    console.log("List User New:",users);

    return (
        <>
           <table className="blockUserListMain">
               <thead>
                   <tr>
                        <th className="blockUserListMain__userName">User Name</th>
                        <th className="blockUserListMain__email">Email</th>
                   </tr>         
                </thead>
               
                <tbody className="blockUserListMain__listItemGroup">  
                       {users.map(user => (
                           <User key={user.id} user={user} />
                       ))}
                </tbody>
               
                {/* <MaterialTable style={{width:'700px', height:'650px'}}
                    title="Employdata"
                    data = {[{userName: user.userName , email: user.email}]}
                    columns ={columns}
                /> */}
             
                <Link to={"/usersList/new" } >  
                    <AiOutlineUserAdd className="blockUserListMain__linkToAddUser"/> 
                </Link>
           </table>
           <SearchUser />
          
        </>
    );
};
export default UsersList;
// import React, { useState } from 'react'

// const [user, setUser] = useState({
       
// // })
// function getEditUser() {
//     <EditUsersList />
// }
      
//    )
// }
// export default  UsersList;
// const UsersList = () => { 
//    return (
           
//    )
// }
// export default  UsersList;
// }
// export default  UsersList;
// }
// export default  UsersList;