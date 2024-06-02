import React, { useState, useRef } from "react"
import Arrow from "../../assets/arrow.svg"
import axios from 'axios';
import people from "../../assets/people.svg"

import { useHistory } from "react-router-dom"


import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, } from "./styles";




function Users() {


    const [users, setUsers] = useState([]);
    const inputName = useRef()
    const inputAge = useRef()
    const history = useHistory()

    async function Addnewuser() {


        const { data: newUser } = await axios.post("http://localhost:3001/users",
            { name: inputName.current.value, age: inputAge.current.value, });

        setUsers([...users, newUser]);
        history.push('/usuarios')

    }

    return (
        <Container>
            <Image alt="logo-image" src={people} />
            <ContainerItens>

                <H1>Olá</H1>
                <InputLabel>Nome</InputLabel>
                <Input ref={inputName} placeholder="Nome:" />

                <InputLabel>Idade</InputLabel>
                <Input ref={inputAge} placeholder="Idade:" />

                <Button onClick={Addnewuser}  >Cadastrar <img alt="seta" src={Arrow} /> </Button>




            </ContainerItens>
        </Container>);

}

export default Users;