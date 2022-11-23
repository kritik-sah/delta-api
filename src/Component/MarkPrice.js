import React, { useEffect, useState } from 'react'
// import {io} from "socket.io-client";

const MarkPrice = (props) => {
    const [MarkPrice, setMarkPrice] = useState("")
    const ENDPOINT = "wss://production-esocket.delta.exchange";
    
    useEffect(() => {
        const socket = new WebSocket(ENDPOINT);

        const apiCall = {
            "type": "subscribe",
            "payload": {
                "channels": [
                    {
                        "name": "v2/ticker",
                        "symbols": [
                            `${props.symbol}`
                        ]
                    }
                ]
            }
        }

        socket.onopen = function(event) {
            console.log('Connection established');
        }
        
        try{
        socket.onopen = (event) => {
            socket.send(JSON.stringify(apiCall));
        };

        socket.onmessage = function (event) {
        
            const json = JSON.parse(event.data);
        
            setMarkPrice(json.mark_price)
        };
        }catch(e){
            console.log("Error", e)
        }

        
    
    }, [ENDPOINT, props]);
   
  return (
    <>{MarkPrice ? MarkPrice : 'loading'}</>
  )
}

export default MarkPrice