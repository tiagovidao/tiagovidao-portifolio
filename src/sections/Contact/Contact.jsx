import styles from './ContactStyles.module.css';

// Seção de contato com um formulário que envia dados pelo Formspree.
function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contato</h1>
      <form action="https://formspree.io/f/xwpkkllj" method="post">
        
        <div className="formGroup">
          <label htmlFor="name" hidden>Nome</label>
          <input type="text" name="name" id="name" placeholder="Nome" required />
        </div>
        
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input type="text" name="email" id="email" placeholder="Email" required />
        </div>
        
        <div className="formGroup">
          <label htmlFor="message" hidden>Mensagem</label>
          <textarea name="message" id="message" placeholder="Mensagem" required></textarea>
        </div>

        <input className="hover btn" type="submit" value="Enviar" />
      </form>
    </section>
  );
}

export default Contact;
