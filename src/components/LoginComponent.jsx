import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css';



function LoginComponent() {

    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if(username==='ceren' && password==='1234'){
            console.log('Giriş Başarılı')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            console.log('Giriş Başarısız')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            <h1>Kullanıcı Giriş</h1>
            {showSuccessMessage && <div className="successMessage">Giriş Başarılı</div>}
            {showErrorMessage && <div className="errorMessage">Giriş Başarısız</div>}
            <div className="LoginForm">
                <div>
                    <label>Kullanıcı Adı:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Şifre:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Giriş</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent