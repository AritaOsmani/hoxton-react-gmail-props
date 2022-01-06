import Email from '../Email/Email'
import './Emails.css'

function Emails(props) {

    const toggleStar = targetEmail => {
        const updatedEmails = emails =>
            emails.map(email =>
                email.id === targetEmail.id
                    ? { ...email, starred: !email.starred }
                    : email
            )
        props.setEmails(updatedEmails)
    }

    const toggleRead = targetEmail => {
        const updatedEmails = emails =>
            emails.map(email =>
                email.id === targetEmail.id ? { ...email, read: !email.read } : email
            )
        props.setEmails(updatedEmails)
    }

    return <main className="emails">
        <ul>
            {props.filteredEmails.map((email, index) => (
                <Email
                    email={email}
                    toggleRead={toggleRead}
                    toggleStar={toggleStar}

                />
            ))}
        </ul>

    </main>
}
export default Emails