import "../blocks/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p className="footer_text">
        Just to Showcase my Art. Christian To © {currentYear}
      </p>
    </div>
  );
}

export default Footer;
