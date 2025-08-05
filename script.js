document.addEventListener("DOMContentLoaded", function () {
    // Réinitialise le menu si actif (au cas où tu viens d'une autre page)
    document.getElementById("menu")?.classList.remove("active");
    document.querySelector(".menu-toggle")?.classList.remove("active");

    if (document.getElementById("esign-container")) loadFiles("esign", "esign-container");
    if (document.getElementById("dns-container")) loadFiles("dns", "dns-container");
    if (document.getElementById("certificate-container")) loadFiles("certificate", "certificate-container");
    if (document.getElementById("ipa-container")) loadFiles("ipa", "ipa-container");
});

function loadFiles(type, containerId) {
    const container = document.getElementById(containerId);

    const files = {
        esign: [
            { "title": "ANBANG INSURANCE LTD", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/5b52ba08bc972a706778b53f94ab9ea7" },
  { "title": "ARADA DEVELOPMENTS LLC", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/d8cd7518b0867e3bd14c640747afed91" },
  { "title": "AVIATION INFORMATION AND TELECOMMUNICATIONS JSC", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/fa203dd383056e2fafe5f5784aee8d6b" },
  { "title": "Bank of Chongqing Co.,Ltd", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/e162dd54b6339f8e4964e7f7aa323dc3" },
  { "title": "Beijing Esensoft Co., Ltd", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/0502857f729a4ef673a1d67a4a2525e3" },
  { "title": "BMW Brilliance Automotive Ltd", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/bf5dda1c073b4c4f3ebf85424461e387" },
  { "title": "China CITIC Bank Corporation Limited", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/e59635921aa080118b1d0fa99afa49fc" },
  { "title": "China Continent Property Casualty Insurance Company Ltd", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/96f25191c656eedb4786332a20da8610" },
  { "title": "China Everbright Limited", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/f71c5e58f9b5e106c86d21c34f834a83" },
  { "title": "China Mobile Group Shandong Co., Ltd", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/aa0e9c38cf312b7a5e9322682d9cd6a4" },
  { "title": "China Railway Eryuan Engineering Group Co., Ltd", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/7db2765ed463955c17bc03a72b172c98" },
  { "title": "Dtt Technology Co.,Ltd", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/1b7ff5204f0f56be0eb11b620f62bee9" },
  { "title": "GAC TOYOTA MOTOR CO.,LTD", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/b973cd99d4d966da52ed59ec946c614d" },
  { "title": "Gac Trumpchi Car Sales Co., Ltd.", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/6c994fdd20e2169075c59b020fab73d5" },
  { "title": "HDFC Bank Limited", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/e53d09e2e185e2ef406e5bd9af44d5a5" },
  { "title": "Henan Provincial Communications Planning Survey Design Institu", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/dd83add03b9e2e5ab54e4cc79b17014c" },
  { "title": "Kotak Mahindra Bank Ltd", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/369770769d1efabef99d4f379ed9b8bc" },
  { "title": "Ministere de l’Emploi de la Protection Sociale", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/701c29cd117a89c8d505a2e57e12ead7" },
  { "title": "Mylan Inc", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/264d398570b30431f0f1b3b75e0976d0" },
  { "title": "National Science Library,Chinese Academy  of Sciences", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/0e8e8c89646e5a813ae47eff13d33184" },
  { "title": "NREH ESTATE INFORMATION TECHNOLOGY CO.,LTD", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/d8026f364532425a2944b033dd0b9322" },
  { "title": "Rizhao Sunday Power Generation Co., Ltd", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/91f7c914e42972987b7683caee7f592e" },
  { "title": "Sun Life Everbright Life Insurance Co.,Ltd", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/baa4191df596ee31380ca21e4a8535bf" },
  { "title": "Sunshine Insurance Group Co., Ltd. 1", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/099e1beeffa50c4a110b1516250dfcfd" },
  { "title": "Sunshine Insurance Group Co., Ltd. 2", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/876d4adfa68aa0f2a2c046659f695fdc" },
  { "title": "TCL household Appliance Marketing Co., LTD", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/6f9d22e881588a37b923382357b0278a" },
  { "title": "VIETNAM POSTS AND TELECOMMUNICATIONS GROUP HO CHI MINH CITY TE", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/da9bd5253ebebb398a46b01959e6cbe1" },
  { "title": "Wuling Power Corporation", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/4bc182c5f3aa2d431bcd994a2299cef9" },
  { "title": "Zhuhaishi ShijiXintong Network Technology Co., Ltd", "image": "E-SIGN.png", "link": "itms-services://?action=download-manifest&url=https://loadly.io/app/plist/175680b4799871e34151ace876f62f71" }
  ],


  dns: [
    {
      title: "Vũ Văn Khơi DNS",
      image: "DNS.png",
      link: "https://khoindvn.io.vn/document/DNS/khoindns.mobileconfig?sign=1"
    },
    {
      title: "CF DNS",
      image: "DNS.png",
      link: "https://wsfteam.xyz/files/configurationprofiles/CFDNS-CP.mobileconfig"
    },
    {
      title: "mad DNS",
      image: "DNS.png",
      link: "https://wsfteam.xyz/files/configurationprofiles/madNS-CP.mobileconfig"
    },
    {
      title: "WSF DNS",
      image: "DNS.png",
      link: "https://wsfteam.xyz/files/configurationprofiles/WSF-CP.mobileconfig"
    },
            { title: "Scarlet DNS", image: "DNS.png", link: "https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FUH7NUanIQigWtvHlcCiP%2Fuploads%2FJzNmGetxENhGgzfZ8B85%2Fscarlet-dns.mobileconfig?alt=media&token=8af4cb3c-619d-4039-a8d5-1daaad4aa3cf" },

        ],
        certificate: [
    { "title": "❕ALL CERTIFICATES❕", "image": "CERTIFICATE.png", "link": "All Certificates.zip" },
    { "title": "ANBANG INSURANCE LTD", "image": "CERTIFICATE.png", "link": "ANBANG INSURANCE LTD.zip" },
    { "title": "ARADA DEVELOPMENTS LLC", "image": "CERTIFICATE.png", "link": "ARADA DEVELOPMENTS LLC.zip" },
    { "title": "AVIATION INFORMATION AND TELECOMMUNICATIONS JSC", "image": "CERTIFICATE.png", "link": "AVIATION INFORMATION AND TELECOMMUNICATIONS JSC.zip" },
    { "title": "Bank of Chongqing Co.,Ltd", "image": "CERTIFICATE.png", "link": "Bank of Chongqing Co.,Ltd.zip" },
{ "title": "Beijing Esensoft Co., Ltd", "image": "CERTIFICATE.png", "link": "Beijing Esensoft Co., Ltd.zip" },
{ "title": "BMW Brilliance Automotive Ltd", "image": "CERTIFICATE.png", "link": "BMW Brilliance Automotive Ltd.zip" },
    { "title": "China CITIC Bank Corporation Limited", "image": "CERTIFICATE.png", "link": "China CITIC Bank Corporation Limited.zip" },
    { "title": "China Continent Property Casualty Insurance Company Ltd", "image": "CERTIFICATE.png", "link": "China Continent Property   Casualty Insurance Company Ltd.zip" },
    { "title": "China Everbright Limited", "image": "CERTIFICATE.png", "link": "China Everbright Limited.zip" },
    { "title": "China Mobile Group Shandong Co., Ltd", "image": "CERTIFICATE.png", "link": "China Mobile Group Shandong Co., Ltd.zip" },
{ "title": "China Railway Eryuan Engineering Group Co., Ltd", "image": "CERTIFICATE.png", "link": "China Railway Eryuan Engineering Group Co., Ltd.zip" },
{ "title": "Dtt Technology Co.,Ltd", "image": "CERTIFICATE.png", "link": "Dtt Technology Co.,Ltd.zip" },
    { "title": "GAC TOYOTA MOTOR CO.,LTD.", "image": "CERTIFICATE.png", "link": "GAC TOYOTA MOTOR CO.,LTD.zip" },
    { "title": "Gac Trumpchi Car Sales Co., Ltd.", "image": "CERTIFICATE.png", "link": "Gac Trumpchi Car Sales Co., Ltd.zip" },
{ "title": "HDFC Bank Limited", "image": "CERTIFICATE.png", "link": "HDFC Bank Limited.zip" },
    { "title": "Henan Provincial Communications Planning Survey Design Institute", "image": "CERTIFICATE.png", "link": "Henan_Provincial_Communications_Planning_Survey_Design_Institu.zip" },
    { "title": "Kotak Mahindra Bank Ltd", "image": "CERTIFICATE.png", "link": "Kotak Mahindra Bank Ltd.zip" },
    { "title": "Ministere de l’Emploi de la Protection Sociale", "image": "CERTIFICATE.png", "link": "Ministere de I Emploi de la Protection Sociale.zip" },
    { "title": "Mylan Inc", "image": "CERTIFICATE.png", "link": "Mylan Inc.zip" },
{ "title": "National Science Library,Chinese Academy  of Sciences", "image": "CERTIFICATE.png", "link": "National Science Library,Chinese Academy  of Sciences.zip" },
{ "title": "NREH ESTATE INFORMATION TECHNOLOGY CO.,LTD", "image": "CERTIFICATE.png", "link": "NREH ESTATE INFORMATION TECHNOLOGY CO.,LTD.zip" },
    { "title": "Rizhao Sunday Power Generation Co., Ltd", "image": "CERTIFICATE.png", "link": "Rizhao Sunday Power Generation Co., Ltd.zip" },
    { "title": "Sun Life Everbright Life Insurance Co.,Ltd", "image": "CERTIFICATE.png", "link": "Sun Life Everbright Life Insurance Co.,Ltd.zip" },
    { "title": "Sunshine Insurance Group Co., Ltd. 1", "image": "CERTIFICATE.png", "link": "Sunshine Insurance Group Co., Ltd 1.zip" },
    { "title": "Sunshine Insurance Group Co., Ltd. 2", "image": "CERTIFICATE.png", "link": "Sunshine Insurance Group Co., Ltd 2.zip" },
{ "title": "TCL household Appliance Marketing Co., LTD", "image": "CERTIFICATE.png", "link": "TCL household Appliance Marketing Co., LTD.zip" },
    { "title": "VIETNAM POSTS AND TELECOMMUNICATIONS GROUP HO CHI MINH CITY TE", "image": "CERTIFICATE.png", "link": "VIETNAM_POSTS_AND_TELECOMMUNICATIONS_GROUP_HO_CHI_MINH_CITY_TE.zip" },
    { "title": "Wuling Power Corporation", "image": "CERTIFICATE.png", "link": "Wuling Power Corporation.zip" },
    { "title": "Zhuhaishi ShijiXintong Network Technology Co., Ltd", "image": "CERTIFICATE.png", "link": "Zhuhaishi ShijiXintong Network Technology Co., Ltd.zip" }
        ],
        ipa: [
    { title: "Spotify +", image: "Spotify.png", link: "https://dl.dropboxusercontent.com/scl/fi/rhotddqms5lh53kkyiz3p/Spotify.ipa?rlkey=tohj8p96kkabc9tfl3uqpw1ne&st=5u9igeya" }
        ]
    };

    files[type].forEach(file => {
        const item = document.createElement("div");
        item.classList.add("esign-item");
        item.onclick = () => {
    const a = document.createElement('a');
    a.href = file.link;
    a.download = ''; // Téléchargement immédiat
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

        const image = document.createElement("img");
        image.src = file.image;
        image.alt = file.title;

        const title = document.createElement("span");
        title.textContent = file.title;

        item.appendChild(image);
        item.appendChild(title);
        container.appendChild(item);
    });
}

function toggleMenu() {
    const menu = document.getElementById("menu");
    const toggle = document.querySelector(".menu-toggle");

    menu.classList.toggle("active");
    toggle.classList.toggle("active");
}
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
