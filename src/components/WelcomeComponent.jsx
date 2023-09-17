import {useParams} from 'react-router-dom'

function WelcomeComponent() {

    const {username } = useParams()

    console.log(username)

    return (
        <div className="WelcomeComponent">
            <h1>Hoşgeldin {username}</h1>

        </div>
    )
}

export default WelcomeComponent