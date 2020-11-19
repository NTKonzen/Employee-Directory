import React from "react";
import "./style.css";

import Header from "../Header/Header";
import Input from "../Input/Input";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Col from "../Col/Col";
import Table from "../Table/Table";

function Wrapper({ setInput }) {
    return (<div className="text-center">
        <Header />
        <Input setInput={setInput} />
        <Container >

        </Container>
    </div>
    )
}

export default Wrapper;