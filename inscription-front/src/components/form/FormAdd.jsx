
import { useState } from "react"
import { postData } from "../../data/addData";

export function FormAdd() {
    const [users, setUsers] = useState({
        username : "",
        email : "",
        password : "",
        sex : {
            m : false,
            f : false,
            other: false
        }
    })

    const onSubmit = async (e) => {
       e.preventDefault()
       const sex = Object.entries(users.sex).filter(s => s[1]).flat()[0].toUpperCase();
       const  user = {
        username : users.username,
        email : users.email,
        password : users.password,
        sex
    }
     try {
        const newUser = await postData("http://localhost:8086/users/add", user)
        if (newUser !== null) {
           setUsers({
                username : "",
                email : "",
                password : "",
                sex : {
                    m : false,
                    f : false,
                    other: false
                }
            })
        }
     } catch (err) {
        console.error(err)
     }
    }

  return (
    <form onSubmit={onSubmit}>
        
        <div>
        <label>Nom
            <input type="text" name="username" id="username" placeholder="inserez votre nom ici"
                onChange={e => setUsers({...users, username : e.target.value})}
                value={users.username}
            />
        </label>
        </div>
        <div>
        <label>E-mail
            <input type="email" name="email" id="email" placeholder="inserez votre email ici"
                onChange={e => setUsers({...users, email : e.target.value})}
                value={users.email}
            />
        </label>
        </div>
        <div>
        <label>Mot de passe
            <input type="password" name="password" id="password" placeholder="inserez votre mot de passe ici"
                onChange={e => setUsers({...users, password : e.target.value})}
                value={users.password}
            />
        </label>
        </div>
        <div>
        <label>Sex 
            <label>
            <input type="radio" name="F" id="F"
                checked = {users.sex.f}
                onChange={e => setUsers({...users, sex : {f : e.target.checked, m : false, other : false}})}
            /> Feminin
            </label>
            <label>
            <input type="radio" name="M" id="M"
                 checked = {users.sex.m}
                 onChange={e => setUsers({...users, sex : { m : e.target.checked, f : false, other : false}})}
            /> Masculin
            </label>
            <label>
            <input type="radio" name="OTHER" id="OTHER"
                 checked = {users.sex.other}
                 onChange={e => setUsers({...users, sex : { other : e.target.checked, f : false, m : false}})}
            /> Autre
            </label>
        </label>
        </div>
        <div>
            <button type="submit">Ajouter</button>
        </div> <br/>
        <br/>
    </form>
  )
}
