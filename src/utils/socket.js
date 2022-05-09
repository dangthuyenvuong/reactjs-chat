import { io } from 'socket.io-client'

export const socket = io('http://localhost:8888')
const urlSearchParam = new URLSearchParams(window.location.search)
const name = urlSearchParam.get('name')
if (name) {
    socket.emit('userlogin', {
        name,
        avatar: `/img/${Math.round(Math.random() * 7) + 1}.png`
    })

    // socket.on('listuser', (users) => {
    //     console.log('list user 1', users)
    // })


    // socket.on('listuser', (users) => {
    //     console.log('list user 2', users)
    // })
}

