import { useEffect, useState } from "react"
import Form from "../form/FormTarefas"
import ListItens from "../listaItens/ListTarefas"


// Retornando as tarefas salvas do navegador
const getLocalItens = () => {
  let list = localStorage.getItem("salvarTarefas")

  if (list) {
    return JSON.parse(localStorage.getItem("salvarTarefas"))
  } else {
    return []
  }
}


function Main() {
  const [tarefas, setTarefas] = useState(getLocalItens())

  // Guarda uma nova tarefa na variavel tarefas
  const adicionaTarefa = (tarefa) => {
    setTarefas([...tarefas, tarefa])
  }

  // Envia um comando para deletar uma tarefa de acordo com o id da tarefa
  const deletaTarefa = (id) => {
    var filtered = tarefas.filter((tarefa) => tarefa.id !== id)
    setTarefas(filtered)
  }

  // Guardando as tarefas no navegador
  useEffect(() => {
    localStorage.setItem("salvarTarefas", JSON.stringify(tarefas))
  }, [tarefas])

  return (
    <div className="Main">
      {/* Componente que adiciona as tarefas */}
      <Form adicionaTarefa={adicionaTarefa}/>
      
      {/* Componente das tarefas */}
      {tarefas.map((tarefa) => (
        <ul key={tarefa.id} className="divListItens">
          <ListItens tarefa={tarefa} deletaTarefa={deletaTarefa}/>
        </ul>
      ))}
    </div>
  )
}

export default Main