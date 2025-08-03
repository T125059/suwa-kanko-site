const allSpots = [
  { name: '諏訪湖', img: 'img/suwako.jpg', desc: '長野県最大の湖です。湖畔には温泉や美術館が点在し、四季折々の美しい景色が楽しめます。', category: 'nature', url: 'https://www.suwakanko.jp/story/%E8%AB%8F%E8%A8%AA%E6%B9%96%E3%83%BB%E7%BE%8E%E8%A1%93%E9%A4%A8/' },
  { name: '霧ヶ峰高原', img: 'img/kirigamine.jpg', desc: '夏にはニッコウキスゲが咲き誇る広大な高原です。ハイキングコースとしても人気です。', category: 'nature', url: 'https://kirigamine.suwakanko.jp' },
  { name: '車山高原', img: 'img/kurumayama.jpg', desc: 'リフトで山頂まで行ける、360度のパノラマが魅力の高原です。', category: 'nature', url: 'https://kurumayama.com/tourism/' },
  { name: '諏訪大社 上社本宮', img: 'img/suwa-taisha.jpg', desc: '全国に一万以上ある諏訪神社の総本社です。荘厳な雰囲気の中で歴史を感じることができます。', category: 'history', url: 'https://suwataisha.or.jp' },
  { name: '高島城', img: 'img/takashima-castle.jpg', desc: '「諏訪の浮城」とも呼ばれた美しい城で、桜の名所でもあります。', category: 'history', url: 'https://www.suwakanko.jp/takashimajo/' },
  { name: '北澤美術館', img: 'img/kitazawa-museum.jpg', desc: 'アール・ヌーヴォーのガラス工芸と現代日本画が収蔵されています。', category: 'art', url: 'https://kitazawa-museum.or.jp/' },
];

const spotList = document.getElementById('spot-list');

function displaySpots(spots) {
  spotList.innerHTML = ''; 

  for (let i = 0; i < spots.length; i++) {
    const spot = spots[i];
    const content = `
      <a href="${spot.url}" target="_blank" class="spot-card">
        <img src="${spot.img}" alt="${spot.name}" class="spot-card-img">
        <div class="spot-card-content">
          <h3 class="spot-card-title">${spot.name}</h3>
          <p class="spot-card-desc">${spot.desc}</p>
        </div>
      </a>
    `;
    spotList.insertAdjacentHTML('beforeend', content);
  }
}

displaySpots(allSpots);


console.log('観光スポット一覧ページの準備ができました。');


