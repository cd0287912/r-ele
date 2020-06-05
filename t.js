/************************************
            APP.JS CORE
************************************/
const $confettiWrapper = $('.confetti-wrapper');
const CANVAS_HEIGHT = 400;
const PANDA_API_BASE = 'https://api.usepanda.com';
const state = {};
let pndKey;

$.ajaxSetup({
  headers : {
    'X-Client': 'panda-landing'
  }
});

$(window).ready(() => {
  initHeaderScroll();
  initNewsletterScroll();
  initActivityTrackers();
  $confettiWrapper.length && initConfetti();
  $('.video-wrapper').length && initVideoHandle();
  $('.feeds-owl').length && initCarousel();
  $('.wall').length && initPandaWall();
  // $('.js-latest-newsletter').length && fetchLatestNewsletter();
});

function initActivityTrackers() {
  pndKey = window.localStorage.getItem('ls.k')
	|| window.localStorage.getItem('ls.identifier')
  || window.localStorage.getItem('pnd.landing.k');
  
  if (!pndKey) {
		pndKey = createUUID();
		window.localStorage.setItem('pnd.landing.k', pndKey);
  }

  if ($('.hero').length) // Only index page
    postActivity({ type: 'LANDING_PAGE_VISIT' });

  $('.activity-tr').on('click', (e) => {
    const props = $(e.target).data('activity').split(',');
    const activity = {
      type: props[0]
    };

    if (props[1]) {
      activity.value = props[1];
    }

    postActivity(activity);
  });
}

function postActivity(props) {
  if (!props.type) return;
  
  if (isLocal()) {
    return console.log('USER_ACTIVITY', props);
  }

	const activityUrl = `${PANDA_API_BASE}/v3/user-activity`;
	const reqBody = {
		type: props.type,
		uniqueId: pndKey
	};

	if (props.value)
		reqBody.value = props.value;

	$.post(activityUrl, reqBody, null, 'text/html');
}

// function fetchLatestNewsletter() {
//   $.getJSON(
//     `${PANDA_API_BASE}/v3/mail-campaign/latest`,
//     data => {
//       const $el = $('.js-latest-newsletter');
      
//       $el.attr('href', data.url);
//       $el.css('display', 'block');
//     }
//   )
// }

function initNewsletterScroll() {
  $('.js-scroll-newsletter').on('click', () => {
    $('html, body').animate({ scrollTop: $('body').height() });
  });
}

function initPandaWall() {
  // const initialItems = [getWallItems(1), getWallItems(2)];

  // initialItems.forEach(renderWallItems);

  // $('.btn-load-wall').on('click', () => {
  //   renderWallItems(getWallItems(state.wallPage + 1));
  // });

  const placeholderItem = {
    imgUrl: 'https://placeimg.com/640/480/arch',
    user: {
      name: 'Your Name',
      profileImg: 'img/panda-logo.svg'
    }
  };

  renderWallItems([placeholderItem]);
}

function renderWallItems(items) {
  const $scrollable = $('<div class="wall-scrollable"></div>');
  items.forEach((item) => {
    const itemTemplate = `
      <div class="wall-item" style="background-image: url('${item.imgUrl}');">
        <div class="user">
          <img src="${item.user.profileImg}">
          <span>${item.user.name}</span>
        </div>
      </div>
    `;

    $scrollable.append(itemTemplate);

  });

  $scrollable.appendTo('.wall-wrapper');
  const elWidth = $scrollable.get(0).scrollWidth;

  $scrollable.get(0).scrollLeft = Math.floor((elWidth / 2) - ($(window).width() / 2));
}

function getWallItems(page) {
  state.wallPage = page;

  const dummyItem = {
    imgUrl: 'https://placeimg.com/640/480/arch',
    user: {
      name: 'Lorem Ipsum',
      profileImg: 'https://placeimg.com/200/200/people'
    }
  };

  const rv = [];
  let i;
  for (i = 12 - (page % 2); i > 0; i--) {
    rv.push(dummyItem);
  }

  return rv;
}

function initCarousel() {
  const $wrapper = $('.feeds-owl');
  $wrapper.owlCarousel({
    items: 5,
    autoplay: true,
    loop: true,
    autoplaySpeed: 600,
    slideTransition: 'linear',
    autoplayTimeout: 2500,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    freeDrag: false,
    onChanged() {
      $('.owl-item').removeClass('el-1 el-2 el-3 el-4 el-5');

      setTimeout(() => {
        $('.owl-item.active').each((i, el) => {
          $(el).addClass(`el-${i + 1}`);
        });
      }, 10);
    }
  });
}

