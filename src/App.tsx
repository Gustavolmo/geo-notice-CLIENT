import Header from "./02-children/Header"
import MapSection from "./02-children/MapSection"
import ChatSection from "./02-children/Chat/ChatSection"
import { useState } from "react"
// import { useState } from "react"

let selection: string | null = 'centralen'
let title: string | null = 'Centralen'
if (localStorage.getItem('savedSelection')){
  selection = localStorage.getItem('savedSelection')
  title = localStorage.getItem('savedTitle')
}

function App() {
  const [chatId, setChatId] = useState(selection)
  const [areaTitle, setAreaTitle] = useState(title)
  
  const setCurrentChatId = (newChatId: string, newAreaTitle: string) => {
    localStorage.setItem('savedSelection', newChatId)
    localStorage.setItem('savedTitle', newAreaTitle)
    setChatId(newChatId)
    setAreaTitle(newAreaTitle)
    return chatId
  }

  return (
    <>
      <Header />
      <main className="main">
        <MapSection setCurrentChatId={setCurrentChatId} />
        <ChatSection chatId={chatId} areaTitle={areaTitle}/>
      </main>
    </>
  )
}

export default App
