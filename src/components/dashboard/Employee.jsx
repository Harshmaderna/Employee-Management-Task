import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import Tasklist from '../taskList/Tasklist'

const Employee = () => {
  return (
    <div className='p-20 bg-[#1c1c1c] h-sreen'>
    <Header />
    <TaskNumber />
    <Tasklist />
    </div>
  )
}

export default Employee


