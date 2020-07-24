import React, { useState } from 'react';
import Header from './components/Header';

//Estato & Imutabilidade
// Não devemos alterar o estato da propriedade e sim criar uma nova propriedade
function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Desenvolvimento Web']);

    function handleAddProject() {
        //errado
        // projects.push(`Novo projeto para ${Date.now()}`);
        //certo
        setProjects([...projects,`Novo projeto para ${Date.now()}`]);
    }

    return (
      <>
        <Header title="Projects" />
        
        <ul>
    {projects.map(project => <li key={project}>{project}</li>)}  
        </ul>
        <button type="button" onClick={handleAddProject}>Adicionar novo projeto</button>
      </>
    );
}
export default App;