import activitycard from './activitycard.module.css'
import Graph from '../Graph/Graph'

const ActivityCard = () => {
    return(
        <div className={activitycard.activity_container}>
            <h4 className={activitycard.activity_heading} >Activity</h4>
            <Graph/>
        </div>
    )
}

export default ActivityCard