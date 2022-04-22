import './contactlistitem.css'
import recebidoLido from '../../images/silver tick.png'
import recebidoNaoLido from '../../images/Group (1).png'


export const ContactListItem = props => {

    return(

        <div className="contactItem-container">

            <div className="photo-contact">
                <div className="photoLimiter">
                    <b>{props.info.name[0]}</b>
                </div>
            </div>

            <div className="lastMessage-contact">

                <div className="message">

                    <div className="nameContact">
                        <p>{props.info.name}</p>
                    </div>

                    <div className="messageContact">
                        <img src={props.info.id % 2 === 0 ? recebidoNaoLido : recebidoLido} alt="" /><p>{props.info.website}</p>
                    </div>

                </div>

                <div className="timestamp-contact">
                    { props.info.id > 9 ? props.info.id = 9 : <p>1{props.info.id}:4{props.info.id}</p>}
                </div>

            </div>
        </div>

    );

}