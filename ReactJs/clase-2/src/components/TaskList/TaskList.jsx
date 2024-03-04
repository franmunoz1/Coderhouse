/* eslint-disable react/prop-types */
const TaskList = ({ tareas }) => {
    return (
        <>
            <ul>
                {tareas.map(tarea => <li key={tarea.id}>{tarea.id} - {tarea.task}</li>)}
            </ul>
        </>
    )
}

export default TaskList