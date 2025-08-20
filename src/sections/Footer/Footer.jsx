import styles from './FooterStyles.module.css';

// Seção de rodapé do site com direitos autorais.
function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Tiago William. <br />
        Todos os direitos reservados.
      </p>
    </section>
  );
}

export default Footer;
