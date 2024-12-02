import { io } from 'socket.io-client'
import { SERVER_URL } from '@env';

console.log('Connecting', SERVER_URL)
const socket = io(SERVER_URL);

export default socket;