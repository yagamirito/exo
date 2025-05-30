const byunBaekhyun = {
    name: "변백현",
    role: "EXO 메인보컬 & 귀여움 담당",
    desc: "변백현은 대한민국의 가수이자 EXO의 메인보컬로, 뛰어난 가창력과 무대 장악력, 그리고 밝고 긍정적인 에너지로 많은 사랑을 받고 있습니다. 무대 위에서는 카리스마 넘치지만, 무대 아래에서는 장난기 많고 귀여운 매력으로 팬들의 마음을 사로잡아요. 솔로 가수로도 활발히 활동하며, 다양한 예능과 드라마 OST에도 참여했습니다.",
    img: "https://i.namu.wiki/i/qCZ78LSV2kf039rief_7IS8BZwoSEwczbCb8c6PhAmgCVKWGRQu_4OBu50Z1X610uXbXoISiQW9A2Ra4DR3icA.webp",
    instagram: "https://www.instagram.com/baekhyunee_exo/",
    info: [
        "생년월일: 1992년 5월 6일",
        "소속사: SM엔터테인먼트",
        "소속 그룹: EXO, SuperM",
        "데뷔: 2012년 EXO 멤버로 데뷔",
        "솔로 데뷔: 2019년 미니앨범 'City Lights'",
        "대표곡: UN Village, Candy, Bambi 등",
        "취미: 게임, 노래, 먹방, 운동",
        "특기: 고음, 애교, 팬 사랑, 밝은 에너지",
        "별명: 백현이, 변백귀, 햇살미소, 백현짱",
        "공식 인스타그램: @baekhyunee_exo"
    ]
};

function renderProfile() {
    const profile = document.getElementById('profile');
    profile.className = "profile-card";
    profile.innerHTML = `
        <a href="${byunBaekhyun.instagram}" target="_blank" class="profile-img-link" title="인스타그램으로 이동">
            <img class="profile-img" src="${byunBaekhyun.img}" alt="변백현 사진">
        </a>
        <div class="profile-name">${byunBaekhyun.name}</div>
        <div class="profile-role">${byunBaekhyun.role}</div>
        <div class="profile-desc">${byunBaekhyun.desc}</div>
        <div class="profile-info">
            ${byunBaekhyun.info.map(item => `<div>• ${item}</div>`).join('')}
        </div>
        <div class="profile-instagram">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" width="22" height="22">
            <a href="${byunBaekhyun.instagram}" target="_blank">@baekhyunee_exo</a>
        </div>
    `;
}

window.onload = renderProfile;