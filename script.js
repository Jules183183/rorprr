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
    { "title": "❕ALL CERTIFICATES❕", "image": "CERTIFICATE.png", "alink": "https://www.mediafire.com/file/nfi3hn9yut22ktk/all_certs/file" },
{ "title": "Aldo Group Inc", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/w76aar7bgywxkqo/Aldo_Group_Inc.zip/file" },
    { "title": "ANBANG INSURANCE LTD", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/2nef4xou83v61ql/ANBANG_INSURANCE_LTD.zip/file" },
    { "title": "ARADA DEVELOPMENTS LLC", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/phnjilu144gihim/ARADA_DEVELOPMENTS_LLC.zip/file" },
    { "title": "AVIATION INFORMATION AND TELECOMMUNICATIONS JSC", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/aa1k9c2mazqr6g7/AVIATION_INFORMATION_AND_TELECOMMUNICATIONS_JSC.zip/file" },
    { "title": "Bank of Chongqing Co.,Ltd", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/zpabva5qkede7zs/Bank_of_Chongqing_Co.%252CLtd.zip/file" },
    { "title": "Beijing Reci Laser Technology Co., Ltd. 1", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/fp474ad96829agu/Beijing_Reci_Laser_Technology_Co.%252C_Ltd.zip/file" },
    { "title": "Beijing Reci Laser Technology Co., Ltd. 2", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/wgcbpgs2zglnjuo/Beijing_Reci_Laser_Technology_Co.%252C_Ltd_2.zip/file" },
    { "title": "China CITIC Bank Corporation Limited", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/xyx6yf32mlu0kwf/China_CITIC_Bank_Corporation_Limited.zip/file" },
    { "title": "China Continent Property Casualty Insurance Company Ltd 1", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/4cbe4eo4rzxtifm/China_Continent_Property_Casualty_Insurance_Company_Ltd.zip/file" },
    { "title": "China Continent Property Casualty Insurance Company Ltd 2", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/1kr76lfjwf0qlxu/China_Continent_Property_Casualty_Insurance_Company_Ltd_2.zip/file" },
    { "title": "China Everbright Limited", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/ubjvmtqix6nygnc/China_Everbright_Limited.zip/file" },
    { "title": "China Mobile Group Jiangsu Company Limited", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/9n02sn41i0w1yah/China_Mobile_Group_Jiangsu_Company_Limited.zip/file" },
    { "title": "China Mobile Group Shandong Co., Ltd", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/gkdvec7wramwrur/China_Mobile_Group_Shandong_Co.%252C_Ltd.zip/file" },
    { "title": "China Mobile Suzhou Software Technology Co.,Ltd", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/x9xm292bwi9zj9l/China_Mobile_Suzhou_Software_Technology_Co.%252CLtd.zip/file" },
    { "title": "CITIC-Prudential Life Insurance Company Limited", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/vzuwfpti97yuv3f/CITIC-Prudential_Life_Insurance_Company_Limited.zip/file" },
    { "title": "Gac Trumpchi Car Sales Co., Ltd.", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/9oevgg5tvqeszv7/Gac_Trumpchi_Car_Sales_Co.%252C_Ltd.zip/file" },
    { "title": "Guangzhou second bus Co., Ltd.", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/iwcvxemonk5z1jw/Guangzhou_second_bus_Co.%252C_Ltd.zip/file" },
    { "title": "Hangzhou Public Traffic Group Co., Ltd.", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/g9rrnm7kwy3jq1h/Hangzhou_Public_Traffic_Group_Co.%252C_Ltd.zip/file" },
    { "title": "HDFC Life Insurance Company Limited 1", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/b7jao80vkfw6t22/HDFC_Life_Insurance_Company_Limited.zip/file" },
    { "title": "HDFC Life Insurance Company Limited 2", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/1d9wzon23vzzm4l/HDFC_Life_Insurance_Company_Limited_2.zip/file" },
    { "title": "HDFC Life Insurance Company Limited 3", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/zs9e50ag3dmfai7/HDFC_Life_Insurance_Company_Limited_3.zip/file" },
    { "title": "HDFC Life Insurance Company Limited 4", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/i62jr25rp1c51h2/HDFC_Life_Insurance_Company_Limited_4.zip/file" },
    { "title": "HDFC Life Insurance Company Limited 5", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/ntmvmz8c4jo264t/HDFC_Life_Insurance_Company_Limited_5.zip/file" },
    { "title": "Henan Provincial Communications Planning Survey Design Institute", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/5jtq5sg7sem2k1g/Henan_Provincial_Communications_Planning_Survey_Design_Institu.zip/file" },
    { "title": "Kotak Mahindra Bank Ltd", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/t0lpsp2h1w5jfgq/Kotak_Mahindra_Bank_Ltd.zip/file" },
    { "title": "Manulife-Sinochem Life Insurance Co., Ltd.", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/plo26zkc67xi0sz/Manulife-Sinochem_Life_Insurance_Co.%252C_Ltd.zip/file" },
    { "title": "Migu Digital Media Co. Ltd.", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/cq9ixvjvg09tl6y/Migu_Digital_Media_Co._Ltd.zip/file" },
    { "title": "Ministere de l’Emploi de la Protection Sociale", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/66hymkix338u1n3/Ministere_de_I_Emploi_de_la_Protection_Sociale.zip/file" },
    { "title": "Mylan Inc 1", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/lahrget3lbtgo6a/Mylan_Inc.zip/file" },
    { "title": "Mylan Inc 2", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/x17figx3xxbqdky/Mylan_Inc_2.zip/file" },
    { "title": "Rizhao Sunday Power Generation Co., Ltd", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/eiq7idwjyyvuhux/Rizhao_Sunday_Power_Generation_Co.%252C_Ltd.zip/file" },
    { "title": "SANY Group Co.,Ltd", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/bze3l1884optj2y/SANY_Group_Co.%252CLtd.zip/file" },
    { "title": "ShaanXi Highway Traffic Technology Development And Consulting Co.", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/e4l6etci3hokb20/ShaanXi_Highway_Traffic_Technology_Development_And_Consulting_Co.zip/file" },
    { "title": "shaanxi heavy duty automobile co.,ltd", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/0wbx0j1ab2bm6ux/shaanxi_heavy_duty_automobile_co.%252Cltd.zip/file" },
    { "title": "SHANGHAI RURAL COMMERCIAL BANK CO., LTD.", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/crs63swoaage0pi/SHANGHAI_RURAL_COMMERCIAL_BANK_CO.%252C_LTD.zip/file" },
    { "title": "Shanghai Construction No.2 (Group) Co.,Ltd", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/7brig87sm34uldz/Shanghai_Construction_No.2_%2528Group%2529_Co.%252CLtd.zip/file" },
    { "title": "Shanghai Foreign Aviation Service Co., Ltd.", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/vwoibr0uysnebbr/Shanghai_Foreign_Aviation_Service_Co.%252C_Ltd.zip/file" },
    { "title": "Social Governance Coordination Center of Haicang District, Xiamen", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/xrjjtll0a0hf1t7/Social_Governance_Coordination_Center_of_Haicang_District%252CXiamen.zip/file" },
    { "title": "Sun Life Everbright Life Insurance Co.,Ltd", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/sq8t4p36yaf3nif/Sun_Life_Everbright_Life_Insurance_Co.%252CLtd.zip/file" },
    { "title": "Sunshine Insurance Group Co., Ltd. 1", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/i5ru6nk03lqij9w/Sunshine_Insurance_Group_Co.%252C_Ltd.zip/file" },
    { "title": "Sunshine Insurance Group Co., Ltd. 2", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/5abludccxf4iog8/Sunshine_Insurance_Group_Co.%252C_Ltd_2.zip/file" },
    { "title": "Sunshine Insurance Group Co., Ltd. 3", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/p4vqyyyunna4xwi/Sunshine_Insurance_Group_Co.%252C_Ltd_3.zip/file" },
    { "title": "Sunshine Insurance Group Co., Ltd. 4", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/blzccdg3czj2u0h/Sunshine_Insurance_Group_Co.%252C_Ltd_4.zip/file" },
    { "title": "Sunshine Insurance Group Co., Ltd. 5", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/lrn0i32q7tzzm41/Sunshine_Insurance_Group_Co.%252C_Ltd_5.zip/file" },
    { "title": "Sunshine Insurance Group Co., Ltd. 6", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/abv2nen4i6fn1f6/Sunshine_Insurance_Group_Co.%252C_Ltd_6.zip/file" },
    { "title": "Tianwen Digital Media Technology (Hunan) Co., Ltd.", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/srrj74q32wsp63t/Tianwen_Digital_Media_Technology_%2528Hunan%2529_Co.%252C_Ltd.zip/file" },
    { "title": "TVMining Media Technology Co., Ltd.", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/v5x5qr3z3ghywjk/TVMining_Media_Technology_Co.%252C_Ltd.zip/file" },
    { "title": "VIETNAM POSTS AND TELECOMMUNICATIONS GROUP HO CHI MINH CITY TE", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/1h6ueimjea1ofvb/VIETNAM_POSTS_AND_TELECOMMUNICATIONS_GROUP_HO_CHI_MINH_CITY_TE.zip/file" },
    { "title": "XCMG Foundation Construction Machinery Co., Ltd.", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/p489gfolwx6j4lp/XCMG_Foundation_Construction_Machinery_Co.%252C_Ltd.zip/file" },
    { "title": "Zhuhaishi ShijiXintong Network Technology Co., Ltd", "image": "CERTIFICATE.png", "link": "https://www.mediafire.com/file/5cins3x0z493gbo/Zhuhaishi_ShijiXintong_Network_Technology_Co.%252C_Ltd.zip/file" }
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