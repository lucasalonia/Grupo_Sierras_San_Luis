(function() {
  const scriptTag = document.createElement('script');
  scriptTag.async = true;
  scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-WPZQYV2H0B';
  document.head.appendChild(scriptTag);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());

  // Configuración de los dos IDs
  gtag('config', 'G-WPZQYV2H0B'); // Ej: Analytics
  gtag('config', 'AW-312024311');  // Ej: Ads
})();