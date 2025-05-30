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

// 컨페티 효과
function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const confettiCount = 120;
    const confettiColors = ["#e53935", "#ffb300", "#43a047", "#1e88e5", "#f06292", "#fff176"];
    const confetti = [];

    function randomColor() {
        return confettiColors[Math.floor(Math.random() * confettiColors.length)];
    }

    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * W,
            y: Math.random() * H - H,
            r: Math.random() * 6 + 4,
            d: Math.random() * confettiCount,
            color: randomColor(),
            tilt: Math.floor(Math.random() * 10) - 10,
            tiltAngleIncremental: (Math.random() * 0.07) + .05,
            tiltAngle: 0
        });
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        for (let i = 0; i < confettiCount; i++) {
            let c = confetti[i];
            ctx.beginPath();
            ctx.lineWidth = c.r;
            ctx.strokeStyle = c.color;
            ctx.moveTo(c.x + c.tilt + (c.r / 3), c.y);
            ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r);
            ctx.stroke();
        }
        update();
    }

    function update() {
        for (let i = 0; i < confettiCount; i++) {
            let c = confetti[i];
            c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
            c.x += Math.sin(0.01 * c.d);
            c.tiltAngle += c.tiltAngleIncremental;
            c.tilt = Math.sin(c.tiltAngle - (i % 3)) * 15;

            if (c.y > H) {
                confetti[i] = {
                    x: Math.random() * W,
                    y: -10,
                    r: c.r,
                    d: c.d,
                    color: randomColor(),
                    tilt: c.tilt,
                    tiltAngleIncremental: c.tiltAngleIncremental,
                    tiltAngle: c.tiltAngle
                };
            }
        }
    }

    function resizeCanvas() {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
    }

    window.addEventListener('resize', resizeCanvas);

    (function animateConfetti() {
        draw();
        requestAnimationFrame(animateConfetti);
    })();
}

// 페이지가 로드되면 프로필과 컨페티 모두 실행
window.onload = function() {
    renderProfile();
    startConfetti();
};
