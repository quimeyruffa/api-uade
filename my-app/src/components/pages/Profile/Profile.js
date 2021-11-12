import './profile.css'
import Foto from '../../photos/marta.jpg'
import Foto1 from '../../photos/luca.jpg'
import { useState, useEffect } from 'react'
import NewChild from '../../Modals/NewChild'
const Profile = ({ token, email }) => {
    const [openModal, setOpenModal] = useState(false);
    const [user, setUser] = useState([]);
    const [hijos, setHijos] = useState([]);
    useEffect(() => {
        const api = async () => await fetch('http://localhost:4000/api/users/userByMail', {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify
                ({ email: email })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data.docs);
                setUser(data.data.docs);
            })
        api();
        const child = async () => await fetch('http://localhost:4000/api/users/getChild', {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify
                ({ token: email })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setHijos(data.searchedChild)

            })

        child();
    }, [])

    return (
        <div className="container-profile">

            {openModal && <NewChild setOpenModal={setOpenModal} openModal={openModal} token={token} />}
            <div className="profile-parent">
                {user && user.map((item) => {
                    return (
                        <div className="container" key={item.email}>

                            <img src={Foto} alt="marta navarro" />
                            <span>{item.name} {item.lastname}</span>
                            <div>
                                <label >DNI </label>
                                <span>{item.dni}</span>
                            </div>
                            <div>
                                <label >Mail </label>
                                <span>{item.email}</span>
                            </div>
                            <div>
                                <label >Telefono </label>
                                <span>{item.telefono}</span>
                            </div>
                        </div>)
                })}
            </div>
            <div className="profile-sons">
                <div className="header">
                    Niños

                    <button onClick={() => setOpenModal(!openModal)}> + </button>
                </div>
                <div className="container-sons-info">
                    {hijos && hijos.map((hijo) => {
                        return (
                            <div className="card-sons">
                                <img src={Foto1} alt="Luca" />
                                <span>{hijo.name}</span>
                                <div>
                                    <label >Fecha de nacimiento </label>
                                    <span>{hijo.birth}</span>
                                </div>
                                <div>
                                    <label >Grupo Sanguineo </label>
                                    <span>{hijo.bloodType}</span>
                                </div>
                                <div className='button'>
                                    <label >Alergias </label>
                                    <button>...</button>
                                </div>
                                <div className='button'>
                                    <label >Enfermedades Cronicas </label>
                                    <button>...</button>
                                </div>
                                <div className='button'>
                                    <label >Calendario de Vacunacion </label>
                                    <button onClick={() =>{
                                        localStorage.setItem('idChild', hijo._id)
                                        window.location.href ='./calendario'
                                    }}>...</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default Profile;