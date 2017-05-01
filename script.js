
function prependChild(parent, newFirstChild) {
    parent.insertBefore(newFirstChild, parent.firstChild)
}

// fade in effects
(function() {
  var splash = document.getElementById('splashscreen')
  var goToContentButton = document.getElementById('splashscreen-content').childNodes[3]
  var content = document.getElementById('main')

  goToContentButton.addEventListener('click', function() {
    splash.className = "fade-out"
    setTimeout(function() {
      splash.classList.add("hide")
      content.className="fade-in show"
    }, 2000)
  })

  setTimeout(function() {
    splash.className = "fade-in show"
  }, 1000)
}())

// create videojs and insert ad
function createVideo(videoSource) {
  var main = document.getElementById('main')
  var mainContent = document.getElementById('main-input')
  var videoElement = document.getElementById('content_video')

  main.removeChild(mainContent)

  var video = document.createElement('video')
  var source = document.createElement('source')
  source.type = "video/mp4"
  source.src = videoSource
  video.appendChild(source)
  video.id = "content_video"
  video.className = "video-js vjs-default-skin vjs-big-play-centered"
  video.setAttribute("controls", "")
  video.setAttribute("preload", "auto")
  video.setAttribute("data-setup", "{}")
  prependChild(main, video)

  setTimeout(function() {
    var player = videojs('content_video');
    var options = {
      id: 'content_video',
      adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?' +
        'sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&' +
        'impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&' +
        'cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator='
    };
    player.ima(options);
    player.ima.requestAds();
    player.play();
  }, 1000);

}

// form submission
(function() {
  var form = document.getElementById('upload-form')
  form.onchange = function(e) {
    console.log(e.target.files)
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = function() {
      createVideo(reader.result)
    }
    reader.readAsDataURL(file)
  }
}())

// demo click
function playDemo() {
  createVideo('//vjs.zencdn.net/v/oceans.mp4')
}






