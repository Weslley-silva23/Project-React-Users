import React, { useState, useRef } from "react"
import Arrow from "../../assets/arrow.svg"
import axios from 'axios';
import People from "../../assets/people.svg"

import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, } from "../containers/home/styles";




const App = () => {

    const [users, setUsers] = useState([]);
    const inputName = useRef()
    const inputAge = useRef()



    async function Addnewuser() {


        const { data: newUser } = await axios.post("http://localhost:3001/users",
            { name: inputName.current.value, age: inputAge.current.value, });

        setUsers([...users, newUser]);
    }



    return (
        <Container>
            <Image alt="logo-image" src={People} />
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

export default App