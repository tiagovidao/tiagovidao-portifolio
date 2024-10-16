// Componente para listar skills com ícone e nome da habilidade.
function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="Icon icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
