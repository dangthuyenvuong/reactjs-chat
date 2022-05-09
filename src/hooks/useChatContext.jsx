import { createContext, useContext, useEffect, useRef, useState } from "react";
import { socket } from '../utils/socket'

const Context = createContext({})

export const ChatProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [userSelected, setUserSelected] = useState()
    const [id, setId] = useState()
    const [messages, setMessages] = useState([])

    useEffect(() => {
        socket.on('socketId', (id) => {
            setId(id)
        })
    }, [])


    useEffect(() => {
        const handleList = (data) => {
            setUsers(data)
            console.log('handleList', data)
        }
        socket.on('listuser', handleList)

        const handleNewUser = (user) => {
            console.log('handleNewUser', user)
            setUsers([...users, user])
        }
        socket.on('newuser', handleNewUser)


        const handleRemoveUser = (socketId) => {
            setUsers(users.filter(e => e.socketId !== socketId))
        }
        socket.on('removeuser', handleRemoveUser)


        return () => {
            socket.off('listuser', handleList)
            socket.off('newuser', handleNewUser)
            socket.off('removeuser', handleRemoveUser)
        }
    }, [users])

    useEffect(() => {
        const handleUpdateMessage = (message, senderId) => {

            let f = messages.find(e => e.users.find(e1 => e1 === senderId))
            if (!f) {
                f = message
                messages.push(f)
            }

            f.messages = message.messages
            setMessages([...messages])

        }
        socket.on('update-message', handleUpdateMessage)

        return () => {
            socket.off('update-message', handleUpdateMessage)
        }
    }, [messages])



    return <Context.Provider value={{ users, setUserSelected, userSelected, messages, id }}>{children}</Context.Provider>
}

export const useUsers = () => useContext(Context).users

export const useSocket = () => useContext(Context)
export const useId = () => useContext(Context).id

export const useUserSelected = () => useContext(Context).userSelected

export const useMessageSelected = (userId) => {
    const { messages } = useContext(Context)
    return messages.find(e => e.users.find(e1 => e1 === userId))
}