import {Socket} from "phoenix"

const socket = new Socket("ws://localhost:4000/socket", {
    params: {user: Math.random().toString(36).substring(7)}
})

socket.connect()

export default socket