function initVideoHandle() {
  const $hero = $('.hero');
  const $videoWrapper = $('.hero-video-wrapper');
  const $playButton = $('.hero-video-button');
  const $mobilePlayButton = $('.mob-video-btn');
  let player;

  const playVideo = () => {
    $videoWrapper.addClass('video-playing');
    player.playVideo();
    state.videoOpen = true;
  };

  const pauseVideo = () => {
    $videoWrapper.removeClass('video-playing');
    player.pauseVideo();
    state.videoOpen = false;
    state.mobilePlay = false;
  };

  createVideoScript();

  window.onYouTubeIframeAPIReady = () => {
    player = new YT.Player('hero-video', {
	    events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
	    }
	  });
  };

  function onPlayerStateChange(evt) {
    if (evt.data != YT.PlayerState.ENDED) return;

    pauseVideo();
  }

  function onPlayerReady() {
    $playButton.on('click', () => {
      playVideo();
    });

    $mobilePlayButton.on('click', () => {
      state.mobilePlay = true;
      playVideo();
    });

    $videoWrapper.on('click', () => {
      if (!state.mobilePlay) return;

      pauseVideo();
    });

    $hero.on('click', (e) => {
      if (e.target !== e.currentTarget || !state.videoOpen) return;

      pauseVideo();
    });
  }

  function createVideoScript() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
}

function initHeaderScroll() {
  const delta = 10;
  const hideOn = 120;
  const $header = document.querySelector('header');
  let didScroll = false;
  let lastScrollTop = 0;

  window.onscroll = () => {
    didScroll = true;
  };

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    const scrollTop = window.scrollY;

    if (Math.abs(lastScrollTop - scrollTop) <= delta)
      return;

    if (scrollTop > lastScrollTop && scrollTop > hideOn) {
      $header.classList.add('scrolled');
    } else if (scrollTop + window.innerHeight < document.body.scrollHeight) {
      $header.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
  }
}

function initConfetti() {
  let W = window.innerWidth;
  let H = CANVAS_HEIGHT || window.innerHeight;
  const canvas = document.getElementById('confetti-canvas');
  const context = canvas.getContext('2d');
  const maxConfettis = 20;
  const particles = [];
  let lastColorIndex = -1;

  H = Math.min(H, W);

  const possibleColors = [
    { 'r': 175, 'g': 156, 'b': 218 },
    { 'r': 163, 'g': 206, 'b': 113 },
    { 'r': 84, 'g': 199, 'b': 236 },
    { 'r': 252, 'g': 216, 'b': 114 },
    { 'r': 236, 'g': 126, 'b': 189 },
    { 'r': 245, 'g': 135, 'b': 150 },
    { 'r': 243, 'g': 83, 'b': 105 }
  ];

  function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

  function objToRgb(obj) {
    return `rgb(${obj.r}, ${obj.g}, ${obj.b})`;
  }

  function confettiParticle() {
    lastColorIndex++;

    this.x = Math.random() * W; // x
    this.y = Math.random() * H - H; // y
    this.r = randomFromTo(11, 28); // radius
    this.d = Math.random() * maxConfettis + 11;
    this.color = possibleColors[lastColorIndex];
    this.tilt = Math.floor(Math.random() * 33) - 11;
    this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
    this.tiltAngle = 0;

    if (lastColorIndex >= possibleColors.length - 1) {
      lastColorIndex = -1;
    }

    this.draw = function () {
      this.tilt = this.tilt * 1;
      context.beginPath();
      context.lineCap = 'round';
      context.lineWidth = this.r / 2;
      context.strokeStyle = objToRgb(this.fadeColor || this.color);

      const posX = this.x + this.tilt + this.r / 3;
      const posY = this.y;
      const movX = this.x + this.tilt;
      const movY = this.y + this.tilt + this.r / 5;

      context.moveTo(posX, posY);
      context.lineTo(((posX * 3) + movX) / 4, (posY + movY) / 2);

      return context.stroke();
    };
  }

  function Draw() {
    const results = [];

    requestAnimationFrame(Draw);

    context.clearRect(0, 0, W, H);

    for (var i = 0; i < maxConfettis; i++) {
      results.push(particles[i].draw());
    }

    let particle = {};
    for (var i = 0; i < maxConfettis; i++) {
      particle = particles[i];

      particle.tiltAngle += particle.tiltAngleIncremental;
      particle.y += (Math.cos(particle.d) + 1 + particle.r / 2) / 2;
      particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

      if (particle.y > H - 150) {
        const color = particle.fadeColor || particle.color;

        particle.fadeColor = {
          r: color.r + ((255 - color.r) / 10),
          g: color.g + ((255 - color.g) / 10),
          b: color.b + ((255 - color.b) / 10)
        };
      }

      if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
        particle.x = Math.random() * W;
        particle.fadeColor = null;
        particle.y = -30;
        particle.tilt = Math.floor(Math.random() * 10) - 20;
      }
    }

    return results;
  }

  window.addEventListener('resize', () => {
    W = window.innerWidth;
    H = CANVAS_HEIGHT || window.innerHeight;
    H = Math.min(H, W);
    canvas.width = W;
    canvas.height = H;
  }, false);

  for (var i = 0; i < maxConfettis; i++) {
    particles.push(new confettiParticle());
  }

  canvas.width = W;
  canvas.height = H;
  Draw();
}  

function isLocal() {
	return location.href.match(/localhost/) != null;
}

function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}
