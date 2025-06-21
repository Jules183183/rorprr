document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("esign-container")) loadFiles("esign", "esign-container");
    if (document.getElementById("dns-container")) loadFiles("dns", "dns-container");
    if (document.getElementById("certificate-container")) loadFiles("certificate", "certificate-container");
    if (document.getElementById("ipa-container")) loadFiles("ipa", "ipa-container");
});

function loadFiles(type, containerId) {
    const container = document.getElementById(containerId);

    const files = {
        esign: [
            { title: "ANBANG INSURANCE LTD", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250326223802845/8b2c126d-8aac-276b-0ec4-50ec784aea8d/app.plist" },
            { title: "ARADA DEVELOPMENTS LLC", image: "E-SIGN.png", link: "ARADA DEVELOPMENTS LLC.zip" },
            { title: "AVIATION INFORMATION AND TELECOMMUNICATIONS JSC", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327001852842/9680a222-3278-8d42-568e-dd8e5f8d7efc/app.plist" },
            { title: "Bank of Chongqing Co.,Ltd", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327002025403/dd12e144-4203-40a1-eb4f-438c3168b0cf/app.plist" },
            { title: "China CITIC Bank Corporation Limited", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327002121528/6e42c5c7-d0aa-5b7a-9643-698d9eb6d034/app.plist" },
            { title: "China Continent Property Casualty Insurance Company Ltd 1", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327002244521/658193a3-eb3b-06a7-3871-275467a20406/app.plist" },
            { title: "China Continent Property Casualty Insurance Company Ltd 2", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327002359171/b8715ae0-224a-e960-48c2-64b321f0217d/app.plist" },
            { title: "China Everbright Limited", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327002515371/ac8eccdc-2fe6-c175-c253-22d35b5dba6c/app.plist" },
            { title: "Henan Provincial Communications Planning Survey Design Institu", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327002813891/31a077e6-bc10-34bc-73cf-ea40c913a781/app.plist" },
            { title: "China Mobile Group Shandong Co., Ltd", image: "E-SIGN.png", link: "MMM" },
            { title: "Kotak Mahindra Bank Ltd", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://sign.applep12.com/GetPlist/67be5b02-a852-4d01-001e-bfb139c80909" },
            { title: "Ministere de l'Emploi de la Protection Sociale", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327002934391/ff581822-b2f3-5baa-bc31-37f6146c210f/app.plist" },
            { title: "Mylan Inc", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327003134358/761d53b7-62ce-bd91-337f-89bc9af00d33/app.plist" },
            { title: "Rizhao Sunday Power Generation Co., Ltd", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327003332552/ef3bc6ff-ca07-f26c-14e3-1cb218cbf219/app.plist" },
            { title: "Sun Life Everbright Life Insurance Co.,Ltd", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327003546516/1f44a8e9-6567-e3e5-6cb1-ba59cbd33244/app.plist" },
            { title: "Sunshine Insurance Group Co., Ltd 1", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327003652832/1455777a-5ee3-0193-4fa6-8164a9f51f3c/app.plist" },
            { title: "Sunshine Insurance Group Co., Ltd 2", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327003829284/859fac3b-91cd-52b6-fa10-8b829f47cefd/app.plist" },
            { title: "Sunshine Insurance Group Co., Ltd 3", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327003917270/264f2373-c069-3a7b-50dd-2d0983a4e3b9/app.plist" },
            { title: "VIETNAM POSTS AND TELECOMMUNICATIONS GROUP HO CHI MINH CITY TE", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327004004244/669cafed-5e58-b3a5-3866-eb644fa0a5a6/app.plist" },
            { title: "Zhuhaishi ShijiXintong Network Technology Co., Ltd", image: "E-SIGN.png", link: "itms-services://?action=download-manifest&url=https://ipa.ipasign.cc:2052/sign/20250327004100212/f631f23a-cc0e-ad64-94ca-1bdb7357aa3c/app.plist" },

        ],
        dns: [

            { title: "Vũ Văn Khơi DNS", image: "DNS.png", link: "https://khoindvn.io.vn/document/DNS/khoindns.mobileconfig?sign=1" },
            { title: "Nezuz DNS", image: "DNS.png", link: "https://www.mediafire.com/file/orgyagx4bu7n91s/NezusDNS_V2_IOS_18.mobileconfig/file?dkey=xcl8fcsuhnv&r=1780" },
            { title: "Flux DNS", image: "DNS.png", link: "https://www.mediafire.com/file/tj89hirqfb81g80/flux-anti.mobileconfig/file?dkey=cm7fwawsek7&r=794" },
            { title: "Scarlet DNS", image: "DNS.png", link: "https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FUH7NUanIQigWtvHlcCiP%2Fuploads%2FJzNmGetxENhGgzfZ8B85%2Fscarlet-dns.mobileconfig?alt=media&token=8af4cb3c-619d-4039-a8d5-1daaad4aa3cf" },

        ],
        certificate: [
    { "title": "❕ALL CERTIFICATES❕", "image": "CERTIFICATE.png", "link": "All Certificates.zip" },
    { "title": "ANBANG INSURANCE LTD", "image": "CERTIFICATE.png", "link": "ANBANG INSURANCE LTD.zip" },
    { "title": "ARADA DEVELOPMENTS LLC", "image": "CERTIFICATE.png", "link": "ARADA DEVELOPMENTS LLC.zip" },
    { "title": "AVIATION INFORMATION AND TELECOMMUNICATIONS JSC", "image": "CERTIFICATE.png", "link": "AVIATION INFORMATION AND TELECOMMUNICATIONS JSC.zip" },
    { "title": "Bank of Chongqing Co.,Ltd", "image": "CERTIFICATE.png", "link": "Bank of Chongqing Co.,Ltd.zip" },
    { "title": "China CITIC Bank Corporation Limited", "image": "CERTIFICATE.png", "link": "China CITIC Bank Corporation Limited.zip" },
    { "title": "China Continent Property Casualty Insurance Company Ltd 1", "image": "CERTIFICATE.png", "link": "China Continent Property   Casualty Insurance Company Ltd.zip" },
    { "title": "China Continent Property Casualty Insurance Company Ltd 2", "image": "CERTIFICATE.png", "link": "China Continent Property   Casualty Insurance Company Ltd 2.zip" },
    { "title": "China Everbright Limited", "image": "CERTIFICATE.png", "link": "China Everbright Limited.zip" },
    { "title": "China Mobile Group Shandong Co., Ltd", "image": "CERTIFICATE.png", "link": "China Mobile Group Shandong Co., Ltd.zip" },
    { "title": "GAC TOYOTA MOTOR CO.,LTD.", "image": "CERTIFICATE.png", "link": "GAC TOYOTA MOTOR CO.,LTD.zip" },
    { "title": "Gac Trumpchi Car Sales Co., Ltd.", "image": "CERTIFICATE.png", "link": "Gac Trumpchi Car Sales Co., Ltd.zip" },
{ "title": "HDFC Bank Limited", "image": "CERTIFICATE.png", "link": "HDFC Bank Limited.zip" },
    { "title": "Henan Provincial Communications Planning Survey Design Institute", "image": "CERTIFICATE.png", "link": "Henan_Provincial_Communications_Planning_Survey_Design_Institu.zip" },
    { "title": "Kotak Mahindra Bank Ltd", "image": "CERTIFICATE.png", "link": "Kotak Mahindra Bank Ltd.zip" },
    { "title": "Ministere de l’Emploi de la Protection Sociale", "image": "CERTIFICATE.png", "link": "Ministere de I Emploi de la Protection Sociale.zip" },
    { "title": "Mylan Inc", "image": "CERTIFICATE.png", "link": "Mylan Inc.zip" },
{ "title": "National Science Library,Chinese Academy  of Sciences", "image": "CERTIFICATE.png", "link": "National Science Library,Chinese Academy  of Sciences.zip" },
    { "title": "Rizhao Sunday Power Generation Co., Ltd", "image": "CERTIFICATE.png", "link": "Rizhao Sunday Power Generation Co., Ltd.zip" },
    { "title": "Sun Life Everbright Life Insurance Co.,Ltd", "image": "CERTIFICATE.png", "link": "Sun Life Everbright Life Insurance Co.,Ltd.zip" },
    { "title": "Sunshine Insurance Group Co., Ltd. 1", "image": "CERTIFICATE.png", "link": "Sunshine Insurance Group Co., Ltd 1.zip" },
    { "title": "Sunshine Insurance Group Co., Ltd. 2", "image": "CERTIFICATE.png", "link": "Sunshine Insurance Group Co., Ltd 2.zip" },
    { "title": "VIETNAM POSTS AND TELECOMMUNICATIONS GROUP HO CHI MINH CITY TE", "image": "CERTIFICATE.png", "link": "VIETNAM_POSTS_AND_TELECOMMUNICATIONS_GROUP_HO_CHI_MINH_CITY_TE.zip" },
    { "title": "Wuling Power Corporation", "image": "CERTIFICATE.png", "link": "Wuling Power Corporation.zip" },
    { "title": "Zhuhaishi ShijiXintong Network Technology Co., Ltd", "image": "CERTIFICATE.png", "link": "Zhuhaishi ShijiXintong Network Technology Co., Ltd.zip" }
        ],
        ipa: [
    { title: "Spotify +", image: "Spotify.png", link: "m" }
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
