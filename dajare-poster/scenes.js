/* 全ポスター共通の背景シーン。ポスターHTMLはコマ定義だけを持つ */
const S={};

/* ---------- Vol.1 ---------- */
/* 1 ノルマンディー */
S.normandy=`<defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#7fb4e0"/><stop offset="1" stop-color="#d9e6ef"/></linearGradient></defs>
 <rect width="540" height="230" fill="url(#g1)"/>
 <rect y="150" width="540" height="30" fill="#4d7fa8"/><rect y="172" width="540" height="58" fill="#cbb98d"/>
 <path d="M0 176 q60 10 120 0 q60 -10 120 0 q60 10 120 0 q60 -10 120 0 v8 H0 Z" fill="#e3d5ae"/>
 <g fill="#2b3a46" stroke="#141d24" stroke-width="3">
  <path d="M300 128 h110 l16 30 h-142 Z"/><rect x="332" y="104" width="40" height="26"/>
  <path d="M354 92 h14 v12 h-14z"/>
  <path d="M436 142 h80 l12 22 h-104 Z"/><rect x="458" y="124" width="30" height="20"/></g>
 <g stroke="#3d4c58" stroke-width="3" fill="#eef2f5">
  <path d="M286 26 a36 27 0 0 1 72 0 z"/><path d="M291 29 l31 42 M353 29 l-31 42" fill="none"/>
  <circle cx="322" cy="78" r="8" fill="#2b3a46" stroke="none"/>
  <path d="M424 46 a28 21 0 0 1 56 0 z"/><path d="M428 49 l24 34 M476 49 l-24 34" fill="none"/>
  <circle cx="452" cy="88" r="7" fill="#2b3a46" stroke="none"/></g>
 <g fill="#5a6b78"><path d="M250 150 l14 -26 l14 26 z"/><path d="M470 148 l12 -22 l12 22 z"/></g>`;
/* 2 フォロワー */
S.follower=`<rect width="540" height="230" fill="#101f3a"/>
 <g opacity=".35" stroke="#2f6fb0" stroke-width="2">${[...Array(9)].map((_,i)=>`<path d="M${60+i*54} 0 V230"/>`).join('')}
  ${[...Array(5)].map((_,i)=>`<path d="M0 ${24+i*44} H540"/>`).join('')}</g>
 <rect x="336" y="34" width="164" height="184" rx="20" fill="#1b2836" stroke="#8fa6bd" stroke-width="5"/>
 <rect x="349" y="51" width="138" height="152" rx="8" fill="#f3f7fb"/>
 <text x="418" y="86" font-size="19" font-weight="900" fill="#2f6fb0" text-anchor="middle">フォロワー</text>
 <text x="418" y="124" font-size="34" font-weight="900" fill="#111" text-anchor="middle">1,024</text>
 <path d="M362 192 L394 184 L426 188 L458 182" fill="none" stroke="#e04a3c" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
 <path d="M458 182 l-14 -4 l4 14 z" fill="#e04a3c"/>
 <text x="418" y="168" font-size="17" font-weight="900" fill="#e04a3c" text-anchor="middle">±0</text>
 `;
/* 3 四万十川 */
S.shimanto=`<defs><linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#ffd9a0"/><stop offset="1" stop-color="#bfe4f2"/></linearGradient></defs>
 <rect width="540" height="230" fill="url(#g3)"/>
 <circle cx="430" cy="52" r="30" fill="#ffb347"/><circle cx="430" cy="52" r="42" fill="#ffb347" opacity=".25"/>
 <path d="M180 130 q60 -70 130 -46 q50 18 90 42 z" fill="#4b7c47"/>
 <path d="M300 132 q70 -60 150 -30 q50 20 90 30 z" fill="#3c6a3c"/>
 <path d="M170 230 q80 -70 180 -78 q120 -10 190 -26 v104 z" fill="#5aa9d6"/>
 <path d="M200 214 q90 -56 180 -66 q90 -10 160 -22" fill="none" stroke="#bfe9ff" stroke-width="6" opacity=".7"/>
 <g stroke="#e8e2d2" stroke-width="7"><path d="M300 168 H500"/></g>
 <g fill="#cfc8b6"><rect x="336" y="170" width="9" height="26"/><rect x="400" y="172" width="9" height="30"/><rect x="464" y="170" width="9" height="26"/></g>
 <g fill="#2f4f2f"><path d="M186 152 l16 -34 l16 34 z"/><path d="M214 160 l13 -28 l13 28 z"/></g>`;
/* 4 ゴリラ */
S.gorilla=`<rect width="540" height="230" fill="#123021"/>
 <g fill="#1c4a30">${[...Array(7)].map((_,i)=>`<path d="M${i*82} 230 q18 -80 42 -108 q24 28 42 108 z"/>`).join('')}</g>
 <g fill="#0f3a24">${[...Array(6)].map((_,i)=>`<path d="M${28+i*90} 0 q26 44 4 70 q-34 -16 -4 -70z"/>`).join('')}</g>
 <g transform="translate(268,16)">
  <path d="M132 232 C 36 232, 18 176, 40 132 C 58 96, 96 84, 132 84 C 168 84, 206 96, 224 132 C 246 176, 228 232, 132 232 Z"
        fill="#2f3336" stroke="#121517" stroke-width="5"/>
  <path d="M132 224 C 78 224, 66 186, 80 156 C 96 176, 168 176, 184 156 C 198 186, 186 224, 132 224 Z" fill="#454b4f"/>
  <g fill="#2a2e31" stroke="#121517" stroke-width="5">
   <path d="M40 128 C 8 148, 4 200, 26 224 C 44 232, 62 220, 58 200 C 52 170, 56 146, 62 134 Z"/>
   <path d="M224 128 C 256 148, 260 200, 238 224 C 220 232, 202 220, 206 200 C 212 170, 208 146, 202 134 Z"/></g>
  <ellipse cx="46" cy="52" rx="20" ry="23" fill="#2a2e31" stroke="#121517" stroke-width="5"/>
  <ellipse cx="218" cy="52" rx="20" ry="23" fill="#2a2e31" stroke="#121517" stroke-width="5"/>
  <path d="M132 -8 C 200 -8, 224 34, 218 74 C 212 116, 176 136, 132 136 C 88 136, 52 116, 46 74 C 40 34, 64 -8, 132 -8 Z"
        fill="#33383b" stroke="#121517" stroke-width="5"/>
  <path d="M62 26 q70 -40 140 0 q-16 -40 -70 -40 q-54 0 -70 40z" fill="#202427"/>
  <ellipse cx="132" cy="98" rx="52" ry="34" fill="#4f5559"/>
  <ellipse cx="114" cy="92" rx="7" ry="10" fill="#121517"/><ellipse cx="150" cy="92" rx="7" ry="10" fill="#121517"/>
  <path d="M100 116 q32 16 64 0" fill="none" stroke="#121517" stroke-width="6" stroke-linecap="round"/>
  <ellipse cx="104" cy="54" rx="15" ry="12" fill="#fff"/><ellipse cx="160" cy="54" rx="15" ry="12" fill="#fff"/>
  <circle cx="107" cy="56" r="7" fill="#121517"/><circle cx="157" cy="56" r="7" fill="#121517"/>
  <path d="M84 32 q22 -12 40 0" fill="none" stroke="#121517" stroke-width="6" stroke-linecap="round"/>
  <path d="M140 32 q22 -12 40 0" fill="none" stroke="#121517" stroke-width="6" stroke-linecap="round"/>
 </g>`;
