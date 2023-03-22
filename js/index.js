function GitHubReleaseinfo(projectnum)
{
    if (projectnum == 1) {
        const releaseinforequest = new XMLHttpRequest();
        releaseinforequest.addEventListener("load", function (){ 
            var json = JSON.parse(releaseinforequest.responseText);
                changelog_title_sonic_cd.innerText = "V" + json.tag_name + " changelog";
                changelog_sonic_cd.innerText = json.body;
                sonic_cd_rtm_download = json.assets[0].browser_download_url;
            });
        releaseinforequest.open("GET", "https://api.github.com/repos/BoxxyDEV/SonicCD-RTM-Tool-Xbox360RGH/releases/latest");
        releaseinforequest.send();
    }
    if (projectnum == 0) {
        const releaseinforequest = new XMLHttpRequest();
        releaseinforequest.addEventListener("load", function (){ 
            var json = JSON.parse(releaseinforequest.responseText);
                changelog_title_hedgehog_gtav.innerText = "V" + json.tag_name + " changelog";
                changelog_hedgehog_gtav.innerText = json.body;
                if (json.assets[0].name.indexOf("Xbox") != -1)
                {
                    console.info("0: Xbox 360");
                    hedgehog_menu_GTA5_X360_download = json.assets[0].browser_download_url;
                }
                if (json.assets[0].name.indexOf("PlayStation") != -1)
                {
                    console.info("0: PS3");
                    hedgehog_menu_GTA5_PS3_download = json.assets[0].browser_download_url;
                }
                if (json.assets[0].name.indexOf("Script") != -1)
                {
                    console.info("0: Scripts");
                    hedgehog_menu_GTA5_script_download = json.assets[0].browser_download_url;
                }
                if (json.assets[1].name.indexOf("Xbox") != -1)
                {
                    console.info("1: Xbox 360");
                    hedgehog_menu_GTA5_X360_download = json.assets[1].browser_download_url;
                }
                if (json.assets[1].name.indexOf("PlayStation") != -1)
                {
                    console.info("1: PS3");
                    hedgehog_menu_GTA5_PS3_download = json.assets[1].browser_download_url;
                }
                if (json.assets[1].name.indexOf("Script") != -1)
                {
                    console.info("1: Scripts");
                    hedgehog_menu_GTA5_script_download = json.assets[1].browser_download_url;
                }
                if (json.assets[2].name.indexOf("Xbox") != -1)
                {
                    console.info("2: Xbox 360");
                    hedgehog_menu_GTA5_X360_download = json.assets[2].browser_download_url;
                }
                if (json.assets[2].name.indexOf("PlayStation") != -1)
                {
                    console.info("2: PS3");
                    hedgehog_menu_GTA5_PS3_download = json.assets[2].browser_download_url;
                }
                if (json.assets[2].name.indexOf("Script") != -1)
                {
                    console.info("2: Scripts");
                    hedgehog_menu_GTA5_script_download = json.assets[2].browser_download_url;
                }
            });
        releaseinforequest.open("GET", "https://api.github.com/repos/BoxxyDEV/Boxuga-ModLoader/releases/latest");
        releaseinforequest.send();
    }
    
}


var gta5_modsprofile = "https://www.gta5-mods.com/users/boxxy";
var twitter_url = "https://twitter.com/Boxuga_hedgehog";
var youtube_boxuga_url = "https://youtube.com/@Boxuga";
var youtube_boxugatwo_url = "https://youtube.com/@Boxuga2";
var youtube_boxugathree_url = "https://youtube.com/@Boxuga3";
var github_url = "https://github.com/BoxxyDEV";
var tiktok_url = "https://www.tiktok.com/@boxuga_hedgehog";
var twitch_url = "https://twitch.tv/Boxuga";
var console_mods = "/mods/console/";
var sonic_cd_rtm_download = sonic_cd_rtm_releases;
var sonic_cd_rtm_releases = "https://github.com/BoxxyDEV/SonicCD-RTM-Tool-Xbox360RGH/releases/";
var hedgehog_menu_GTA5_PS3_download = hedgehog_menu_GTA5_releases;
var hedgehog_menu_GTA5_X360_download = hedgehog_menu_GTA5_releases;
var hedgehog_menu_GTA5_script_download = hedgehog_menu_GTA5_releases;
var hedgehog_menu_GTA5_releases = "https://github.com/BoxxyDEV/Boxuga-ModLoader/releases";




if (document.location.pathname == '/' || document.location.pathname == '/index.html')
{
    var mobilesetbuttons = document.getElementById('mobilesetbuttons');
    var desktopsetbuttons = document.getElementById('desktopsetbuttons');
    var HomeButton = document.getElementById('HomeButton');
    HomeButton.style.backgroundColor = "black";
}
else if (document.location.pathname == '/about/' || document.location.pathname == '/about/index.html')
{
    var AboutMeButton = document.getElementById('AboutMeButton');
    AboutMeButton.style.backgroundColor = "black";
}
else if (document.location.pathname == '/mods/console/' || document.location.pathname == '/mods/console/index.html' || document.location.pathname == '/mods/console') 
{
    var changelog_title_sonic_cd = document.getElementById('changelogtitlesoniccd');
    var changelog_sonic_cd = document.getElementById('changelogsoniccd');
    var changelog_title_hedgehog_gtav = document.getElementById('changelogtitlehedgehoggtav');
    var changelog_hedgehog_gtav = document.getElementById('changeloghedgehoggtav');
    GitHubReleaseinfo(0);
    GitHubReleaseinfo(1);
}
