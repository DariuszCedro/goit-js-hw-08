import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const player = new Player('vimeo-player', {});

const onPlay = function (time) {
  localStorage.setItem('videoplayer-current-time', time.seconds);
};

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
player.on('timeupdate', throttle(onPlay, 1000));