/* 5 ジャマイカ */
S.jamaica=`<defs><linearGradient id="g5" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#39b6e8"/><stop offset="1" stop-color="#a9e4f5"/></linearGradient></defs>
 <rect width="540" height="230" fill="url(#g5)"/>
 <circle cx="452" cy="44" r="34" fill="#ffd233"/>
 <rect y="186" width="540" height="44" fill="#e9d9a8"/>
 <path d="M0 186 h540 v10 H0z" fill="#f6ecc8"/>
 <rect y="164" width="540" height="26" fill="#2aa2c8"/>
 <g transform="translate(300,26)">
  <rect x="82" y="60" width="14" height="110" rx="6" fill="#8a6a3a" transform="rotate(6 89 115)"/>
  <g fill="#1f8f3d"><path d="M88 62 q-56 -8 -70 26 q40 -22 70 -8z"/><path d="M88 62 q56 -8 70 26 q-40 -22 -70 -8z"/>
   <path d="M88 60 q-30 -46 -74 -46 q34 20 66 54z"/><path d="M88 60 q30 -46 74 -46 q-34 20 -66 54z"/></g>
  <circle cx="72" cy="70" r="7" fill="#7a4b1e"/><circle cx="104" cy="72" r="7" fill="#7a4b1e"/>
 </g>
 <g transform="translate(190,34)">
  <rect x="0" y="0" width="96" height="62" fill="#009b3a" stroke="#111" stroke-width="3"/>
  <path d="M0 0 L96 62 M96 0 L0 62" stroke="#111" stroke-width="20"/>
  <path d="M0 0 L96 62 M96 0 L0 62" stroke="#fed100" stroke-width="14"/>
  <path d="M2 3 L48 31 L2 59 Z M94 3 L48 31 L94 59 Z" fill="#111"/>
 </g>`;
/* 6 カタール */
S.qatar=`<defs><linearGradient id="g6" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#ffc46b"/><stop offset="1" stop-color="#f4e0b4"/></linearGradient></defs>
 <rect width="540" height="230" fill="url(#g6)"/>
 <circle cx="300" cy="60" r="28" fill="#fff3cf"/>
 <g fill="#c9d7e2" opacity=".85"><path d="M380 106 l18 -56 l18 56z"/><rect x="424" y="60" width="24" height="46"/>
  <path d="M436 52 l12 10 h-24z"/><rect x="458" y="74" width="18" height="32"/><rect x="356" y="82" width="16" height="24"/></g>
 <path d="M0 150 q120 -46 240 -14 q140 38 300 -6 v100 H0z" fill="#e7c489"/>
 <path d="M0 186 q160 -34 300 -6 q120 24 240 4 v46 H0z" fill="#d9ad6f"/>
 <g transform="translate(306,68) scale(1.18)" fill="#9a6636" stroke="#5e3b1f" stroke-width="4" stroke-linejoin="round">
  <g fill="#9a6636">
   <path d="M36 74 C 30 46, 52 38, 62 56 C 74 30, 100 32, 108 58 C 122 34, 148 42, 146 74 C 150 92, 140 100, 120 100 L 54 100 C 36 100, 32 90, 36 74 Z"/>
   <path d="M40 96 l-6 44 M62 100 l-4 42 M118 100 l6 42 M140 96 l10 44" fill="none" stroke="#9a6636" stroke-width="11" stroke-linecap="round"/>
   <path d="M40 96 l-6 44 M62 100 l-4 42 M118 100 l6 42 M140 96 l10 44" fill="none" stroke="#5e3b1f" stroke-width="3.5" stroke-linecap="round" opacity=".45"/>
   <path d="M40 76 C 20 66, 8 44, 12 24 C 14 10, 30 8, 32 22 C 34 44, 44 58, 52 64 Z"/>
   <path d="M10 26 C 0 22, -6 12, 2 6 C 10 0, 26 2, 30 12 C 32 20, 24 28, 10 26 Z"/>
   <path d="M26 4 l6 -12 l6 12z"/>
  </g>
  <circle cx="16" cy="12" r="3.5" fill="#3a2413" stroke="none"/>
  <path d="M2 16 q8 4 14 2" fill="none" stroke="#5e3b1f" stroke-width="3"/>
 </g>
 `;
/* 7 イタリア */
S.italy=`<defs><linearGradient id="g7" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#8fd0f0"/><stop offset="1" stop-color="#e8f6fb"/></linearGradient></defs>
 <rect width="540" height="230" fill="url(#g7)"/>
 <circle cx="498" cy="36" r="26" fill="#ffe27a"/>
 <g fill="#cfa87a"><rect x="0" y="176" width="540" height="54"/></g>
 <path d="M0 176 h540 v6 H0z" fill="#e3c49b"/>
 <g transform="translate(356,34) rotate(8 30 76)">
  <rect x="-4" y="150" width="68" height="16" rx="3" fill="#e6d9bd" stroke="#8d7f63" stroke-width="4"/>
  <rect x="2" y="18" width="56" height="134" fill="#f6f0e0" stroke="#8d7f63" stroke-width="4"/>
  ${[...Array(5)].map((_,i)=>`<rect x="-2" y="${30+i*24}" width="64" height="10" fill="#cdbb9a" stroke="#8d7f63" stroke-width="2.5"/>`).join('')}
  <rect x="6" y="2" width="48" height="18" rx="4" fill="#fbf6e8" stroke="#8d7f63" stroke-width="4"/>
 </g>
 <rect y="196" width="540" height="34" fill="#7d5c3a"/>
 <g transform="translate(236,124) scale(1.1)">
  <ellipse cx="70" cy="46" rx="82" ry="30" fill="#fff" stroke="#c8ccd2" stroke-width="4"/>
  <ellipse cx="70" cy="42" rx="60" ry="20" fill="#f2d98c"/>
  <path d="M22 42 q24 -12 48 -2 q26 10 48 -2" fill="none" stroke="#e0be6a" stroke-width="5"/>
  <g fill="#d24a3a"><circle cx="52" cy="36" r="7"/><circle cx="86" cy="42" r="7"/><circle cx="70" cy="30" r="6"/></g>
  <path d="M64 24 q6 -10 14 -2" fill="none" stroke="#2f8f3d" stroke-width="4" stroke-linecap="round"/>
 </g>`;
