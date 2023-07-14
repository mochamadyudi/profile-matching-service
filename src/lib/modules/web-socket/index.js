import websocket from 'ws';
import {hashUuid} from "@yid/helpers";
import {parse} from "path";

export default class WebSocket{
	/**
	 *
	 * @param {Object} props
	 * @param {Object} props.server
	 */
	constructor(props = {}) {
		this.server = props?.server
		this.wss = new websocket.Server({ server:this.server})
		this._instance();
	}
	
	_instance(){
		const connectedClients = new Map();
		let wss = this.wss
		
		
		wss.on('open', function open(ws){
			console.log('connected');
			ws.send(Date.now());
		})
		
		
		wss.on('connection', (ws,req)=> {
			const userId = req.headers['sec-websocket-key'] ?? hashUuid();
			connectedClients.set(userId, ws);
			// ws.send('WELCOME NEW CLIENT')
			// this.SEND(ws, {
			// 	type:'NEW_CLIENT',
			// 	userId
			// })
			//
			
			
			
			ws.on('message', (payload,isBinary)=> {
				payload = Buffer.from(payload);
				payload = `${payload}`.toString()
				if(payload && typeof(payload) !== null && payload !== ''){
					try{
						payload = JSON.parse(payload);
					}catch(err){

					}
				}
				
				wss.clients.forEach((client)=> {
					if(client.readyState === websocket.OPEN) {
						this.SEND(ws,payload)
					}
					// 	if(connectedClients.get(userId)){
					// 		Reflect.set(buf,'id',userId)
					// 	}
					//
					// 	if(buf?.type !== 'INITIAL'){
					// 		this.SEND(ws,{
					// 			...buf,
					// 			message:'TESTING'
					// 		})
					// 	}else{
					// 		this.SEND(ws, {
					// 			type:'INITIAL',
					// 			...buf
					// 		},isBinary)
					// 	}
					// }
				})
			});
			
			
			ws.on('close',()=> {
				console.log('Client disconnected')
			})
		})
		
	}
	
	
	
	SEND(ws,payload,...args){
		let field = {
			type:"EMIT_NEW_CLIENT",
			...payload
		}
		ws.send(JSON.stringify(field),args);
	}
}