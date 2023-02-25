import { useState } from "react";
import "./formTarefas.css"

function Form({adicionaTarefa}) {

  const [text, setText] = useState(null)
  const [id, setId] = useState(0)

  {/* Adiciona uma nova tarefa ao clicar no botão e salva o id da mesma */}
  const criarTarefa = (text) => {
    const todoObj = {text: text, id: id}
    setId(id + 1);
    adicionaTarefa(todoObj);
    document.getElementById("inputForm").value = null
  }

  return (
    <div className="Form">  {/* Componente que adiciona as tarefas */}
      <input type="text" placeholder="Tarefas" id="inputForm" onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => criarTarefa(text)}>Add</button>
    </div>
  )
}

export default Form