/* 8 ロンドン */
S.london=`<defs><linearGradient id="g8" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#4a5c72"/><stop offset="1" stop-color="#aebcc9"/></linearGradient></defs>
 <rect width="540" height="230" fill="url(#g8)"/>
 <g fill="#33404f" opacity=".7">${[...Array(6)].map((_,i)=>`<rect x="${180+i*62}" y="${120+(i%3)*18}" width="46" height="110"/>`).join('')}</g>
 <g transform="translate(352,-14) scale(1.18)">
  <rect x="30" y="66" width="52" height="164" fill="#8a7a5e" stroke="#5c5040" stroke-width="3"/>
  ${[...Array(4)].map((_,i)=>`<rect x="36" y="${92+i*30}" width="40" height="18" fill="#6d6046"/>`).join('')}
  <rect x="22" y="34" width="68" height="36" rx="3" fill="#a2916f" stroke="#5c5040" stroke-width="3"/>
  <circle cx="56" cy="52" r="14" fill="#f6f1e2" stroke="#5c5040" stroke-width="3"/>
  <path d="M56 52 V43 M56 52 l7 5" stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <path d="M22 34 L56 2 L90 34 Z" fill="#8a7a5e" stroke="#5c5040" stroke-width="3"/>
 </g>
 <g transform="translate(178,120) scale(1.12)">
  <rect x="0" y="0" width="140" height="80" rx="10" fill="#cf3b30" stroke="#7d1f18" stroke-width="4"/>
  <rect x="10" y="10" width="52" height="26" rx="4" fill="#dfe9f2"/><rect x="74" y="10" width="52" height="26" rx="4" fill="#dfe9f2"/>
  <rect x="10" y="46" width="52" height="22" rx="4" fill="#dfe9f2"/><rect x="74" y="46" width="52" height="22" rx="4" fill="#dfe9f2"/>
  <circle cx="34" cy="82" r="14" fill="#1d232b" stroke="#000" stroke-width="3"/>
  <circle cx="112" cy="82" r="14" fill="#1d232b" stroke="#000" stroke-width="3"/>
 </g>
 <rect y="206" width="540" height="24" fill="#3c4653"/>`;
/* 9 もんじゃ */
S.monja=`<rect width="540" height="230" fill="#2b1f1a"/>
 <g opacity=".5" stroke="#4a382d" stroke-width="3">${[...Array(8)].map((_,i)=>`<path d="M0 ${12+i*30} H540"/>`).join('')}</g>
 <rect x="196" y="46" width="330" height="158" rx="14" fill="#3a3a3e" stroke="#17171a" stroke-width="6"/>
 <rect x="212" y="62" width="298" height="126" rx="8" fill="#4d4d52"/>
 <path d="M240 150 q30 -46 76 -30 q40 14 84 -6 q34 -16 52 12 q16 26 -22 40 q-70 24 -140 8 q-58 -12 -50 -24z" fill="#a9702f" stroke="#6f4415" stroke-width="5"/>
 <g fill="#c68a3e"><circle cx="300" cy="146" r="10"/><circle cx="352" cy="160" r="8"/><circle cx="404" cy="142" r="9"/></g>
 <g fill="#2f8f3d" opacity=".9"><rect x="326" y="130" width="18" height="7" rx="3"/><rect x="374" y="164" width="18" height="7" rx="3"/></g>
 <g stroke="#d8dde3" stroke-width="8" stroke-linecap="round"><path d="M456 96 l40 -30"/><path d="M470 122 l40 -26"/></g>
 <g fill="#d8dde3"><rect x="440" y="88" width="26" height="20" rx="4" transform="rotate(-36 453 98)"/>
  <rect x="454" y="114" width="26" height="20" rx="4" transform="rotate(-32 467 124)"/></g>
 <g fill="#fff" opacity=".28"><ellipse cx="270" cy="92" rx="34" ry="16"/><ellipse cx="352" cy="74" rx="26" ry="12"/><ellipse cx="420" cy="96" rx="30" ry="14"/></g>`;
/* 10 マスク */
S.mask=`<defs><linearGradient id="ga" x1="0" y1="0" x2="1" y2="1">
  <stop offset="0" stop-color="#2f7fd0"/><stop offset="1" stop-color="#0f2f56"/></linearGradient></defs>
 <rect width="540" height="230" fill="url(#ga)"/>
 <g stroke="#5ea6e8" stroke-width="4" opacity=".4" fill="none">
  ${[...Array(5)].map((_,i)=>`<circle cx="360" cy="115" r="${40+i*30}"/>`).join('')}</g>
 <g transform="translate(250,58)">
  <path d="M20 12 q90 -20 180 0 q10 44 -10 84 q-80 30 -160 0 q-20 -40 -10 -84z" fill="#f2f6fa" stroke="#9fb0c2" stroke-width="5"/>
  <g stroke="#c9d6e2" stroke-width="4">${[...Array(4)].map((_,i)=>`<path d="M18 ${30+i*17} q92 22 184 0"/>`).join('')}</g>
  <path d="M20 14 q-40 12 -30 44" fill="none" stroke="#dfe8f0" stroke-width="7" stroke-linecap="round"/>
  <path d="M200 14 q40 12 30 44" fill="none" stroke="#dfe8f0" stroke-width="7" stroke-linecap="round"/>
 </g>
 <g fill="#ffd233"><path d="M200 40 l7 16 l17 2 l-12 12 l3 17 l-15 -9 l-15 9 l3 -17 l-12 -12 l17 -2z"/>
  <path d="M480 150 l6 13 l14 2 l-10 10 l3 14 l-13 -8 l-13 8 l3 -14 l-10 -10 l14 -2z" opacity=".85"/></g>`;



/* ---------- Vol.2 ---------- */
/* 11 西部劇（シェーン、髪バック！） */
S.western=`<defs><linearGradient id="w1" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#f2a75c"/><stop offset="1" stop-color="#f7dda9"/></linearGradient></defs>
 <rect width="540" height="230" fill="url(#w1)"/>
 <circle cx="392" cy="72" r="40" fill="#ffd98a"/>
 <g fill="#b9713f" opacity=".85"><path d="M180 128 h70 l16 -30 h40 l14 30 h60 v34 H180z"/>
  <path d="M430 120 h70 l14 -26 h30 v68 H430z"/></g>
 <rect y="158" width="540" height="72" fill="#d9a668"/>
 <path d="M0 158 h540 v8 H0z" fill="#e8bd83"/>
 <g fill="#3f6b3a" stroke="#274a25" stroke-width="4" stroke-linejoin="round">
  <path d="M228 200 v-52 q0 -12 12 -12 q12 0 12 12 v52z"/>
  <path d="M232 168 q-24 0 -24 -20 q0 -14 10 -14 q10 0 10 14 q0 8 6 10z"/>
  <path d="M250 158 q24 0 24 -22 q0 -14 -10 -14 q-10 0 -10 14 q0 10 -6 12z"/></g>
 <g transform="translate(404,58)" fill="#2f2a26" stroke="#151312" stroke-width="4" stroke-linejoin="round">
  <path d="M2 40 q42 -20 84 0 q-8 -14 -26 -18 q6 -24 -16 -24 q-22 0 -16 24 q-18 4 -26 18z"/>
  <path d="M26 54 q18 -8 36 0 l10 44 q-28 10 -56 0z"/>
  <path d="M24 56 l-16 40 q-2 8 6 10 q8 2 10 -6 l10 -30z"/>
  <path d="M64 56 l16 40 q2 8 -6 10 q-8 2 -10 -6 l-10 -30z"/>
  <path d="M32 96 l-6 44 h16 l4 -34 l4 34 h16 l-6 -44z"/>
  <path d="M20 140 h20 v10 h-24 q-4 0 -4 -5 q0 -5 8 -5z"/>
  <path d="M64 140 h20 q8 0 8 5 q0 5 -4 5 h-24z"/>
 </g>`;
