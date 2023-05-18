import { FiPieChart, FiSettings } from 'react-icons/fi'
import { BsTags } from 'react-icons/bs'
import { TbCalendarTime } from 'react-icons/tb'
import { FaRegUserCircle } from 'react-icons/fa'
import dashboardleftsection from './dashboardleftsection.module.css'

const data = [
    { icon: <FiPieChart className={dashboardleftsection.icon} />, name: 'Dashboard' },
    { icon: <BsTags className={dashboardleftsection.icon} />, name: 'Transactions' },
    { icon: <TbCalendarTime className={dashboardleftsection.icon} />, name: 'Schedules' },
    { icon: <FaRegUserCircle className={dashboardleftsection.icon} />, name: 'Users' },
    { icon: <FiSettings className={dashboardleftsection.icon} />, name: 'Settings' }
]

const DashboardLeftSection = () => {
    return (
        <div className={dashboardleftsection.main_component}>
            <div className={dashboardleftsection.container}>
                <h2 className={dashboardleftsection.tagLine}>Board.</h2>
                <div className={dashboardleftsection.bottom_wrapper}>
                    <div className={dashboardleftsection.menu_wrapper}>
                        {
                            data.map((element) => <p className={dashboardleftsection.menu_options}>{element.icon} {element.name}</p>)
                        }
                    </div>
                    <div className={dashboardleftsection.footer}>
                        <p className={dashboardleftsection.menu_options_bottom}>Help</p>
                        <p className={dashboardleftsection.menu_options_bottom}>Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashboardLeftSection