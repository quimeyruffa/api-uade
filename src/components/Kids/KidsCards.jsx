import React from "react";
import styled from "styled-components";
import { themeColor, hoverEffect } from "../../utils";
import {
  MoreHoriz
} from "@material-ui/icons";
import Alergias from './alergias/Alergias.jsx';
import Enfermedades from './enfermedades/Enfermedades.jsx';
function KidsCards({ name, bloodType, birth, id, alergias, enfermedades }) {
  const [open, setOpen] = React.useState(false);
  const [openE, setOpenE] = React.useState(false);

  return (
    <EarningsCard key={id}>
      <CardContent>
        <br /><br />
        <Alergias open={open} setOpen={setOpen} alergias={enfermedades}/>
        <Enfermedades open={openE} setOpen={setOpenE} enfermedades={alergias}/>
        <EarningsText>{name}</EarningsText>
        <Earning>Nacimiento: {birth}</Earning>
        <Earning>Tipo de sangre: {bloodType}</Earning>
        <EarningsIncrease  onClick={()=>setOpen(!open)} >Alergias <MoreHoriz/></EarningsIncrease>
        <EarningsIncrease   onClick={()=>setOpenE(!openE)}>Enfermedades <MoreHoriz/></EarningsIncrease>
        <EarningsIncrease
          onClick={() => {
            localStorage.setItem('idChild', id)
            window.location.href = '/controls'
          }}
        >Controles pedriaticos <MoreHoriz /></EarningsIncrease>
        <EarningsIncrease onClick={() => {
          localStorage.setItem('idChild', id)
          window.location.href = '/calendar'
        }}> Calendario de vacunacion <MoreHoriz /></EarningsIncrease>
      </CardContent>
    </EarningsCard>
  );
}

const EarningsCard = styled.div`
  margin-right: 20px;
  width: 14rem;
  background-color: ${themeColor};
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

const EarningsText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;

const Earning = styled.h2`
  text-align: center;
`;

const EarningsIncrease = styled.h5`
  cursor:pointer;
  margin-bottom:10px;
  justify-content: center;
  align-items: center;
  display:flex;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.8rem;
  border-radius: 2rem;
`;

export default KidsCards;