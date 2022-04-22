import { Chat } from '../../components/Chat';
import { Contacts } from '../../components/Contacts';
import './home.css'

export const Home = () => {
    return(

        <div className="main-container">
            <Contacts/>
            <Chat/>
        </div>

    );
}