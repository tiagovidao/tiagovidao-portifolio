import styles from './AboutStyles.module.css';
import aboutImg from '../../assets/tiagovidao.png'; // Substitua pelo nome real da imagem

// Seção Sobre Mim, exibe informações pessoais do desenvolvedor.
function About() {
  return (
    <section id="about" className={styles.container}>
      <h1 className="sectionTitle">Sobre Mim</h1>
      <div className={styles.content}>
        <img src={aboutImg} className={styles.aboutImage} alt="Sobre mim" />
        <p className={styles.description}>
          Sou desenvolvedor front-end com experiência em React, TypeScript, JavaScript, HTML5, CSS3 e Tailwind. 
          Crio interfaces modernas, responsivas e funcionais, aplicando boas práticas de código limpo, 
          versionamento com Git e consumo de APIs REST. Tenho também experiência com Postman e Node.js, unindo design, performance e usabilidade em soluções digitais escaláveis.
        </p>
      </div>
    </section>
  );
}

export default About;