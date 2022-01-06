import Select from '../Select/Select'
import Sender from '../Sender/Sender'
import Star from '../Star/Star'
import Title from '../Title/Title'
import './Email.css'

function Email(props) {
    return <li
        key={props.index}
        className={`email ${props.email.read ? 'read' : 'unread'}`}
    >
        <Select
            email={props.email}
            toggleRead={props.toggleRead}
        />
        <Star
            email={props.email}
            toggleStar={props.toggleStar}
        />
        <Sender
            email={props.email}
        />
        <Title
            email={props.email}
        />
    </li>
}
export default Email