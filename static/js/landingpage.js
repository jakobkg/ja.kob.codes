function cdCode() {
  var x = document.getElementById("layer1");
  x.innerHTML =`
  <p>
    ┌<span class="username">jakob</span> in <span class="directory">~</span><br>
    └> cd code/<br><br>
    ┌<span class="username">jakob</span> in <span class="directory">~/code</span><br>
    └> ls<br><br>
    <a class="btn ja.kob.codes" onclick="cdThisSite()">ja.kob.codes</a>&nbsp;
    <a class="btn metronome" onclick="cdMetronome()">metronome</a>&nbsp;
    <a class="btn python" onclick="cdPython()">python</a>&nbsp;
    rust-hello&nbsp;
    <a class="btn wiiu" onclick="cdWiiu()">wiiu</a>
  </p>
  <div id="layer2"></div>
  `;
}

function cdKeebs() {
  var x = document.getElementById("layer1");
  x.innerHTML =`
  <p>
    ┌<span class="username">jakob</span> in <span class="directory">~</span><br>
    └> cd keebs/<br><br>
    ┌<span class="username">jakob</span> in <span class="directory">~/keebs</span><br>
    └> ls<br><br>
    This directory is empty.<br><br>
  </p>
  <div id="layer2"></div>
  `;
  } 

function cdTools() {
  var x = document.getElementById("layer1");
  x.innerHTML =`
  <p>
    ┌<span class="username">jakob</span> in <span class="directory">~</span><br>
    └> cd tools/<br><br>
    ┌<span class="username">jakob</span> in <span class="directory">~/tools</span><br>
    └> ls<br><br>
    <a class="btn bashtheme" onclick="catJakobTheme()">jakob.theme.bash</a>&nbsp;
    <a class="btn bashthememulti" onclick="catJakobThemeMulti()">jakob-multiline.theme.bash</a>
  </p>
  <div id="layer2"></div>
  `;
}

function catJakobTheme() {
  var x = document.getElementById("layer2");
  x.innerHTML =`
  <p>
    ┌<span class="username">jakob</span> in <span class="directory">~/tools</span><br>
    └> man jakob.theme.bash<br><br>

    My everyday bash theme, for use with bash-it<br>
    Hosted at <a target="_blank" href="https://gist.github.com/jakobkg/107404df4c29d42f2c62947faa380ae9">gist.github.com</a>
  </p>
  `;
}

function catJakobThemeMulti() {
  var x = document.getElementById("layer2");
  x.innerHTML =`
  <p>
    ┌<span class="username">jakob</span> in <span class="directory">~/tools</span><br>
    └> man jakob-multiline.theme.bash<br><br>

    A multi-line version of my bash-it theme, roughly what you see on this page<br>
    Hosted at <a target="_blank" href="https://gist.github.com/jakobkg/fd275e991e957347ff3722bca7c87c6c">gist.github.com</a>
  </p>
  `;
}

function cdThisSite() {
  var x = document.getElementById("layer2");
  x.innerHTML =`
  <p>
    ┌<span class="username">jakob</span> in <span class="directory">~/code</span><br>
    └> cd ja.kob.codes/<br><br>
    ┌<span class="username">jakob</span> in <span class="directory">~/code/ja.kob.codes</span><br>
    └> ls<br><br>
    app.py&nbsp;
    LICENSE&nbsp;
    __pycache__&nbsp;
    requirements.txt&nbsp;
    static&nbsp;
    templates&nbsp;
    venv<br><br>
  </p>
  `;
}

function cdMetronome() {
  var x = document.getElementById("layer2");
  x.innerHTML =`
  <p>
    ┌<span class="username">jakob</span> in <span class="directory">~/code</span><br>
    └> cd metronome/<br><br>
    ┌<span class="username">jakob</span> in <span class="directory">~/code/metronome</span><br>
    └> ls<br><br>
    CMakeLists.txt&nbsp;
    conanfile.txt&nbsp;
    README.md&nbsp;
    snd&nbsp;
    src<br><br>
  </p>
  `;
}

function cdPython() {
  var x = document.getElementById("layer2");
  x.innerHTML =`
  <p>
    ┌<span class="username">jakob</span> in <span class="directory">~/code</span><br>
    └> cd python/<br><br>
    ┌<span class="username">jakob</span> in <span class="directory">~/code/python</span><br>
    └> ls<br><br>
    <a class="btn image2OLED" onclick="cdimage2OLED()">image2OLED</a>&nbsp;
    <a class="btn twitter-json-tools" onclick="cdTwittertools()">twitter-json-tools</a><br>
  </p>
  <div id="layer3"></div>
  `;
}

function cdimage2OLED() {
  var x = document.getElementById("layer3");
    x.innerHTML =`
    <p>
      ┌<span class="username">jakob</span> in <span class="directory">~/code/python</span><br>
      └> cd image2OLED/<br><br>
      ┌<span class="username">jakob</span> in <span class="directory">~/code/python/image2OLED</span><br>
      └> ls<br><br>
      image2OLED.py&nbsp;
      README.md&nbsp;
      requirements.txt&nbsp;
      venv<br><br>
    </p>
    `;
}

function cdTwittertools() {
  var x = document.getElementById("layer3");
    x.innerHTML =`
    <p>
      ┌<span class="username">jakob</span> in <span class="directory">~/code/python</span><br>
      └> cd twitter-json-tools/<br><br>
      ┌<span class="username">jakob</span> in <span class="directory">~/code/python/twitter-json-tools</span><br>
      └> ls<br><br>
      json&nbsp;
      main.py&nbsp;
      search_functions.py&nbsp;
      tweet_collectors&nbsp;
      helper_functions.py&nbsp;
      LICENSE&nbsp;
      README.md<br><br>
    </p>
    `;
}

function cdWiiu() {
  var x = document.getElementById("layer2");
    x.innerHTML =`
    <p>
      ┌<span class="username">jakob</span> in <span class="directory">~/code</span><br>
      └> cd wiiu/<br><br>
      ┌<span class="username">jakob</span> in <span class="directory">~/code/wiiu</span><br>
      └> ls<br><br>
      <a class="btn libinput" onclick="cdLibinput()">libinput</a>&nbsp;
      <a class="btn savemii" onclick="cdSavemii()">savemii</a><br>
    </p>
    <div id="layer3"></div>
    `;
}

function cdLibinput() {
  var x = document.getElementById("layer3");
    x.innerHTML =`
    <p>
      ┌<span class="username">jakob</span> in <span class="directory">~/code/wiiu</span><br>
      └> cd libinput/<br><br>
      ┌<span class="username">jakob</span> in <span class="directory">~/code/wiiu/libinput</span><br>
      └> ls<br><br>
      Makefile&nbsp;
      README.md&nbsp;
      src&nbsp;
      TODO.md
    </p>
    `;
}

function cdSavemii() {
  var x = document.getElementById("layer3");
    x.innerHTML =`
    <p>
      ┌<span class="username">jakob</span> in <span class="directory">~/code/wiiu</span><br>
      └> cd savemii/<br><br>
      ┌<span class="username">jakob</span> in <span class="directory">~/code/wiiu/savemii</span><br>
      └> ls<br><br>
      libxml2&nbsp;
      LICENSE&nbsp;
      Makefile&nbsp;
      meta&nbsp;
      README.md&nbsp;
      src&nbsp;
      TGAReader_LICENSE
    </p>
    `;
}