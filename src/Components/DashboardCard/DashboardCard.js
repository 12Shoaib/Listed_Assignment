import { BsTags } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { RiGroupLine } from 'react-icons/ri'
import { TbCashBanknote } from 'react-icons/tb'
import dashboardcard from './dashboardcard.module.css'


const DashboardCard = () => {
    return (
        <div className={dashboardcard.container}>
            <div className={dashboardcard.card1}>
                <TbCashBanknote className={dashboardcard.logo} />
                <div className={dashboardcard.content_wrapper}>
                    <p className={dashboardcard.content}>Total Revenues</p>
                    <p className={dashboardcard.number}>$3,456,678</p></div>
            </div>
            <div className={dashboardcard.card2}>
                <BsTags className={dashboardcard.logo} />
                <div className={dashboardcard.content_wrapper}>
                    <p className={dashboardcard.content}>Total Transactions</p>
                    <p className={dashboardcard.number}>9,322</p></div>
            </div>
            <div className={dashboardcard.card3}>
                <AiOutlineLike className={dashboardcard.logo} />
                <div className={dashboardcard.content_wrapper}>
                    <p className={dashboardcard.content}>Total Likes</p>
                    <p className={dashboardcard.number}>9,090</p></div>
            </div>
            <div className={dashboardcard.card4}>
                <RiGroupLine className={dashboardcard.logo} />
                <div className={dashboardcard.content_wrapper}>
                    <p className={dashboardcard.content}>Total Users</p>
                    <p className={dashboardcard.number}>600</p></div>
            </div>
        </div>
    )
}

export default DashboardCard