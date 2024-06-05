import React, { useState, useEffect } from "react"
import Arrow from "../../assets/arrow.svg"
import trash from "../../assets/trash.svg"
import axios from 'axios';
import avatar from "../../assets/avatar.svg"

import { useHistory } from "react-router-dom"
import { Container, H1, Image, ContainerItens, Button, User, Backtrash } from "./styles";




function Usuarios() {


    const [users, setUsers] = useState([]);

    const History = useHistory()



    useEffect(() => {
        async function fatchuser() {

            const { data: newUsers } = await axios.get("http://localhost:3001/users")


            setUsers(newUsers);

        } fatchuser()

    }, [])






    async function Deleteuser(Userid) {

        await axios.delete(`http://localhost:3001/users/${Userid}`)
        const newUsers = users.filter((user) => user.id !== Userid);

        setUsers(newUsers)
    }


    function gobackpages() {
        History.goBack()
    }

    return (
        <Container>
            <Image alt="logo-image" src={avatar} />
            <ContainerItens>

                <H1>Usuarios.</H1>

                <ul> {users.map(Users => (
                    <User key={Users.id}>
                        <p> {Users.name}</p>  <p>{Users.age} </p>
                        <button onClick={() => Deleteuser(Users.id)} >
                            <Backtrash src={trash} alt="lata-de-lixo" /> </button>
                    </User>
                ))}
                </ul>

                <Button onClick={gobackpages} >   <img alt="seta" src={Arrow} /> Voltar  </Button>






            </ContainerItens>
        </Container>);

}

export default Usuarios;