/* 12 ピアノ（つるっぱドビュッシュー） */
S.piano=`<rect width="540" height="230" fill="#2b2036"/>
 <path d="M340 -20 L236 244 L500 244 L420 -20z" fill="#ffeeb0" opacity=".22"/>
 <rect y="184" width="540" height="46" fill="#3d2f2a"/><path d="M0 184 h540 v6 H0z" fill="#5c4636"/>
 <g fill="#f2c94c">
  <path d="M214 40 q22 -8 22 12 q0 12 -12 12 q-10 0 -10 -8 q0 -8 12 -6 v-10z"/>
  <path d="M488 26 q20 -8 20 10 q0 12 -12 12 q-9 0 -9 -8 q0 -7 11 -5z"/>
  <path d="M504 36 v-16 l10 -4 v16z"/></g>
 <g transform="translate(236,74)">
  <path d="M14 22 C 120 -4, 250 4, 286 44 L 286 56 L 14 56 Z" fill="#3a2f45" stroke="#b9a7d6" stroke-width="4"/>
  <path d="M18 26 C 120 2, 244 10, 278 44" fill="none" stroke="#d8caf0" stroke-width="4" opacity=".8"/>
  <rect x="14" y="52" width="272" height="22" fill="#f5f3ee" stroke="#171220" stroke-width="4"/>
  <g fill="#171220">${[...Array(12)].map((_,i)=>`<rect x="${28+i*21}" y="52" width="9" height="13"/>`).join('')}</g>
  <rect x="14" y="72" width="272" height="12" fill="#2a2136" stroke="#171220" stroke-width="3"/>
  <path d="M40 84 l-10 44 M262 84 l12 44" stroke="#2a2136" stroke-width="13" stroke-linecap="round"/>
  <rect x="112" y="106" width="80" height="10" rx="4" fill="#5c4636" stroke="#2a2136" stroke-width="3"/>
  <path d="M124 116 v18 M180 116 v18" stroke="#5c4636" stroke-width="8" stroke-linecap="round"/>
  <ellipse cx="150" cy="140" rx="150" ry="12" fill="#000" opacity=".3"/>
 </g>`;
/* 13 にんにく */
S.garlic=`<defs><radialGradient id="ga2" cx="50%" cy="30%">
  <stop offset="0" stop-color="#ffe9c2"/><stop offset="1" stop-color="#e0a35f"/></radialGradient></defs>
 <rect width="540" height="230" fill="url(#ga2)"/>
 <rect y="170" width="540" height="60" fill="#8a5a33"/>
 <path d="M0 170 h540 v7 H0z" fill="#a67243"/>
 <g transform="translate(300,44)">
  <path d="M70 22 C 118 22, 146 66, 140 106 C 134 142, 104 156, 70 156 C 36 156, 6 142, 0 106 C -6 66, 22 22, 70 22 Z"
        fill="#fdfaf2" stroke="#c9bda3" stroke-width="5"/>
  <path d="M70 22 C 92 44, 96 120, 70 156 M70 22 C 48 44, 44 120, 70 156
           M24 42 C 36 78, 34 128, 22 148 M116 42 C 104 78, 106 128, 118 148"
        fill="none" stroke="#dfd6c2" stroke-width="4"/>
  <path d="M70 22 q-8 -22 6 -30 q10 12 4 30z" fill="#7ea86b" stroke="#4f7a45" stroke-width="4"/>
  <path d="M158 128 q26 -6 30 12 q3 16 -14 20 q-18 4 -22 -12 q-2 -14 6 -20z" fill="#fdfaf2" stroke="#c9bda3" stroke-width="4"/>
 </g>
 <g fill="#fff" opacity=".7"><path d="M228 46 l5 12 l12 5 l-12 5 l-5 12 l-5 -12 l-12 -5 l12 -5z"/></g>`;
/* 14 演歌（いい加減にエンカ） */
S.enka=`<rect width="540" height="230" fill="#5c0f18"/>
 <g fill="#7d1622">${[...Array(9)].map((_,i)=>`<path d="M${180+i*42} 0 q10 60 0 200 h-16 q-10 -140 0 -200z"/>`).join('')}</g>
 <path d="M180 0 h360 v26 q-90 22 -180 0 q-90 -22 -180 0z" fill="#8f1a28"/>
 <rect y="186" width="540" height="44" fill="#3a2b12"/><path d="M0 186 h540 v6 H0z" fill="#5c4520"/>
 <g transform="translate(376,60)">
  <path d="M20 130 h48 v10 h-48z" fill="#2b2b30"/>
  <rect x="40" y="26" width="8" height="106" fill="#3a3a42"/>
  <ellipse cx="44" cy="16" rx="17" ry="20" fill="#c9ced6" stroke="#5a626e" stroke-width="4"/>
  <path d="M30 10 h28 M30 18 h28 M30 26 h28" stroke="#5a626e" stroke-width="3"/>
 </g>
 <g fill="#fff" opacity=".85">${[...Array(16)].map((_,i)=>`<circle cx="${196+((i*67)%330)}" cy="${18+((i*53)%170)}" r="${2+(i%3)}"/>`).join('')}</g>`;
/* 15 オハイヨ州 */
S.ohio=`<defs><linearGradient id="oh" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#ffcf87"/><stop offset="1" stop-color="#cfe7f2"/></linearGradient></defs>
 <rect width="540" height="230" fill="url(#oh)"/>
 <circle cx="330" cy="86" r="34" fill="#ffb347"/>
 <g stroke="#ffd08a" stroke-width="5" opacity=".8">${[...Array(8)].map((_,i)=>`<path d="M330 86 l${Math.round(60*Math.cos(i*0.785))} ${Math.round(60*Math.sin(i*0.785))}"/>`).join('')}</g>
 <path d="M0 156 q140 -20 280 -4 q140 16 260 -6 v84 H0z" fill="#8fbf5e"/>
 <path d="M0 186 q160 -16 300 0 q120 12 240 0 v44 H0z" fill="#6fa347"/>
 <g transform="translate(392,96)">
  <path d="M0 30 L46 0 L92 30 V96 H0 Z" fill="#c0402f" stroke="#7d1f18" stroke-width="4"/>
  <path d="M18 46 h56 v50 h-56z" fill="#e8e2d2"/>
  <path d="M18 46 l56 50 M74 46 l-56 50" stroke="#c0402f" stroke-width="5"/>
  <rect x="100" y="26" width="30" height="70" fill="#d8d2c2" stroke="#8d8676" stroke-width="4"/>
  <path d="M98 26 h34 l-17 -16z" fill="#a9a294" stroke="#8d8676" stroke-width="4"/>
 </g>
 <g><rect x="222" y="96" width="6" height="80" fill="#8d8676"/>
  <path d="M228 98 h60 v34 h-60z" fill="#e8ecf0" stroke="#33507a" stroke-width="3"/>
  <g fill="#c0402f">${[...Array(3)].map((_,i)=>`<rect x="228" y="${102+i*10}" width="60" height="5"/>`).join('')}</g>
  <rect x="228" y="98" width="24" height="17" fill="#33507a"/></g>`;
