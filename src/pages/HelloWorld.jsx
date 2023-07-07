import React, { useState } from "react";

const HelloWorld = () => {
    const [message, setMessage] = useState('');
    const [visible, setVisible] = useState(false);

    const processMessage = () => {
        setVisible(message === 'hello');
        setMessage('');
    }

    return (
        <div>
            <input
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                id="message" 
                type="text" 
            />
            <button 
                onClick={processMessage}
                id="send-btn"
            >
                Send
            </button>
            { visible && <h1 id="answer" >{`HELLO SIR! :)`}</h1> }
        </div>
    );
};

export default HelloWorld;