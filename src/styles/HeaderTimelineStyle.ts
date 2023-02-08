import styled from "styled-components";

export const HeaderTimelineStyle = styled.div`
    .timeline-header{
        padding: 1.5rem 1.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.25rem;
        font-weight: 700;
        border-bottom: 1px solid #ebeef0;
    }

    .timeline-header svg{
        width: 1.5rem;
        height: 1.25rem;
        color: var(--twitter-blue);
    }
`