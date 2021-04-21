import React from 'react'

export default props => {
    const {min,max} = props

    const aleatorio = getRndInteger(min, max);
    return (
        <div>
            <h2>Valor Aleatório </h2>
            <p><strong>Valor Mínimo: </strong>{min}</p>
            <p><strong>Valor Máximo: </strong>{max}</p>
            <p><strong>Valor Escolhido: </strong>{aleatorio}</p>
        </div>
    )
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}