/* 16 アーカンソー州（あかんそーだ） */
S.arkansas=`<defs><linearGradient id="ar" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#8ec7e8"/><stop offset="1" stop-color="#dceef6"/></linearGradient></defs>
 <rect width="540" height="230" fill="url(#ar)"/>
 <g fill="#fff" opacity=".85"><ellipse cx="248" cy="44" rx="34" ry="16"/><ellipse cx="272" cy="38" rx="24" ry="14"/>
  <ellipse cx="470" cy="30" rx="30" ry="14"/></g>
 <path d="M0 158 q160 -18 300 -2 q120 14 240 -4 v78 H0z" fill="#7fae5a"/>
 <path d="M180 230 q60 -50 150 -50 q90 0 120 50z" fill="#c9c2ae"/>
 <g transform="translate(300,44)">
  <rect x="0" y="0" width="176" height="88" rx="8" fill="#f4efe0" stroke="#6b5f45" stroke-width="6"/>
  <rect x="12" y="12" width="152" height="64" rx="4" fill="none" stroke="#c8bfa4" stroke-width="4"/>
  <path d="M40 44 h72 M100 30 l16 14 l-16 14" fill="none" stroke="#c0402f" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="80" y="88" width="14" height="66" fill="#8d7f63"/>
 </g>
 <g transform="translate(232,150)">
  <rect x="0" y="12" width="66" height="46" rx="6" fill="#7a4a24" stroke="#4e2f16" stroke-width="4"/>
  <path d="M22 12 v-8 q0 -6 6 -6 h10 q6 0 6 6 v8" fill="none" stroke="#4e2f16" stroke-width="5"/>
  <rect x="0" y="30" width="66" height="7" fill="#4e2f16"/>
 </g>`;
/* 17 カンパチ（バチ当たる） */
S.kanpachi=`<rect width="540" height="230" fill="#123a55"/>
 <g fill="#0d2c42">${[...Array(6)].map((_,i)=>`<circle cx="${200+i*62}" cy="${30+(i%3)*40}" r="26"/>`).join('')}</g>
 <path d="M300 20 q-30 22 -6 30 q-26 16 6 26 q40 12 90 -2 q40 -12 26 -30 q-14 -18 -46 -18 q-24 -18 -70 -6z" fill="#4a5c6e"/>
 <path d="M356 76 l-16 34 h20 l-26 46 l52 -56 h-22 l18 -24z" fill="#ffd233" stroke="#e0a800" stroke-width="3"/>
 <g transform="translate(240,120)">
  <ellipse cx="120" cy="52" rx="126" ry="22" fill="#f6f3ec" stroke="#cdc6b6" stroke-width="5"/>
  <path d="M40 44 C 60 14, 150 8, 190 34 L 216 18 L 210 40 L 216 60 L 190 46 C 150 70, 60 68, 40 44 Z"
        fill="#8fb8d6" stroke="#3d5f7d" stroke-width="4" stroke-linejoin="round"/>
  <path d="M52 40 C 90 30, 160 30, 188 38 C 160 48, 90 50, 52 40 Z" fill="#e8d0a0"/>
  <circle cx="70" cy="36" r="6" fill="#fff" stroke="#3d5f7d" stroke-width="3"/>
  <path d="M104 18 l14 12 l16 -10" fill="none" stroke="#3d5f7d" stroke-width="4"/>
 </g>`;
/* 18 ジーパン（ジジパン） */
S.jeans=`<defs><linearGradient id="je" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#6fb9e8"/><stop offset="1" stop-color="#d6eefa"/></linearGradient></defs>
 <rect width="540" height="230" fill="url(#je)"/>
 <g fill="#fff" opacity=".9"><ellipse cx="470" cy="40" rx="36" ry="18"/><ellipse cx="440" cy="46" rx="24" ry="13"/></g>
 <path d="M180 34 q180 26 360 4" fill="none" stroke="#6b5f45" stroke-width="5"/>
 <rect y="190" width="540" height="40" fill="#8fbf5e"/>
 ${[0,1].map(k=>`<g transform="translate(${232+k*138},48)">
   <path d="M0 0 h84 l8 40 l-6 108 h-30 l-10 -84 l-10 84 h-30 l-6 -108z"
         fill="${k?'#5c7fae':'#3f6ea3'}" stroke="#22456e" stroke-width="5" stroke-linejoin="round"/>
   <path d="M2 24 h80" stroke="#22456e" stroke-width="4"/>
   <path d="M42 40 v104" stroke="#22456e" stroke-width="3" opacity=".7"/>
   <g fill="#f2c94c"><rect x="10" y="8" width="14" height="10" rx="2"/><rect x="60" y="8" width="14" height="10" rx="2"/></g>
   <rect x="-8" y="-10" width="10" height="22" rx="4" fill="#c9ced6"/>
   <rect x="82" y="-10" width="10" height="22" rx="4" fill="#c9ced6"/>
  </g>`).join('')}`;
/* 19 オランウータン（おら撃たん） */
S.orangutan=`<rect width="540" height="230" fill="#15351f"/>
 <g fill="#1e4a2b">${[...Array(6)].map((_,i)=>`<path d="M${190+i*62} 230 q16 -74 38 -100 q22 26 38 100z"/>`).join('')}</g>
 <path d="M180 44 q170 -26 360 6" fill="none" stroke="#5c4326" stroke-width="15" stroke-linecap="round"/>
 <path d="M300 48 q-16 22 -34 26" fill="none" stroke="#5c4326" stroke-width="9" stroke-linecap="round"/>
 <rect y="200" width="540" height="30" fill="#0f2717"/>
 <g transform="translate(292,44)">
  <ellipse cx="96" cy="150" rx="66" ry="52" fill="#b5651f" stroke="#7a4210" stroke-width="5"/>
  <path d="M50 128 C 18 120, 10 74, 22 46" fill="none" stroke="#b5651f" stroke-width="26" stroke-linecap="round"/>
  <path d="M22 46 a13 13 0 1 0 2 -2" fill="#c9761f" stroke="#7a4210" stroke-width="4"/>
  <path d="M142 132 C 172 132, 184 158, 176 180" fill="none" stroke="#b5651f" stroke-width="26" stroke-linecap="round"/>
  <path d="M40 178 q-18 14 -6 22 M152 182 q20 12 8 22" stroke="#b5651f" stroke-width="22" stroke-linecap="round" fill="none"/>
  <ellipse cx="96" cy="72" rx="60" ry="48" fill="#c9761f" stroke="#7a4210" stroke-width="5"/>
  <ellipse cx="96" cy="80" rx="35" ry="35" fill="#e9b077"/>
  <ellipse cx="83" cy="72" rx="5" ry="8" fill="#2d1a08"/><ellipse cx="109" cy="72" rx="5" ry="8" fill="#2d1a08"/>
  <path d="M80 94 q16 12 32 0" fill="none" stroke="#2d1a08" stroke-width="5" stroke-linecap="round"/>
  <path d="M90 80 q6 6 12 0" fill="none" stroke="#2d1a08" stroke-width="4"/>
  <path d="M36 54 q-16 -18 -2 -32 q14 -12 26 4" fill="#c9761f" stroke="#7a4210" stroke-width="5"/>
  <path d="M156 54 q16 -18 2 -32 q-14 -12 -26 4" fill="#c9761f" stroke="#7a4210" stroke-width="5"/>
 </g>`;
