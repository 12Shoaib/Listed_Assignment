import { useState, useEffect } from 'react'
import dashboard from './dashboard.module.css'
import DashboardLeftSection from '../../Components/DashboardLeftSection/DashboardLeftSection'
import DashboardHeader from '../../Components/Dashboardheader/DashboardHeader'
import DashboardCard from '../../Components/DashboardCard/DashboardCard'
import ActivityCard from '../../Components/ActivityCard/ActivityCard'
import TopProducts from '../../Components/TopProducts/TopProducts'

const Dashboard = () => {
    const [meetingData, setMeetingData] = useState('')

    useEffect(() => {
        getTodaysSchedule()
    }, [])

    const getTodaysSchedule = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=2')
            if (!response.ok) {
                throw new Error("Failed to load the api")
            }
            const data = await response.json()
            setMeetingData(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={dashboard.container}>
            <div className={dashboard.section_one}>
                <DashboardLeftSection />
            </div>
            <div className={dashboard.section_two}>
                <DashboardHeader />
                <DashboardCard />
                <ActivityCard />
                <TopProducts meetingData={meetingData} />
            </div>
        </div>
    )
}

export default Dashboard