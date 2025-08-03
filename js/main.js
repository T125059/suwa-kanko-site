const lists = [
  {
    name: '諏訪湖',
    img: 'img/suwako.jpg', 
    desc: '長野県最大の湖です。湖畔には温泉や美術館が点在し、四季折々の美しい景色が楽しめます。',
    url: 'https://www.suwakanko.jp/story/%E8%AB%8F%E8%A8%AA%E6%B9%96%E3%83%BB%E7%BE%8E%E8%A1%93%E9%A4%A8/' 
  },
  {
    name: '霧ヶ峰高原',
    img: 'img/kirigamine.jpg',
    desc: '夏にはニッコウキスゲが咲き誇る広大な高原です。ハイキングコースとしても人気です。',
    url: 'https://kirigamine.suwakanko.jp'
  },
  {
    name: '諏訪大社 上社本宮',
    img: 'img/suwa-taisha.jpg',
    desc: '全国に一万以上ある諏訪神社の総本社です。荘厳な雰囲気の中で歴史を感じることができます。',
    url: 'https://suwataisha.or.jp'
  }
];

const menu = document.getElementById('recommend-list');

for (let i = 0; i < lists.length; i++) {
  const spot = lists[i];

  const content = `
    <a href="${spot.url}" target="_blank" class="spot-card">
      <img src="${spot.img}" alt="${spot.name}" class="spot-card-img">
      <div class="spot-card-content">
        <h3 class="spot-card-title">${spot.name}</h3>
        <p class="spot-card-desc">${spot.desc}</p>
      </div>
    </a>
  `;
  
  menu.insertAdjacentHTML('beforeend', content);
}


console.log('おすすめ観光スポットの表示処理が完了しました。');

