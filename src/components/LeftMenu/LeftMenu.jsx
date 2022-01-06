import './LeftMenu.css'
import InboxListItem from '../InboxListItem/InboxListItem'
import StarredListItem from '../StarredListItem/StarredListItem'
import HideReadListItem from '../HideReadListItem/HideReadListItem'

function LeftMenu(props) {
    const unreadEmails = props.emails.filter(email => !email.read)
    const starredEmails = props.emails.filter(email => email.starred)
    return <nav className="left-menu">
        <ul className="inbox-list">

            <InboxListItem
                currentTab={props.currentTab}
                setCurrentTab={props.setCurrentTab}
                unreadEmails={unreadEmails}
            />

            <StarredListItem
                currentTab={props.currentTab}
                setCurrentTab={props.setCurrentTab}
                starredEmails={starredEmails}
            />

            <HideReadListItem
                hideRead={props.hideRead}
                setHideRead={props.setHideRead}
            />
        </ul>
    </nav>
}
export default LeftMenu