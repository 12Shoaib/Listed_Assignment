import topproducts from './topproducts.module.css'

const TopProducts = ({ meetingData }) => {
    return (
        <div className={topproducts.container}>
            <div className={topproducts.card_one}>
                <h4 className={topproducts.heading_card_one}>Top Products</h4>
                <div className={topproducts.main}>
                    <div className={topproducts.pie_chart}> </div>
                    <ul className={topproducts.wrapper}>
                        <li className={topproducts.tag_one}><span className={topproducts.sub_heading}>Basic Tees</span></li>
                        <span className={topproducts.sale_percantage}>55%</span>
                        <li className={topproducts.tag_two}><span className={topproducts.sub_heading}>Custom Short Pants</span></li>
                        <span className={topproducts.sale_percantage}>31%</span>
                        <li className={topproducts.tag_three}><span className={topproducts.sub_heading}>Super Hoodies</span></li>
                        <span className={topproducts.sale_percantage}>14%</span>

                    </ul>
                </div>
            </div>
            <div className={topproducts.card_two}>
                <h4 className={topproducts.heading}>Today's schedule</h4>
                <div className={topproducts.content}>
                    <div className={topproducts.content_wrapper}>
                        <h5 className={topproducts.content_heading}>Meeting for {meetingData[0]?.title}</h5>
                        <span className={topproducts.time}>14.00 - 15.00</span>
                    </div>
                    <div className={topproducts.content_wrappers}>
                        <h5 className={topproducts.content_heading}>Meeting for {meetingData[1]?.title}</h5>
                        <span className={topproducts.time}>14.00 - 15.00</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TopProducts