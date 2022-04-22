import './contacts.css'
import { Link, animateScroll as scroll } from "react-scroll";

//Images

import Status from '../../images/Group 1.png'
import Config from '../../images/Group 2.png'
import Mais from '../../images/plus.png'
import Perfil from '../../images/Ellipse 1.png'

import Lupa from '../../images/Group.png'
import { ContactListItem } from '../ContactListItem'
import { useState, useEffect } from 'react'

export const Contacts = () => {

    const el = e => { return document.getElementById(e)}

    // const changeIcon = () => {
    //     el('searchSVGArrow').classList.remove('iconSVGStart')
    //     el('searchSVGArrow').classList.add('iconSVGSEnd')
    // }
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        async function fetchfakeUserJSON() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const fakeUser = await response.json();
            return fakeUser;
          }
          fetchfakeUserJSON().then(fakeUser => {
            setUsers(fakeUser);
            return users
        });
    }, [])
    

    return(

        

        <div className="lateral-menu">

            <div className="user-info">
                <div className="user-info-photo">
                    <img src={Perfil} alt="" />
                </div>
                <div className="user-info-options">
                    <svg version="1.1" id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6" x="0" y="0" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>
                    <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
                    <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                </div>
            </div>

            <div className="desktop">
                
                <svg viewBox="0 0 48 48" width="48" height="48"><path fill="currentColor" d="M24.154 2C11.919 2 2 11.924 2 24.165S11.919 46.33 24.154 46.33s22.154-9.924 22.154-22.165S36.389 2 24.154 2zm-.744 15.428v-.618c0-.706.618-1.324 1.324-1.324s1.323.618 1.323 1.324v.618c2.559.618 4.412 2.823 4.412 5.559v3.176l-8.294-8.294a5.056 5.056 0 0 1 1.235-.441zm1.323 15.706a1.77 1.77 0 0 1-1.765-1.765h3.529a1.768 1.768 0 0 1-1.764 1.765zm7.236-.883-1.765-1.765H17.233v-.882l1.765-1.765v-4.853a5.56 5.56 0 0 1 .794-2.912l-2.559-2.559 1.147-1.147 14.735 14.736-1.146 1.147z"></path></svg>
                <span>
                    <p>Get notified of new messages</p>
                    <p className="fontSmall">Turn on desktop notifications {'>'}</p>
                </span>
            </div>

            <div className="search-contact">
                <div className="searchContent">
                   
                    <svg id="searchSVGLupa" viewBox="0 0 24 24" width="24" height="24" className="iconSVGStart"><path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
                    <input type="text"  placeholder='Procurar'/>
                </div>
            </div>

            <div className='mobileInfo'>

                <p>Edit</p>
                <b id='mbTxt' className='chatsMobileText'>Chats</b>
                <i className="fas fa-edit"></i>              

            </div>

            <div id='contList' className="contacts-list">
                
                <div className="contact-list-mobile">
                    <h1>Chats</h1>

                    <div className="searchContent">

                        <svg id="searchSVGLupa" viewBox="0 0 24 24" width="24" height="24" className="iconSVGStart"><path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
                        <input className='inputMobile'  type="text"  placeholder='Procurar'/>
                    </div>
                </div>

                {users.map(e => { return <ContactListItem info={e} key={e.id} /> })}

            </div>

            <div className="menuMobile">

                <ul>
                    <li>
                        <svg version="1.1" id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6" x="0" y="0" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>
                        <span>Status</span>
                    </li>
                    <li><i className="fas fa-phone-alt"></i><span>Calls</span></li>
                    <li><i className="fas fa-camera"></i><span>Camera</span></li>
                    <li><i className="fas fa-comments"></i><span>Chats</span></li>
                    <li><i className="fas fa-cog"></i><span>Settings</span></li>
                </ul>

            </div>

        </div>



    );

}