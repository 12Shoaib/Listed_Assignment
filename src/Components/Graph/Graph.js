import {Line} from 'react-chartjs-2'
import { data , options } from './GraphData'

const Graph = () => {
    return (
        <div style={{height:'200px' , width:'880px'}}>
              <Line options={options} data={data} />
        </div>
    )
}

export default Graph