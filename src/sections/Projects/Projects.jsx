import styles from './ProjectsStyles.module.css';
import prototipoFestival from '../../assets/prototipo-festival.png';
import painelAdmin from '../../assets/painel-admin.png';
import agendaDepil from '../../assets/agenda-bsb.png';
import finanzen from '../../assets/finanzen.png';
import deliciasHorti from '../../assets/delicias-horti.png';
import testeQuiz from '../../assets/quiz-tds2.png';
import bsbDepil from '../../assets/Depilaçao Brasilia.png';
import shopjs from '../../assets/Shop-js.png';
import speakAcademy from '../../assets/speak-academy.png';
import toDo from '../../assets/todo-react.png';
import studentsList from '../../assets/type-students.png';
import ProjectCard from '../../common/ProjectCard';

// Seção de projetos, exibe imagens, títulos, descrições e links para repositórios do GitHub.
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={prototipoFestival}
          link="https://github.com/tiagovidao/prototipo-site-festival"
          h3="Festival de Dança"
          p={
            <>
              <strong>Projeto Real</strong>
              <br />
              <br />
              Protótipo de Site
              <br />
              React | Node | Javascript | Typescript | Tailwind
            </>
          }
        />
        <ProjectCard
          src={testeQuiz}
          link="https://github.com/tiagovidao/react-quiz"
          h3="Quiz de Teste"
          p={
            <>
              <strong>Projeto de Revisão de Estudos</strong>
              <br />
              <br />
              Quiz de Teste de Software
              <br />
              React | Javascript | CSS
            </>
          }
        />
        <ProjectCard
          src={painelAdmin}
          link="https://github.com/tiagovidao/festival-admin"
          h3="Painel Administrativo"
          p={
            <>
              <strong>Projeto Real</strong>
              <br />
              <br />
              Para organizadores/gestores do festival de dança
              <br />
              HTML | CSS | Javascript
            </>
          }
        />
        <ProjectCard
          src={agendaDepil}
          link="https://github.com/tiagovidao/Agenda_Depilacao_Brasilia"
          h3="Agenda Depilação Brasília"
          p={
            <>
              <strong>Projeto Real</strong>
              <br />
              <br />
              Sistema de agendamento para depiladoras
              <br />
              React | Typescript | Tailwind
            </>
          }
        />
        <ProjectCard
          src={finanzen}
          link="https://github.com/tiagovidao/finanzen"
          h3="Finanzen"
          p={
            <>
              <strong>Projeto de Controle Financeiro</strong>
              <br />
              <br />
              Sistema de Rastreamento de Finanças
              <br />
              React | Typescript | Tailwind | Python
            </>
          }
        />
        <ProjectCard
          src={deliciasHorti}
          link="https://github.com/tiagovidao/delicias-horti"
          h3="Delícias Horti"
          p={
            <>
              <strong>Projeto Mobile de Compras</strong>
              <br />
              <br />
              App para compras de hortaliças
              <br />
              React Native | Typescript | CSS
            </>
          }
        />
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
              Organizador de Tarefas
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
