import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import {getAllHastalar, deleteHasta} from "./HastaApiService";

function ListHastaComponent() {

    const [hastalar, setHastalar] = useState([]);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        refreshHastalar();
    }, []);

    function refreshHastalar() {
        getAllHastalar()
            .then((response) => {
                setHastalar(response.data);
            })
            .catch((error) => console.log(error));
    }

    function onDeleteHasta(id) {
        console.log('clicked ' + id);
        deleteHasta(id)
            .then(() => {
                setMessage(`Hasta Bilgileri Silindi!`);
                refreshHastalar();
            })
            .catch((error) => console.log(error));
    }


    function updateHasta(id) {
        console.log('clicked ' + id)
        navigate(`/hasta/${id}`)
    }

    function addNewTodo() {
        navigate(`/hasta/-1`)
    }

    return (
        <div className="container">
            <h1>Hasta Bilgileri</h1>

            {message && <div className="alert alert-warning">{message}</div>}

            <div>
                <table className="table">
                    <thead>
                    <tr>

                        <th>İsim</th>
                        <th>Soyad</th>
                        <th>Doğum Tarihi</th>
                        <th>Sil</th>
                        <th>Güncelle</th>

                    </tr>
                    </thead>
                    <tbody>
                    {hastalar.map((hasta) => (
                        <tr key={hasta.id}>
                            <td>{hasta.name}</td>
                            <td>{hasta.lastname}</td>
                            <td>{hasta.birth}</td>
                            <td> <button className="btn btn-warning"
                                         onClick={() => onDeleteHasta(hasta.id)}>Sil</button> </td>
                            <td> <button className="btn btn-success"
                                         onClick={() => updateHasta(hasta.id)}>Güncelle</button> </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewTodo}>Yeni Hasta Ekle</div>
        </div>
    );
}

export default ListHastaComponent;
