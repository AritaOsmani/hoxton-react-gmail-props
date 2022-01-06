function Select(props) {
    return <div className="select">
        <input
            className="select-checkbox"
            type="checkbox"
            checked={props.email.read}
            onChange={() => props.toggleRead(props.email)}
        />
    </div>
}
export default Select