/* 20 大仏（オーマイブッタ） */
S.buddha=`<defs><linearGradient id="bd" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#f6d9a0"/><stop offset="1" stop-color="#e6c48a"/></linearGradient></defs>
 <rect width="540" height="230" fill="#e9d7b0"/>
 <path d="M180 62 h360 v-10 l-180 -44 l-180 44z" fill="#8c3b2e" stroke="#5e2419" stroke-width="4"/>
 <rect x="180" y="62" width="360" height="12" fill="#a94b36"/>
 <rect y="196" width="540" height="34" fill="#b9a887"/>
 <g transform="translate(288,44) scale(1.12)">
  <circle cx="112" cy="60" r="82" fill="none" stroke="#d9b978" stroke-width="6" opacity=".9"/>
  <path d="M112 152 C 46 152, 22 132, 30 108 C 42 76, 84 68, 112 68 C 140 68, 182 76, 194 108 C 202 132, 178 152, 112 152 Z"
        fill="#5f7a63" stroke="#3c5241" stroke-width="5"/>
  <ellipse cx="112" cy="44" rx="52" ry="50" fill="#6d8a70" stroke="#3c5241" stroke-width="5"/>
  <path d="M64 34 q48 -34 96 0 q-8 -34 -48 -34 q-40 0 -48 34z" fill="#5f7a63"/>
  <g fill="#4e6a53">${[...Array(9)].map((_,i)=>`<circle cx="${72+ (i%5)*20}" cy="${10 + (i>4?14:0)}" r="6"/>`).join('')}</g>
  <path d="M84 44 q12 -8 22 0 M118 44 q12 -8 22 0" fill="none" stroke="#2f4034" stroke-width="4" stroke-linecap="round"/>
  <path d="M86 52 q10 6 20 0 M118 52 q10 6 20 0" fill="none" stroke="#2f4034" stroke-width="4" stroke-linecap="round"/>
  <path d="M100 66 q12 10 24 0" fill="none" stroke="#2f4034" stroke-width="4" stroke-linecap="round"/>
  <circle cx="112" cy="28" r="5" fill="#f2c94c"/>
 </g>`;


/* ---------- Vol.3 ---------- */
/* 21 ゾウ（ダンボ、貧乏、乱暴） */
S.elephant=`<defs><linearGradient id="el" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#ffc978"/><stop offset="1" stop-color="#f6e2b4"/></linearGradient></defs>
 <rect width="540" height="230" fill="url(#el)"/>
 <circle cx="248" cy="52" r="30" fill="#ffb347"/>
 <path d="M0 168 q160 -22 300 -4 q120 14 240 -8 v74 H0z" fill="#c8a75e"/>
 <path d="M0 196 q170 -14 320 2 q110 12 220 -2 v34 H0z" fill="#a98c47"/>
 <g transform="translate(276,14)">
  <ellipse cx="120" cy="120" rx="86" ry="64" fill="#8d949c" stroke="#5b6167" stroke-width="5"/>
  <path d="M62 168 v46 M110 176 v40 M162 174 v42 M196 160 v54" stroke="#8d949c" stroke-width="26" stroke-linecap="round"/>
  <path d="M62 168 v46 M110 176 v40 M162 174 v42 M196 160 v54" stroke="#5b6167" stroke-width="3.5" stroke-linecap="round" opacity=".5"/>
  <ellipse cx="62" cy="76" rx="52" ry="50" fill="#98a0a8" stroke="#5b6167" stroke-width="5"/>
  <path d="M96 40 C 158 24, 176 82, 150 112 C 132 132, 100 122, 96 104 Z" fill="#8d949c" stroke="#5b6167" stroke-width="5"/>
  <path d="M40 112 C 28 142, 14 166, 26 186 q10 16 24 4 q-14 -14 -4 -30 q10 -18 14 -44z" fill="#98a0a8" stroke="#5b6167" stroke-width="5"/>
  <path d="M74 118 q16 12 26 26" fill="none" stroke="#f4f1e6" stroke-width="11" stroke-linecap="round"/>
  <circle cx="48" cy="66" r="7" fill="#2f353b"/>
  <path d="M32 50 q14 -8 26 -2" fill="none" stroke="#5b6167" stroke-width="4" stroke-linecap="round"/>
 </g>`;
/* 22 バランス（ジャックバランス） */
S.balance=`<defs><linearGradient id="ba" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#3f7bb8"/><stop offset="1" stop-color="#bfe0f2"/></linearGradient></defs>
 <rect width="540" height="230" fill="url(#ba)"/>
 <g fill="#fff" opacity=".7"><ellipse cx="250" cy="40" rx="30" ry="14"/><ellipse cx="472" cy="52" rx="26" ry="12"/></g>
 <rect y="192" width="540" height="38" fill="#c9b184"/><path d="M0 192 h540 v6 H0z" fill="#e0cba0"/>
 <g transform="translate(268,44)" stroke="#5a4a2a" stroke-width="5" stroke-linejoin="round">
  
  <path d="M120 148 h-44 l44 -104 l44 104z" fill="#caa14f"/>
  <path d="M26 56 L214 34" stroke="#8a6f3a" stroke-width="9" stroke-linecap="round"/>
  <circle cx="120" cy="45" r="10" fill="#e8c97a"/>
  <path d="M26 58 v22 M214 36 v22" stroke-width="4"/>
  <path d="M-6 80 h64 l-14 30 h-36z" fill="#e8c97a"/>
  <path d="M182 58 h64 l-14 30 h-36z" fill="#e8c97a"/>
 </g>
 <g fill="#d9463a" stroke="#8f261e" stroke-width="4"><path d="M272 96 q12 -20 26 -9 q15 -11 27 9 q11 22 -27 42 q-37 -20 -26 -42z"/></g>
 <g fill="#f2c94c" stroke="#a9822a" stroke-width="4"><circle cx="486" cy="112" r="17"/><circle cx="464" cy="116" r="17"/><circle cx="475" cy="94" r="17"/></g>`;
