import styled from 'styled-components'

export const LayoutStyle = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    min-height: 100vh;
    
    .layout-container{
        display: grid;
        grid-template-columns: 300px 1fr;
    }

    

    .content{
        border-left: 1px solid #ebeef0;
        border-right: 1px solid #ebeef0;
    }

    @media (max-width: 780px){
        .layout-container{
            grid-template-columns: 80px 1fr;
        }
    }
`