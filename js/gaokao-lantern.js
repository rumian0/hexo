(function() {
  var phrases = [
    ['高','考','加','油'],
    ['金','榜','题','名'],
    ['好','运','连','连'],
    ['不','负','韶','华'],
    ['扬','帆','起','航'],
    ['前','程','似','锦'],
    ['旗','开','得','胜'],
    ['一','举','夺','魁'],
    ['鱼','跃','龙','门'],
    ['梦','想','成','真']
  ];
  var pick = phrases[Math.floor(Math.random() * phrases.length)];
  var container = document.createElement('div');
  container.className = 'gaokao-lantern-container';
  for (var i = 0; i < 4; i++) {
    var item = document.createElement('div');
    item.className = 'gaokao-lantern-item';
    item.innerHTML =
      '<div class="gaokao-lantern-string"></div>' +
      '<div class="gaokao-lantern-top"></div>' +
      '<div class="gaokao-lantern-body"><div class="gaokao-lantern-text">' + pick[i] + '</div></div>' +
      '<div class="gaokao-lantern-bottom"></div>' +
      '<div class="gaokao-lantern-tassel-line"></div>' +
      '<div class="gaokao-lantern-tassel-knot"></div>';
    container.appendChild(item);
  }
  document.addEventListener('DOMContentLoaded', function() {
    document.body.appendChild(container);
  });
})();
