var player = videojs('content_video');

var options = {
  id: 'content_video',
  adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?' +
        'sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&' +
        'impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&' +
        'cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator='
};

// This must be called before player.play() below.
player.ima(options);
player.ima.requestAds();
// On mobile devices, you must call initializeAdDisplayContainer as the result
// of a user action (e.g. button click). If you do not make this call, the SDK
// will make it for you, but not as the result of a user action. For more info
// see our examples, all of which are set up to work on mobile devices.
// player.ima.initializeAdDisplayContainer();

// This must be called after player.ima(...) above.
player.play();