import React from 'react'
import { Container } from './styled'

export default function RedeSocial(props) {

    const { rede, nome } = props
    
    return (
        <Container>
            <img src={rede} alt={nome} />
        </Container>
    )
}
