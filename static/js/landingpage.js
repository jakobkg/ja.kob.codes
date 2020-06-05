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
        python&nbsp;
        rust-hello&nbsp;
        vlang&nbsp;
        wiiu<br><br>
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
        This directory is empty.<br><br>
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