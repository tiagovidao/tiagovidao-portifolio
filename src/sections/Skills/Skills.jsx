import styles from './SkillsStyles.module.css';
import htmlIcon from '../../assets/html-5.png';
import cssIcon from '../../assets/css-3.png'
import jsIcon from '../../assets/js.png'
import tsIcon from '../../assets/typescript.png'
import SkillList from '../../common/SkillList';
import reactIcon from '../../assets/react.png';
import nodeIcon from '../../assets/node-js.png';
import sassIcon from '../../assets/sass.png';
<<<<<<< HEAD
import tailwindIcon from '../../assets/tailwind.png'
=======
>>>>>>> 26dfeb38730f3ca6b272dd1716250b223230d24d

//Seção exibe habilidades principais com ícones e descrições.
function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={htmlIcon} skill="HTML" />
        
        <SkillList src={jsIcon} skill="JavaScript" />
        <SkillList src={tsIcon} skill="TypeScript" />
        <SkillList src={reactIcon} skill="React" />
        <SkillList src={nodeIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={cssIcon} skill="CSS" />
<<<<<<< HEAD
        <SkillList src={tailwindIcon} skill="Tailwind" />
=======
>>>>>>> 26dfeb38730f3ca6b272dd1716250b223230d24d
        <SkillList src={sassIcon} skill="Sass" />
      </div>
      
    </section>
  );
}

export default Skills;
