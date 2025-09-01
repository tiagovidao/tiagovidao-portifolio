import styles from './HeroStyles.module.css';
import heroImg from '../../assets/ft-perfil_2024.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/TiagoWilliamCurriculo2025.pdf';
import { useTheme } from '../../common/ThemeContext';
import { useTypeWriter } from '../../hooks/useTypeWriter';

// Seção Hero, exibe as informações principais.
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const typingText = useTypeWriter('Desenvolvedor FrontEnd', 100);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={heroImg} className={styles.hero} alt="Foto de Perfil" />
        <img
          className={styles.colorMode}
          src={theme === 'light' ? sun : moon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.fadeInTitle}>
          Tiago
          <br />
          William
        </h1>
        <h2 className={styles.typing}>{typingText}</h2>
        <span>
          <a href="https://github.com/tiagovidao" target="_blank">
            <img src={theme === 'light' ? githubLight : githubDark} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/tiagowvidao" target="_blank">
            <img src={theme === 'light' ? linkedinLight : linkedinDark} alt="Linkedin icon"/>
          </a>
        </span>
        <p className={styles.description}>
          Transformando desafios em soluções elegantes e eficazes. Meu objetivo é criar experiências digitais que impactam positivamente.
        </p>
        <a href={CV} download>
          <button className="hover">Baixar CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;