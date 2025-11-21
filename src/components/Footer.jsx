export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      © {currentYear} Gabriel Chiarelli — IA, automação e integrações inteligentes.
    </footer>
  );
}

