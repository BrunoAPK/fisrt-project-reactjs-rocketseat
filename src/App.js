import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import BackgroundImage from './assets/background.jpg'

//Estato & Imutabilidade
// Não devemos alterar o estato da propriedade e sim criar uma nova propriedade
function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Desenvolvimento Web']);

    function handleAddProject() {
        //errado
        // projects.push(`Novo proqjeto para ${Date.now()}`);
        //certo
        setProjects([...projects,`Novo projeto para ${Date.now()}`]);
    }

    return (
      <>
        <Header title="Projects" />
        <img width={300} src={BackgroundImage} alt="wallpaper gato"/>
        <ul>
    {projects.map(project => <li key={project}>{project}</li>)}  
        </ul>
        <button type="button" onClick={handleAddProject}>Adicionar novo projeto</button>
      </>
    );
}
export default App;