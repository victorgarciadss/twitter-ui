import { Sparkle } from 'phosphor-react'
import { HeaderTimelineStyle } from '../styles/HeaderTimelineStyle'

type HeaderProps = {
    title: string
}

export const HeaderTimeline = (props: HeaderProps) => {
    return (
        <HeaderTimelineStyle>
            <div className='timeline-header'>
                {props.title}
                <Sparkle />
            </div>
        </HeaderTimelineStyle>

    )
}