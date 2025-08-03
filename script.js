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
            { "title": "ANBANG INSURANCE LTD", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "ARADA DEVELOPMENTS LLC", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "AVIATION INFORMATION AND TELECOMMUNICATIONS JSC", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "Bank of Chongqing Co.,Ltd", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "China CITIC Bank Corporation Limited", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "China Continent Property Casualty Insurance Company Ltd 1", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "China Continent Property Casualty Insurance Company Ltd 2", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "China Everbright Limited", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "China Mobile Group Shandong Co., Ltd", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "GAC TOYOTA MOTOR CO.,LTD.", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "Gac Trumpchi Car Sales Co., Ltd.", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "HDFC Bank Limited", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "Henan Provincial Communications Planning Survey Design Institute", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "Kotak Mahindra Bank Ltd", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "Ministere de l’Emploi de la Protection Sociale", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "Mylan Inc", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "National Science Library,Chinese Academy  of Sciences", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "Rizhao Sunday Power Generation Co., Ltd", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "Sun Life Everbright Life Insurance Co.,Ltd", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "Sunshine Insurance Group Co., Ltd. 1", "image": "E-SIGN.png", "link": "⬜️" },
{ "title": "Sunshine Insurance Group Co., Ltd. 2", "image": "E-SIGN.png", "link": "⬜️" },
{
      title: "VIETNAM POSTS AND TELECOMMUNICATIONS GROUP HO CHI MINH CITY TE",
      image: "E-SIGN.png",
      link: "⬜️"
    },
    {
      title: "Wuling Power Corporation",
      image: "E-SIGN.png",
      link: "⬜️"
    },
    {
      title: "Zhuhaishi ShijiXintong Network Technology Co., Ltd",
      image: "E-SIGN.png",
      link: "⬜️"
    }
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
    { "title": "China Continent Property Casualty Insurance Company Ltd 1", "image": "CERTIFICATE.png", "link": "China Continent Property   Casualty Insurance Company Ltd.zip" },
    { "title": "China Continent Property Casualty Insurance Company Ltd 2", "image": "CERTIFICATE.png", "link": "China Continent Property   Casualty Insurance Company Ltd 2.zip" },
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
{ "title": "TCL household Appliance Marketing Co., LTD.zip", "image": "CERTIFICATE.png", "link": "TCL household Appliance Marketing Co., LTD.zip" },
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
