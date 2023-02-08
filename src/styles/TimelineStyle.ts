import styled from 'styled-components';

export const TimelineStyle = styled.main`
    

    .new-tweet-form{
        padding: 1.5rem 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .new-tweet-form label{
        height: 80px;
        display: flex;
        gap: 0.5rem;
    }

    .new-tweet-form label img{
        width: 3rem;
        height: 3rem;
        border-radius: 9999px;
    }

    .new-tweet-form label textarea{
        flex: 1;
        border: none;
        font-size: 1.25rem;
        font-weight: 500;
        margin-top: 0.5rem;
        resize: none;
    }

    .new-tweet-form label textarea:focus{
        outline: none;
    }

    .new-tweet-form label textarea::placeholder{
        color: #5b7083;
    }

    .new-tweet-form button[type=submit]{
        margin-left: auto;
        background-color: var(--twitter-blue);
        border-radius: 9999px;
        padding: 0.5rem 1rem;
        color: #fff;
        font-size: 1rem;
        font-weight: 900;
        border: none;
    }

    .new-tweet-form button[type=submit]:hover{
        filter: brightness(0.9);
    }

    .separator{
        background-color: #f7f9fa;
        border-top: 1px solid #ebeef0;
        border-bottom: 1px solid #ebeef0;
        height: 0.5rem;
    }
`