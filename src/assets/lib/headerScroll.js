(function(window){
  let timer = null;
  const delta = 10;
  const hideOn = 120;
  let didScroll = false;
  let lastScrollTop = 0;
  window.onscroll = () => {
    didScroll = true;
  };
  function hasScrolled($DOM) {
    const scrollTop = window.scrollY;

    if (Math.abs(lastScrollTop - scrollTop) <= delta)
      return;

    if (scrollTop > lastScrollTop && scrollTop > hideOn) {
      $DOM.classList && $DOM.classList.add('scrolled');
    } else if (scrollTop + window.innerHeight < document.body.scrollHeight) {
      $DOM.classList.remove('scrolled');
    }
    lastScrollTop = scrollTop;
  }
  function initHeaderScorll($dom){
    clearInterval(timer)
    timer = setInterval(function () {
      if (didScroll) {
        hasScrolled($dom);
        didScroll = false;
      }
    }, 250);
  }
  window.initHeaderScorll = initHeaderScorll
})(window)