import activitycard from './activitycard.module.css'
import Graph from '../Graph/Graph'

const ActivityCard = () => {
    return(
        <div className={activitycard.container}>
            <h4 className={activitycard.heading} >Activity</h4>
            <Graph/>
        </div>
    )
}

export default ActivityCard