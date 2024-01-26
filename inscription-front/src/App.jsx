
import { useEffect, useState } from 'react'
import { getData } from './data/getData';
import { deleteData } from './data/deleteData';
import { FormAdd } from './components/form/FormAdd';
import { putData} from './data/putData';

export default function App() {
const [users, setUsers] = useState([])

useEffect( () => {
    getData("http://localhost:8086/users/").then(data => {
    setUsers(data)
    }
    )
    .catch(err => console.error(err));
},[])

const onDelete = async (id)=>{
  // deleteData("http://localhost:8086/users/delete/" + id) ou
  
  try {
    const user = await deleteData(`http://localhost:8086/users/delete/${id}`)
    if (user) {
      const newUsers = users.filter(u => u.id != id)
      setUsers(newUsers)
    }
  } catch (error) {
    console.error(error);
  }
}

const onUpdate = async (id) => {
  try {
    const user = await putData(`http://localhost:8086/users/put/${id}`)
    if (user) {
      const updateUser = users.map(u => u.id == id ? user : u)
      setUsers(updateUser)
    }
  } catch (error) {
    console.log("modification felaide");
  }
}

return (
  <div>
    <div>
      <FormAdd/>
    </div>
    <div>
        <table>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Sex</th>
          <th colSpan="2">Actions</th>
        </tr>
        <tbody>
          {
            users.map(u => (
              <tr key={u.id}>
                <td> {u.id}</td>
                <td>{u.username} </td>
                <td>{u.email}</td>
                <td>{u.password}</td>
              <td> {u.sex}</td>
              <th>
                <button onClick={() => onUpdate(u.id)}>
                  modifier
                </button>
                </th>
              <th>
                <button onDoubleClick={() => onDelete(u.id)}>
                  supprimer
                </button>
                </th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </div>
)
}
