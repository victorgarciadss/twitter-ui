import styled from 'styled-components';

export const TweetStyle = styled.div`
    

    .link-tweet{
        padding: 1.5rem 1.25rem;
        display: grid;
        grid-template-columns: 3rem 1fr;
        gap: 0.5rem;
        border-bottom: 1px solid #ebeef0;
        text-decoration: none;
    }
    
    .link-tweet img{
        width: 3rem;
        height: 3rem;
        border-radius: 9999px;
    }

    .tweet-content{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .tweet-content .tweet-content-header{
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }

    .tweet-content .tweet-content-header span{
        font-size: 0.875rem;
        color: #89a2b8;
    }

    .tweet-content p{
        line-height: 1.25;
    }

    .tweet-content .tweet-content-footer{
        display: flex;
        align-items: center;
        gap: 3rem;
        margin-top: 0.5rem;
    }

    .tweet-content .tweet-content-footer button{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background-color: transparent;
        border: none;
        font-size: 0.875rem;
        color: #89a2b8;  
    }

    .tweet-content .tweet-content-footer button svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`