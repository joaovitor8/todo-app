import "./listTarefas.css"

function ListItens({tarefa, deletaTarefa}) {
  return (
    <li className="ListItens"> {/* Componente das tarefas */}
      <div>
        <input type="checkbox"/>
        <p>{tarefa.text}</p>
      </div>
      
      {/* Componente que ao clicar deleta a tarefa */}
      <img src="lixo.svg" onClick={() => deletaTarefa(tarefa.id)}/> 
    </li>
  )
}

export default ListItens