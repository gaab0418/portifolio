export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      © {currentYear} Gabriel Chiarelli - Desenvolvedor Back-End. Todos os direitos reservados.
    </footer>
  );
}

