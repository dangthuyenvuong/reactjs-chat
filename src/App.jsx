import { ChatProvider } from './hooks/useChatContext'
import Home from './pages'
function App() {
  return (
    <ChatProvider>
      <Home />
    </ChatProvider>
  )
}

export default App
