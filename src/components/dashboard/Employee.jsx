import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import Tasklist from '../taskList/Tasklist'

const Employee = ({data}) => {
  console.log(data)
  return (
    <div className='p-20 bg-[#1c1c1c] h-sreen'>
    <Header data={data}/>
    <TaskNumber data={data}/>
    <Tasklist data={data}/>
    </div>
  )
}

export default Employee


