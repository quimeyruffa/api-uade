import React from 'react'
import styled from 'styled-components';
export const Formulario = ({nombre_vacuna}) => {
    return (
        <div>
            <span>Fecha de vacunacion</span>
            <input type="date" />
            <span>Lugar de vacunacion</span>
            <input type="text" />
        </div>
    )
}
