import styles from './SkillsStyles.module.css';
import htmlIcon from '../../assets/html-5.png';
import cssIcon from '../../assets/css-3.png'
import jsIcon from '../../assets/js.png'
import tsIcon from '../../assets/typescript.png'
import SkillList from '../../common/SkillList';
import reactIcon from '../../assets/react.png';
import nodeIcon from '../../assets/node-js.png';
import sassIcon from '../../assets/sass.png';

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
        <SkillList src={sassIcon} skill="Sass" />
      </div>
      
    </section>
  );
}

export default Skills;
