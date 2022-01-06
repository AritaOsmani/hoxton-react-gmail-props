import { useState } from 'react'

import initialEmails from './data/emails'

import './App.css'
import Header from './components/Header/Header'
import LeftMenu from './components/LeftMenu/LeftMenu'
import Emails from './components/Emails/Emails'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [search, setSearch] = useState('');

  function getSearchedEmails(emails) {
    return emails.filter(email => email.title.includes(search))
  }


  function emailsToDisplay() {
    let filteredEmails = emails

    if (hideRead) filteredEmails = getReadEmails(filteredEmails)

    if (currentTab === 'starred')
      filteredEmails = getStarredEmails(filteredEmails)

    if (search !== '') {
      filteredEmails = getSearchedEmails(filteredEmails);
    }

    return filteredEmails;
  }


  return (
    <div className="app">
      <Header setSearch={setSearch} />
      <LeftMenu
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        emails={emails}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      <Emails
        setEmails={setEmails}
        filteredEmails={emailsToDisplay()}
      />
    </div>
  )
}

export default App
