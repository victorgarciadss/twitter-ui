import styled from 'styled-components'

export const LayoutStyle = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    
    .layout-container{
        display: grid;
        grid-template-columns: 300px 1fr;
    }

    .sidebar{
        padding: 1.5rem 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .sidebar .logo{
        width: 2rem;
        height: 2rem;
    }

    .sidebar .new-tweet{
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

    .sidebar .new-tweet:hover{
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

    .content{
        border-left: 1px solid #ebeef0;
        border-right: 1px solid #ebeef0;
    }
`