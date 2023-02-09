import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/Sidebar"
import { LayoutStyle } from "../styles/LayoutStyle"

export const Default = () => {
    return (
        <LayoutStyle>
            <div className='layout-container'>

                <Sidebar />

                <div className='content'>
                    <Outlet />
                </div>

            </div>
        </LayoutStyle>
    )
}