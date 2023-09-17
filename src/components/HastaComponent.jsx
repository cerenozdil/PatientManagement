import { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {retrieveHastaApi, updateHasta, createHasta} from "./HastaApiService";

export default function HastaComponent() {

    const {id} = useParams()

    const[name, setName] = useState('')
    const[lastname, setLastname] = useState('')
    const[birth, setBirth] = useState('')


    const navigate = useNavigate()


    useEffect(
        () => retrieveHastalar(),
        [id]
    )

    function retrieveHastalar() {

        if (id != -1) {

            retrieveHastaApi(id)
                .then(response => {
                    setName(response.data.name)
                    setLastname(response.data.lastname)
                    setBirth(response.data.birth)
                })
                .catch(error => console.log(error))
        }
    }
    function onSubmit(values) {
        console.log(values)
        const hasta = {
            id: id,
            name: values.name,
            lastname: values.lastname,
            birth: values.birth,

        }

        console.log(hasta)

        if (id == -1) {
            createHasta(hasta)
                .then(response => {
                    navigate('/hasta')
                })
                .catch(error => console.log(error))
        } else {

            updateHasta(id, hasta)
                .then(response => {
                    navigate('/hasta')
                })
                .catch(error => console.log(error))
        }
    }

    function validate(values) {
        let errors = {
            // description: 'Enter a valid description',
            // targetDate: 'Enter a valid target date'
        }

        if(values.name.length<3) {
            errors.name = 'En Az 3 Karakter Giriniz!'
        }

        if(values.lastname.length<2) {
            errors.lastname = 'En Az 2 Karakter Giriniz!'
        }

        if(values.birth == null) {
            errors.birth = 'Doğum Tarihi Giriniz!'
        }

        console.log(values)
        return errors
    }

    return (
        <div className="container">
            <h1>Hasta Bilgileri </h1>
            <div>
                <Formik initialValues={ { name, lastname, birth } }
                        enableReinitialize = {true}
                        onSubmit = {onSubmit}
                        validate = {validate}
                        validateOnChange = {false}
                        validateOnBlur = {false}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className = "alert alert-warning"
                                />

                                <ErrorMessage
                                    name="lastname"
                                    component="div"
                                    className = "alert alert-warning"
                                />

                                <ErrorMessage
                                    name="birth"
                                    component="div"
                                    className = "alert alert-warning"
                                />

                                <fieldset className="form-group">
                                    <label>İsim</label>
                                    <Field type="text" className="form-control" name="name" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Soyad</label>
                                    <Field type="text" className="form-control" name="lastname"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Doğum Tarihi</label>
                                    <Field type="date" className="form-control" name="birth"/>
                                </fieldset>
                                <div>
                                    <button className="btn btn-success m-5" type="submit">Kaydet</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>

        </div>
    )
}