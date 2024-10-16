import styles from './ProjectsStyles.module.css';
import bsbDepil from '../../assets/Depilaçao Brasilia.png';
import shopjs from '../../assets/Shop-js.png';
import speakAcademy from '../../assets/speak-academy.png'; 
import toDo from '../../assets/todo-react.png';
import studentsList from '../../assets/type-students.png';
import ProjectCard from '../../common/ProjectCard';

//Seção de projetos, exibe imagens, títulos, descrições e links para repositórios do GitHub.
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={bsbDepil}
          link="https://github.com/tiagovidao/Depilacao-Brasilia"
          h3="Depilação Brasília"
          p={
            <>
              <strong>Projeto Real</strong>
              <br />
              <br />
              Clínica de Depilação
              <br />
              HTML|CSS|Javascript
            </>
          }
        />
        <ProjectCard
          src={shopjs}
          link="https://github.com/tiagovidao/project-3"
          h3="Loja Virtual"
          p={
            <>
              <strong>Projeto de Estudos</strong>
             <br />
             <br />
              Loja de artes online
              <br />
              HTML|CSS|Javascript
            </>
          }
        />
        <ProjectCard
          src={speakAcademy}
          link="https://github.com/tiagovidao/speak-academy"
          h3="Speak Academy"
          p={
            <>
            <strong>Projeto de Estudos</strong>
              <br />
              <br />
              Cursos de línguas online
              <br />
              HTML|CSS
            </>
          }
        />
        <ProjectCard
          src={toDo}
          link="https://github.com/tiagovidao/toDo-List"
          h3="To-Do List"
          p={
            <>
              <strong>Projeto de Estudos</strong>
              <br />
              <br />
              Oraganizador de Tarefas
              <br />
              HTML|CSS|React|Sass
            </>
          }
        />
        <ProjectCard
          src={studentsList}
          link="https://github.com/tiagovidao/project4-ts-students"
          h3="Students List"
          p={
            <>
              <strong>Projeto de Estudos</strong>
              <br />
              <br />
              Lista de Estudantes
              <br />
              HTML|CSS|Typescript|Javascript
            </>
          }
        />
      </div>
    </section>
  );
}

export default Projects;