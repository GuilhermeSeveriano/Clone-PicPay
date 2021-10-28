import React from 'react'
import { Container } from './styled.js'

export default function StoreButton(props) {

    const {
        caminho,
        nome
    } = props
    
    return (
        <Container>
            <img src={caminho} alt={nome} />
        </Container>
    )
}
