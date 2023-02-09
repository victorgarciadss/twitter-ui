import styled from 'styled-components';

export const StatusStyle = styled.main`
    
    .answer-tweet-form{
        padding: 1.5rem 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-bottom: 1px solid #ebeef0;
    }

    .answer-tweet-form label{
        flex: 1;
        height: 80px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .answer-tweet-form label img{
        width: 3rem;
        height: 3rem;
        border-radius: 9999px;
    }

    .answer-tweet-form label textarea{
        flex: 1;
        border: none;
        width: 100%;
        font-size: 1.25rem;
        font-weight: 500;
        margin-top: 1.25rem;
        resize: none;

    }

    .answer-tweet-form label textarea:focus{
        outline: none;
    }

    .answer-tweet-form label textarea::placeholder{
        color: #5b7083;
    }

    .answer-tweet-form button[type=submit]{
        margin-left: auto;
        background-color: var(--twitter-blue);
        border-radius: 9999px;
        padding: 0.5rem 1rem;
        color: #fff;
        font-size: 1rem;
        font-weight: 900;
        border: none;
    }

    .answer-tweet-form button[type=submit]:hover{
        filter: brightness(0.9);
    }

    .separator{
        background-color: #f7f9fa;
        border-top: 1px solid #ebeef0;
        border-bottom: 1px solid #ebeef0;
        height: 0.5rem;
    }
`