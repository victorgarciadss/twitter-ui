import styled from "styled-components";

export const SidebarStyle = styled.aside`
    
        padding: 1.5rem 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    

    .logo{
        width: 2rem;
        height: 2rem;
    }

    .new-tweet{
        background-color: var(--twitter-blue);
        border-radius: 9999px;
        padding: 1rem;
        display: flex;
        justify-content: center;
        width: 100%;
        color: #fff;
        font-size: 1.25rem;
        font-weight: 900;
        border: none;
    }

    .new-tweet svg{
        width: 1.5rem;
        height: 1.5rem;
        display: none;
        
    }

    .new-tweet:hover{
        filter: brightness(0.9);
    }
    
    .main-navigation{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .main-navigation a{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        text-decoration: none;
    }

    .main-navigation a svg{
        width: 1.5rem;
        height: 1.5rem;
    }

    .main-navigation a.active{
        color: var(--twitter-blue);
    }

    @media (max-width: 780px){
        padding: 1.5rem 0.75rem;
        align-items: center;

        .main-navigation a span{
            display: none;
        }


        .new-tweet span{
            display: none;
        }
        
        .new-tweet svg{
            display: block;
        }
    }
`