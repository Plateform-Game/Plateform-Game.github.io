/// <reference path="static/types/jquerry.d.ts" />

!function (w) { w.onload = function () { updatePage(); }; }(window);

const updatePage = function () {
    let w = window;
    if (w.location.hash.slice(1)) {
        let h = w.location.hash.slice(1);
        if (h.startsWith("/thanks")) {
            let file = h.slice(h.indexOf('?') + 1);
            let args = new URLSearchParams(file);
            $('div#content.main.center').html(`
                <div>
                    <h2>
                        Thanks for download !
                    </h2>
                    <p>If download do not start, reload page. <img src="./static/images/reload.gif" width="12"></p>
                    <a href="" onclick="event.preventDefault();window.location.hash='';updatePage();" class="big-button">Go to home</a>
                </div>
            `);
            let x = new XMLHttpRequest();
            x.open('GET', 'https://raw.githubusercontent.com/Plateform-Game/Installer/master/bin/Debug/Plateform_Launcher_Installer.exe', true);
            x.responseType = 'blob';
            x.onload = function () {download(x.response, 'PlateformLauncherInstaller.exe', 'application/vnd.microsoft.portable-executable')};
            x.send();
        } else if (h == '/') {
            $('div#content.main.center').html(`
                <div>
                    <h2>
                        Hello 👋 ! Welcome to Plateform Game site !
                </h2>
                    <p>Would you want to download the launcher installer ?</p>
                    <a class="big-button download" href="#/thanks?file=launcher_installer" onclick="event.preventDefault();window.location.hash = '#/thanks?file=launcher_installer';updatePage();">
                        Download
                        <img src="static/images/download.png" width="12" />
                    </a>
                </div>
            `);
        } else {
            $('div#content.main.center').html(`<a href='#/' onclick="event.preventDefault();window.location.hash='';updatePage();" class="big-button">Go to home</a><h2>¯\\_(ツ)_/¯</h2><br>Sorry, but this page is not found !`);
        }
    } else {
        w.location.hash = "#/";
        updatePage();
    }
}