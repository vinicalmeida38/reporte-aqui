function footerComponent() {
  const footer = document.querySelector(".footer");
  return (footer.innerHTML = `<p class="footer__content">ReporteAqui © 2020 <strong>Vinícius Almeida</strong></p>`);
}

footerComponent();
