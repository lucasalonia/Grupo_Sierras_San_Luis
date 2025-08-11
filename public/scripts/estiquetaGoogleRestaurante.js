(function() {
  const scriptTag = document.createElement('script');
  scriptTag.async = true;
  scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=AW-312024311';
  document.head.appendChild(scriptTag);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'AW-312024311');
})();