/* 23 カナリヤ */
S.canary=`<rect width="540" height="230" fill="#e8f3f7"/>
 <g fill="#d3e8f0">${[...Array(5)].map((_,i)=>`<circle cx="${210+i*80}" cy="${(i%2)?60:170}" r="46"/>`).join('')}</g>
 <rect y="196" width="540" height="34" fill="#cfe0e8"/>
 <g transform="translate(292,26)">
  <path d="M100 26 L60 54 h80z" fill="#7fa8bd" stroke="#4a6d7f" stroke-width="4"/>
  <path d="M100 8 v20" stroke="#4a6d7f" stroke-width="5" stroke-linecap="round"/>
  <circle cx="100" cy="6" r="7" fill="none" stroke="#4a6d7f" stroke-width="5"/>
  <rect x="52" y="52" width="96" height="118" rx="8" fill="#f7fbfd" stroke="#4a6d7f" stroke-width="4"/>
  <g stroke="#7fa8bd" stroke-width="4">${[...Array(6)].map((_,i)=>`<path d="M${64+i*16} 54 V168"/>`).join('')}</g>
  <rect x="44" y="166" width="112" height="14" rx="4" fill="#7fa8bd" stroke="#4a6d7f" stroke-width="4"/>
  <g><ellipse cx="100" cy="118" rx="30" ry="26" fill="#f7d94a" stroke="#c9a520" stroke-width="4"/>
   <circle cx="100" cy="88" r="21" fill="#ffe667" stroke="#c9a520" stroke-width="4"/>
   <path d="M120 88 l14 6 l-14 6z" fill="#e8913a" stroke="#b06a1e" stroke-width="3"/>
   <circle cx="108" cy="84" r="4" fill="#3a2b08"/>
   <path d="M86 112 q-14 16 2 30 q10 8 16 -2" fill="#f2cf3a" stroke="#c9a520" stroke-width="3"/>
   <path d="M96 144 v10 M106 144 v10" stroke="#e8913a" stroke-width="4" stroke-linecap="round"/></g>
  <path d="M60 84 q10 -8 4 -16 M64 96 q12 -6 8 -16" fill="none" stroke="#c9d9e2" stroke-width="4"/>
 </g>
 <g fill="#d9463a"><rect x="470" y="40" width="14" height="46" rx="3"/><rect x="454" y="56" width="46" height="14" rx="3"/></g>`;
/* 24 しんなかった（健康） */
S.health=`<rect width="540" height="230" fill="#12294a"/>
 <g fill="#1b3b68">${[...Array(18)].map((_,i)=>`<path d="M330 115 L${330+150*Math.cos(i*0.349)} ${115+150*Math.sin(i*0.349)} L${330+150*Math.cos((i+0.5)*0.349)} ${115+150*Math.sin((i+0.5)*0.349)}z"/>`).join('')}</g>
 <g transform="translate(272,44)">
  <path d="M96 26 q14 -26 38 -12 q22 -22 44 4 q18 22 -6 50 q-24 28 -76 62 q-52 -34 -76 -62 q-24 -28 -6 -50 q22 -26 44 -4 q24 -14 38 12z"
        fill="#e8564a" stroke="#8f261e" stroke-width="5"/>
  <path d="M20 84 h34 l14 -26 l18 52 l16 -34 l12 18 h58" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
 </g>
 <g fill="#ffd233"><path d="M470 44 l7 16 l17 2 l-12 12 l3 17 l-15 -9 l-15 9 l3 -17 l-12 -12 l17 -2z"/></g>
 <g fill="#8fd0ff"><circle cx="248" cy="176" r="9"/><circle cx="286" cy="196" r="6"/></g>`;
/* 25 映画（スペシャルハンバーグ） */
S.cinema=`<rect width="540" height="230" fill="#1b1520"/>
 <path d="M300 -20 L214 244 L470 244 L400 -20z" fill="#ffeeb0" opacity=".14"/>
 <g transform="translate(198,26)">
  <circle cx="60" cy="60" r="52" fill="#2f2a38" stroke="#c9bfd8" stroke-width="5"/>
  <circle cx="60" cy="60" r="11" fill="#c9bfd8"/>
  <g fill="#151220">${[...Array(6)].map((_,i)=>`<circle cx="${60+30*Math.cos(i*1.047)}" cy="${60+30*Math.sin(i*1.047)}" r="11"/>`).join('')}</g>
 </g>
 <g transform="translate(300,18) rotate(-8)">
  <rect x="0" y="26" width="120" height="70" rx="6" fill="#2f2a38" stroke="#c9bfd8" stroke-width="5"/>
  <path d="M0 8 h120 v20 H0z" fill="#151220" stroke="#c9bfd8" stroke-width="5"/>
  <g fill="#f5f3ee">${[...Array(5)].map((_,i)=>`<path d="M${6+i*24} 8 l12 0 l-8 20 l-12 0z"/>`).join('')}</g>
 </g>
 <g transform="translate(286,128)">
  <ellipse cx="90" cy="52" rx="104" ry="28" fill="#f6f3ec" stroke="#cdc6b6" stroke-width="5"/>
  <ellipse cx="90" cy="44" rx="66" ry="26" fill="#8a5a2f" stroke="#5b3717" stroke-width="4"/>
  <path d="M42 40 q20 -22 48 -18 q30 4 46 18" fill="#a56d38"/>
  <path d="M60 30 q14 -12 28 -2 q16 -12 30 2 q-8 16 -30 16 q-22 0 -28 -16z" fill="#d9463a" stroke="#8f261e" stroke-width="3"/>
  <path d="M136 48 q22 -4 26 8" fill="none" stroke="#2f8f3d" stroke-width="6" stroke-linecap="round"/>
 </g>`;
/* 26 日経（引き締め） */
S.nikkei=`<rect width="540" height="230" fill="#eae3d4"/>
 <g stroke="#d6cdb8" stroke-width="3">${[...Array(9)].map((_,i)=>`<path d="M180 ${16+i*26} H540"/>`).join('')}</g>
 <g transform="translate(198,30)">
  <rect x="0" y="0" width="320" height="170" rx="4" fill="#faf6ea" stroke="#b6ab90" stroke-width="5"/>
  <path d="M160 0 V170" stroke="#b6ab90" stroke-width="4"/>
  <rect x="14" y="14" width="130" height="22" fill="#2b2b30"/>
  <g fill="#c2b89e">${[...Array(9)].map((_,i)=>`<rect x="14" y="${46+i*13}" width="${130-(i%3)*22}" height="6"/>`).join('')}</g>
  <g fill="#c2b89e">${[...Array(5)].map((_,i)=>`<rect x="176" y="${112+i*13}" width="${128-(i%3)*20}" height="6"/>`).join('')}</g>
  <rect x="176" y="14" width="128" height="86" fill="#fff" stroke="#b6ab90" stroke-width="3"/>
  <path d="M184 92 L212 70 L238 80 L266 44 L296 24" fill="none" stroke="#d9463a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M296 24 l-18 2 l8 14z" fill="#d9463a"/>
 </g>`;
/* 27 包帯（マクドナルド＝巻き巻き） */
S.bandage=`<rect width="540" height="230" fill="#e6eff5"/>
 <g fill="#d5e5ee">${[...Array(4)].map((_,i)=>`<circle cx="${230+i*94}" cy="${(i%2)?46:186}" r="52"/>`).join('')}</g>
 <rect y="196" width="540" height="34" fill="#cfe0e8"/>
 <g transform="translate(226,52)">
  <path d="M6 96 q26 -46 82 -50 q56 -4 92 26" fill="none" stroke="#f0c39c" stroke-width="46" stroke-linecap="round"/>
  <path d="M6 96 q26 -46 82 -50 q56 -4 92 26" fill="none" stroke="#b8815a" stroke-width="46" stroke-linecap="round" opacity=".15"/>
  <g stroke="#fbfaf6" stroke-width="17" stroke-linecap="round" fill="none">
   <path d="M22 84 q20 -32 44 -40"/><path d="M40 96 q22 -36 52 -42"/>
   <path d="M62 102 q24 -34 58 -36"/><path d="M86 104 q26 -30 62 -24"/>
   <path d="M112 102 q26 -22 58 -8"/></g>
  <g stroke="#d3ccbc" stroke-width="3.5" fill="none">
   <path d="M30 76 q20 -32 44 -40"/><path d="M70 106 q24 -34 58 -36"/><path d="M118 100 q26 -20 56 -6"/></g>
 </g>
 <g transform="translate(400,120)">
  <ellipse cx="60" cy="52" rx="60" ry="50" fill="#fbfaf6" stroke="#c3bcac" stroke-width="5"/>
  <ellipse cx="60" cy="52" rx="21" ry="17" fill="#e4dcce" stroke="#c3bcac" stroke-width="4"/>
  <path d="M4 52 q32 -22 56 -14 M8 74 q30 -14 52 -8" fill="none" stroke="#dcd5c6" stroke-width="4"/>
  <path d="M116 42 q30 12 26 48 q-30 -6 -40 -28z" fill="#fbfaf6" stroke="#c3bcac" stroke-width="5" stroke-linejoin="round"/>
 </g>`;
