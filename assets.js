const _Assets = {
  mainTitleTextLandscape: 'Så gör man - Väder och kläder', 
  mainTitleTextPortrait: 'Så gör man\nVäder och kläder', 
  mainBookName: 'winter', //number of frames in this book defines the size of the indicators
  bookOrder: [
    'winter',
    'spring',
    'summer',
    'autumn',
    'gym',
    'weather',
    'beach',
    'ride',
  ],
  bookTitles: {    
    winter: 'Vinter',
    spring: 'Vår',
    summer: 'Sommar',
    autumn: 'Höst',
    gym: 'Jag går på gympa',
    weather: 'Vad gör vi i olika väder?',
    beach: 'Jag åker till stranden',
    ride: 'Jag ska rida på en häst',
  },
  titleImages: {
    winter: require('./img/wintericon.png'),
    spring: require('./img/springicon.png'),
    summer: require('./img/summericon.png'),
    autumn: require('./img/autumnicon.png'),
    gym: require('./img/gymicon.png'),
    weather: require('./img/weathericon.png'),
    beach: require('./img/beachicon.png'),
    ride: require('./img/rideicon.png'),
  },
  images: {
    gym: [
      require('./img/gymtitle.png'),
      require('./img/gym1.png'),
      require('./img/gym2.png'),
      require('./img/gym3.png'),
      require('./img/gym4.png'),
      require('./img/gym5.png'),
    ],
    summer: [
      require('./img/summertitle.png'),
      require('./img/summer1.png'),
      require('./img/summer2.png'),
      require('./img/summer3.png'),
      require('./img/summer4.png'),
      require('./img/summer5.png'),
    ],
    autumn: [
      require('./img/autumntitle.png'),
      require('./img/autumn1.png'),
      require('./img/autumn2.png'),
      require('./img/autumn3.png'),
      require('./img/autumn4.png'),
      require('./img/autumn5.png'),
    ],
    winter: [
      require('./img/wintertitle.png'),
      require('./img/winter1.png'),
      require('./img/winter2.png'),
      require('./img/winter3.png'),
      require('./img/winter4.png'),
      require('./img/winter5.png'),
    ],
    weather: [
      require('./img/weathertitle.png'),
      require('./img/weather1.png'),
      require('./img/weather2.png'),
      require('./img/weather3.png'),
      require('./img/weather4.png'),
      require('./img/weather5.png'),
    ],
    beach: [
      require('./img/beachtitle.png'),
      require('./img/beach1.png'),
      require('./img/beach2.png'),
      require('./img/beach3.png'),
      require('./img/beach4.png'),
      require('./img/beach5.png'),
    ],
    ride: [
      require('./img/ridetitle.png'),
      require('./img/ride1.png'),
      require('./img/ride2.png'),
      require('./img/ride3.png'),
      require('./img/ride4.png'),
      require('./img/ride5.png'),
    ],
    spring: [
      require('./img/springtitle.png'),
      require('./img/spring1.png'),
      require('./img/spring2.png'),
      require('./img/spring3.png'),
      require('./img/spring4.png'),
      require('./img/spring5.png'),
    ],
  },
  soundFiles: {
    gym:   [
      'tada.mp3', //only used while testing
      'gym1.mp3',
      'gym2.mp3',
      'gym3.mp3',
      'gym4.mp3',
      'gym5.mp3',
    ],
    summer:   [
      'tada.mp3', //only used while testing
      'summer1.mp3',
      'summer2.mp3',
      'summer3.mp3',
      'summer4.mp3',
      'summer5.mp3',
    ],
    autumn: [
      'tada.mp3', //only used while testing
      'autumn1.mp3',
      'autumn2.mp3',
      'autumn3.mp3',
      'autumn4.mp3',
      'autumn5.mp3',
    ],
    winter: [
      'tada.mp3', //only used while testing
      'winter1.mp3',
      'winter2.mp3',
      'winter3.mp3',
      'winter4.mp3',
      'winter5.mp3',
    ],
    weather: [
      'tada.mp3', //only used while testing
      'weather1.mp3',
      'weather2.mp3',
      'weather3.mp3',
      'weather4.mp3',
      'weather5.mp3',
    ],
    beach: [
      'tada.mp3', //only used while testing
      'beach1.mp3',
      'beach2.mp3',
      'beach3.mp3',
      'beach4.mp3',
      'beach5.mp3',
    ],
    ride: [
      'tada.mp3', //only used while testing
      'ride1.mp3',
      'ride2.mp3',
      'ride3.mp3',
      'ride4.mp3',
      'ride5.mp3',
    ],
    spring: [
      'tada.mp3', //only used while testing
      'spring1.mp3',
      'spring2.mp3',
      'spring3.mp3',
      'spring4.mp3',
      'spring5.mp3',
    ],
  },

  speakerIcon: require('./img/speaker256x256.png'),
  backIcon: require('./img/home240x240transp.png'),
  creditsBackIcon: require('./img/back.png'),
  logo: require('./img/bonasignumlogo.png'),
};

const Assets = _Assets;
module.exports = Assets;
