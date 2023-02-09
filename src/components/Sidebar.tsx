import twitterLogo from '../assets/logo-twitter.svg';

import {
    Bell,
    BookmarkSimple,
    DotsThreeCircle,
    Envelope,
    FileText,
    Hash,
    House,
    User
} from 'phosphor-react';

import { SidebarStyle } from '../styles/SidebarStyle';
import { Link, NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <SidebarStyle>
            
                <img className='logo' src={twitterLogo} alt="Logo" />

                <nav className='main-navigation'>
                    <NavLink  to="/">
                        <House weight='fill' />
                        Página inicial
                    </NavLink>

                    <a href="">
                        <Hash />
                        Explorar
                    </a>

                    <a href="">
                        <Bell />
                        Notificações
                    </a>

                    <a href="">
                        <Envelope />
                        Mensagens
                    </a>

                    <a href="">
                        <BookmarkSimple />
                        Itens Salvos
                    </a>

                    <a href="">
                        <FileText />
                        Listas
                    </a>

                    <a href="">
                        <User />
                        Perfil
                    </a>

                    <a href="">
                        <DotsThreeCircle />
                        Mais
                    </a>
                </nav>

                <button className='new-tweet' type='button'>
                    Tweetar
                </button>
            
        </SidebarStyle>
    )
}