/* 28 サバティーニ（捌く） */
S.sabaki=`<rect width="540" height="230" fill="#2f2118"/>
 <g stroke="#3f2d20" stroke-width="4">${[...Array(7)].map((_,i)=>`<path d="M180 ${18+i*32} H540"/>`).join('')}</g>
 <g transform="translate(206,86)">
  <rect x="0" y="0" width="320" height="118" rx="10" fill="#d9b477" stroke="#8a6435" stroke-width="5"/>
  <g stroke="#c39f63" stroke-width="4">${[...Array(5)].map((_,i)=>`<path d="M0 ${20+i*20} H320"/>`).join('')}</g>
  <g transform="translate(24,26)">
   <path d="M10 34 C 40 4, 130 0, 170 26 L 196 8 L 190 32 L 196 56 L 170 40 C 130 66, 40 62, 10 34 Z"
         fill="#7fa8bd" stroke="#2f5468" stroke-width="4" stroke-linejoin="round"/>
   <path d="M22 30 C 60 18, 140 20, 168 30 C 140 42, 60 44, 22 30 Z" fill="#e8e2d2"/>
   <path d="M20 20 q40 -8 80 0 q40 8 70 6" fill="none" stroke="#2f5468" stroke-width="4"/>
   <circle cx="40" cy="28" r="6" fill="#fff" stroke="#2f5468" stroke-width="3"/>
  </g>
 </g>
 <g transform="translate(376,34) rotate(14)">
  <path d="M0 0 h96 q14 0 14 16 q0 22 -22 26 h-88z" fill="#cfd6de" stroke="#6b7480" stroke-width="4" stroke-linejoin="round"/>
  <rect x="-58" y="6" width="60" height="26" rx="6" fill="#3b2a1d" stroke="#1f150d" stroke-width="4"/>
  <path d="M4 8 h90" stroke="#eef2f5" stroke-width="4"/>
 </g>`;
/* 29 願いが叶う */
S.shrine=`<defs><linearGradient id="sh" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#1b2b57"/><stop offset="1" stop-color="#4a4a86"/></linearGradient></defs>
 <rect width="540" height="230" fill="url(#sh)"/>
 <g fill="#fff">${[...Array(20)].map((_,i)=>`<circle cx="${188+((i*79)%340)}" cy="${14+((i*47)%150)}" r="${1.5+(i%3)*0.9}" opacity="${0.5+(i%4)*0.15}"/>`).join('')}</g>
 <rect y="188" width="540" height="42" fill="#232a4a"/>
 <g transform="translate(300,36)" fill="#c0402f" stroke="#7d1f18" stroke-width="5" stroke-linejoin="round">
  <path d="M-6 20 q112 -18 224 0 l-6 20 q-106 -16 -212 0z"/>
  <path d="M18 44 h180 v14 H18z"/>
  <rect x="34" y="52" width="24" height="118"/><rect x="158" y="52" width="24" height="118"/>
 </g>
 <g transform="translate(342,96)">
  <path d="M0 14 L36 0 L72 14 V72 H0 Z" fill="#e8d6ae" stroke="#8a6f45" stroke-width="4" stroke-linejoin="round"/>
  <g stroke="#b09368" stroke-width="4">${[...Array(3)].map((_,i)=>`<path d="M12 ${28+i*14} H60"/>`).join('')}</g>
 </g>
 <g fill="#ffd233"><path d="M240 60 l8 18 l19 3 l-14 13 l4 19 l-17 -10 l-17 10 l4 -19 l-14 -13 l19 -3z"/>
  <path d="M486 128 l6 14 l15 2 l-11 10 l3 15 l-13 -8 l-13 8 l3 -15 l-11 -10 l15 -2z" opacity=".9"/></g>`;
/* 30 ダリ（サルバトール・ザリガニ） */
S.dali=`<defs><linearGradient id="da" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#1e3f66"/><stop offset="0.55" stop-color="#c98a52"/><stop offset="1" stop-color="#e8c48a"/></linearGradient></defs>
 <rect width="540" height="230" fill="url(#da)"/>
 <path d="M0 150 q160 -14 300 0 q120 12 240 -6 v86 H0z" fill="#b98246"/>
 <path d="M180 150 h360 v6 H180z" fill="#d6a869" opacity=".5"/>
 <g stroke="#5a3d22" stroke-width="12" stroke-linecap="round" fill="none"><path d="M312 40 q64 -12 122 8"/></g>
 <path d="M336 44 v20" stroke="#5a3d22" stroke-width="8" fill="none" stroke-linecap="round"/>
 <g transform="translate(340,44) scale(1.35)">
  <path d="M0 0 q46 -12 74 8 q22 16 6 42 q-14 22 -40 22 q-20 0 -26 -14 q-6 -16 6 -24 q-16 -14 -20 -34z"
        fill="#f0e2b8" stroke="#8a6f45" stroke-width="5" stroke-linejoin="round"/>
  <path d="M36 16 v20 l16 10" fill="none" stroke="#5a3d22" stroke-width="5" stroke-linecap="round"/>
  <g fill="#5a3d22">${[...Array(8)].map((_,i)=>`<circle cx="${36+30*Math.cos(i*0.785)}" cy="${20+26*Math.sin(i*0.785)}" r="2.6"/>`).join('')}</g>
 </g>
 <g transform="translate(360,140)" fill="#d94a2f" stroke="#8f261e" stroke-width="4" stroke-linejoin="round">
  <ellipse cx="60" cy="34" rx="40" ry="22"/>
  <path d="M96 34 q22 -4 26 -18 M96 40 q22 6 28 20" fill="none" stroke-width="7" stroke-linecap="round"/>
  <path d="M20 34 l-16 -12 l-2 14 l14 10z"/><path d="M20 40 l-18 12 l14 8 l10 -12z"/>
  <path d="M40 56 l-8 18 M60 58 l0 18 M80 56 l8 18" fill="none" stroke-width="6" stroke-linecap="round"/>
  <circle cx="86" cy="26" r="4" fill="#2b1008" stroke="none"/><circle cx="86" cy="42" r="4" fill="#2b1008" stroke="none"/>
 </g>`;

