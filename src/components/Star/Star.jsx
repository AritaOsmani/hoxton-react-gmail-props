import './Star.css'

function Star(props) {
    return <div className="star">
        <input
            className="star-checkbox"
            type="checkbox"
            checked={props.email.starred}
            onChange={() => props.toggleStar(props.email)}
        />
    </div>
}
export default Star