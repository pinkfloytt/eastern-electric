/* 院長イラストと、ポスターの組み立て処理（全ポスター共通） */
const SKIN='#f0c39c', SKIN_D='#b8815a', SCRUB='#2f6fb0', SCRUB_D='#123a63';
function limb(d,w,col,dark){return `<path d="${d}" fill="none" stroke="${dark}" stroke-width="${w+7}" stroke-linecap="round"/>
 <path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`}
function hand(x,y,r=13){return `<circle cx="${x}" cy="${y}" r="${r}" fill="${SKIN}" stroke="${SKIN_D}" stroke-width="3"/>`}

const ARMS={
 point:()=>limb('M150 152 C 176 150, 186 136, 184 116',26,SCRUB,SCRUB_D)
   +limb('M184 116 L 184 92',20,SKIN,SKIN_D)+hand(184,80)+limb('M184 74 L 184 52',9,SKIN,SKIN_D)
   +limb('M50 154 C 34 162, 28 178, 30 196',26,SCRUB,SCRUB_D)+hand(32,204,12),
 chin:()=>limb('M52 156 C 34 168, 30 186, 34 200',26,SCRUB,SCRUB_D)+hand(36,206,12)
   +limb('M150 156 C 168 158, 166 140, 150 130',26,SCRUB,SCRUB_D)
   +limb('M150 130 L 126 122',20,SKIN,SKIN_D)+hand(118,120,14),
 phone:()=>limb('M150 154 C 172 148, 176 126, 166 108',26,SCRUB,SCRUB_D)
   +limb('M166 108 L 156 92',20,SKIN,SKIN_D)+hand(152,84,14)
   +`<rect x="140" y="58" width="24" height="42" rx="6" transform="rotate(12 152 79)" fill="#1b2430" stroke="#000" stroke-width="3"/>`
   +limb('M50 154 C 34 162, 28 178, 30 196',26,SCRUB,SCRUB_D)+hand(32,204,12),
 thumb:()=>limb('M150 154 C 172 152, 178 136, 170 120',26,SCRUB,SCRUB_D)
   +limb('M170 120 L 158 108',20,SKIN,SKIN_D)+hand(152,102,15)+limb('M152 94 L 152 78',9,SKIN,SKIN_D)
   +limb('M50 154 C 34 162, 28 178, 30 196',26,SCRUB,SCRUB_D)+hand(32,204,12),
 open:()=>limb('M150 152 C 176 154, 190 168, 190 190',26,SCRUB,SCRUB_D)+hand(190,198,14)
   +limb('M50 152 C 24 154, 10 168, 10 190',26,SCRUB,SCRUB_D)+hand(10,198,14)
};
const FACE={
 smile:`<path d="M80 106 Q100 122 120 106" fill="none" stroke="#8a4a37" stroke-width="5" stroke-linecap="round"/>`,
 talk:`<path d="M84 100 Q100 96 116 100 Q108 122 100 122 Q92 122 84 100 Z" fill="#8a3a30" stroke="#6d2a22" stroke-width="3"/>
   <path d="M88 104 Q100 101 112 104" fill="none" stroke="#fff" stroke-width="4"/>`,
 wry:`<path d="M82 110 Q100 100 120 112" fill="none" stroke="#8a4a37" stroke-width="5" stroke-linecap="round"/>`,
 shock:`<ellipse cx="100" cy="110" rx="13" ry="15" fill="#8a3a30" stroke="#6d2a22" stroke-width="3"/>`
};
function doctor(pose='point',expr='smile',brow='up'){
 const eye=(x)=>`<ellipse cx="${x}" cy="82" rx="9" ry="8" fill="#fff" stroke="#4a3227" stroke-width="2.5"/>
   <circle cx="${x+1}" cy="83" r="4.2" fill="#241a14"/><circle cx="${x+3}" cy="81" r="1.4" fill="#fff"/>`;
 const brows= brow==='up'
  ? `<path d="M70 66 Q82 59 94 65" fill="none" stroke="#2b2119" stroke-width="6" stroke-linecap="round"/>
     <path d="M106 65 Q118 59 130 66" fill="none" stroke="#2b2119" stroke-width="6" stroke-linecap="round"/>`
  : `<path d="M70 62 Q82 68 94 66" fill="none" stroke="#2b2119" stroke-width="6" stroke-linecap="round"/>
     <path d="M106 66 Q118 68 130 62" fill="none" stroke="#2b2119" stroke-width="6" stroke-linecap="round"/>`;
 return `<g>
  <ellipse cx="100" cy="253" rx="76" ry="9" fill="rgba(0,0,0,.35)"/>
  <path d="M84 104 h32 v30 c0 9 -32 9 -32 0 Z" fill="#dda87f" stroke="${SKIN_D}" stroke-width="3"/>
  <path d="M100 130 C 58 134, 32 152, 24 192 L 16 262 L 184 262 L 176 192 C 168 152, 142 134, 100 130 Z"
        fill="${SCRUB}" stroke="${SCRUB_D}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M76 136 L100 172 L124 136" fill="none" stroke="${SCRUB_D}" stroke-width="5" stroke-linecap="round"/>
  <rect x="140" y="176" width="34" height="30" rx="3" fill="#2a63a1" stroke="${SCRUB_D}" stroke-width="3"/>
  ${ARMS[pose]()}
  <path d="M78 140 C 62 172, 68 206, 86 220" fill="none" stroke="#151d28" stroke-width="7" stroke-linecap="round"/>
  <path d="M122 140 C 138 170, 134 198, 120 214" fill="none" stroke="#151d28" stroke-width="7" stroke-linecap="round"/>
  <circle cx="112" cy="220" r="12" fill="#c9d2dc" stroke="#151d28" stroke-width="4"/>
  <ellipse cx="53" cy="80" rx="9" ry="12" fill="${SKIN}" stroke="${SKIN_D}" stroke-width="3"/>
  <ellipse cx="147" cy="80" rx="9" ry="12" fill="${SKIN}" stroke="${SKIN_D}" stroke-width="3"/>
  <path d="M100 24 C 142 24, 152 52, 150 82 C 148 112, 128 128, 100 128 C 72 128, 52 112, 50 82 C 48 52, 58 24, 100 24 Z"
        fill="${SKIN}" stroke="${SKIN_D}" stroke-width="3.5"/>
  <path d="M50 76 C 48 58, 56 44, 68 38 L 74 52 C 62 58, 56 64, 55 82 Z" fill="#2b2119"/>
  <path d="M150 76 C 152 58, 144 44, 132 38 L 126 52 C 138 58, 144 64, 145 82 Z" fill="#2b2119"/>
  <path d="M46 58 C 46 20, 72 4, 100 4 C 128 4, 154 20, 154 58 C 128 46, 72 46, 46 58 Z"
        fill="#f4f6f9" stroke="#8b98a6" stroke-width="3.5" stroke-linejoin="round"/>
  <path d="M46 56 C 72 44, 128 44, 154 56 L 152 70 C 126 58, 74 58, 48 70 Z"
        fill="#e3e8ee" stroke="#8b98a6" stroke-width="3"/>
  <path d="M62 22 C 74 12, 92 8, 100 8" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".85"/>
  ${brows}${eye(84)}${eye(116)}
  <path d="M100 84 L94 100 Q100 104 106 100" fill="none" stroke="${SKIN_D}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  ${FACE[expr]}
 </g>`;
}

/* ポスターを組み立てる。title は HTML 文字列、panels は各コマの定義、scenes は背景SVG */
function buildPoster(title, panels, scenes){
  document.querySelector('.mug').innerHTML = doctor('point','talk');
  document.querySelector('.head h1').innerHTML = title;
  document.getElementById('grid').innerHTML = panels.map((p,i)=>`
   <div class="panel">
     <div class="ph"><div class="num">${i+1}</div><p>${p.t[0]}<br>${p.t[1]}</p></div>
     <div class="art">
       <svg viewBox="0 0 540 230" preserveAspectRatio="xMidYMid slice">${scenes[p.scene]}
         <g class="figure" transform="translate(2,12) scale(0.86)">${doctor(p.pose,p.expr)}</g></svg>
       <div class="bub" style="${p.bx}">${p.b}</div>
     </div>
   </div>`).join('');
}
