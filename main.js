$.getJSON('data.json', function(data) {
  $('body').prepend('<div class="container"> <h1>GitHub Language Colors</h1> <p>This little experiment has taken the data from <code>languages.yml</code> and visualized it in a colorful way.</p> <p>You can click on the language name to go to the trending for that language </p> </div>')
  for(var i=0; i < data.length; i++) {
    var lang = data[i][0];
    var color = data[i][1];

    var c = data[i][1]
    c = c.substring(1);
    var rgb = parseInt(c, 16);
    var r = (rgb >> 16) & 0xff;
    var g = (rgb >>  8) & 0xff;
    var b = (rgb >>  0) & 0xff;
    var luminance = (r * 0.299 + g * 0.587 + b * 0.114) / 3;

    const maxchars = 12;
    var lang_display = lang;
    if (lang.length > maxchars) {
      lang_display = lang.substring(0, maxchars - 2) + '…';
    }

    if (luminance < 40) {
      $('#box').append('<div class="square" style="color:#EEE;background:' + color + '"><a class="light" href="https://github.com/trending?l=' + lang + '" title="' + lang + '">' + lang_display + '</a></div>')
    } else {
      $('#box').append('<div class="square" style="background:' + color + '"><a class="dark" href="https://github.com/trending?l=' + lang + '" title="' + lang + '">' + lang_display + '</a></div>')
    }
  }
});
