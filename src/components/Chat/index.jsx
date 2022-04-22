import './chat.css'

import fundoChat from '../../images/Screenshot 2021-09-10 143545 1.png'

export const Chat = () => {

    return(

        <div className="chat-container">

            <div className="chat-noChat">
                <img src={fundoChat} alt="" />
                <div className="fundoTexto">
                    <h1>Keep your phone connected</h1>
                    <p>WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</p>
                </div>
            </div>
            

        </div>

    );

}