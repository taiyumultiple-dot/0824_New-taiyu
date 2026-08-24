const D=id=>`https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`,V=(title,id)=>`read/online-reader.html?title=${encodeURIComponent(title)}&id=${encodeURIComponent(id)}`;
const S='1uP5hYJfUuGRtR50xdV_HxQR1TbBwyMCp';let f='all';const R=document.querySelector('#resources'),N=document.querySelector('#resource-count');
const resources=[
  ['plan','文','授課計畫表','閩南語文（上）授課計畫表','課程目標、教學進度與評量安排。',[['線上閱讀','read/閩南語文-上-授課計畫表.html'],['下載 Word','assets/documents/閩南語文(上)授課計畫表-1150810.docx']]],
  ['plan','文','授課計畫表','閩南語文（下）授課計畫表','課程目標、教學進度與評量安排。',[['線上閱讀','read/閩南語文-下-授課計畫表.html'],['下載 Word','assets/documents/閩南語文(下)授課計畫表-1150810.docx']]],
  ['plan','文','授課計畫表','閩南語文（全）授課計畫表','課程目標、教學進度與評量安排。',[['線上閱讀','read/閩南語文-全-授課計畫表.html'],['下載 Word','assets/documents/閩南語文(全)授課計畫表-1150810.docx']]],
  ['materials','冊','電子書','第 1 課電子書','自我探索、生涯規劃',[['線上閱讀','https://www.taiyucoo.com.tw/AR//8997/8997-CH01/mobile/index.html'],['下載全冊 PDF',D('1rVlLkQBr1QKuZCiw__yJdXVyU1hHO7lQ')]]],
  ['materials','指','教師教材','授課指引（全）','全冊教師授課指引 PDF。',[['線上閱讀',V('授課指引（全）','1EaLr3J_96wWFsFpsjygvQyBvgLDCkV24')],['下載 PDF',D('1EaLr3J_96wWFsFpsjygvQyBvgLDCkV24')]]],
  ['materials','活','課堂活動本','課堂活動本（全・教用）','活動本 PDF 與 Word。',[['線上閱讀',V('課堂活動本（全・教用）','1u2WiMOORsASrlRshraHAvsYsy4eo15SP')],['下載 PDF',D('1u2WiMOORsASrlRshraHAvsYsy4eo15SP')],['下載 Word',D('1cgIA4xUPgl6TslqfirvkHqXBbDvzn5ct')]]],
  ['materials','測','測驗卷','測驗卷（全）','教師用測驗卷 PDF 與 Word。',[['線上閱讀',V('測驗卷（全）','1Il6GdJ7Lh0f6RjYkllvA5GJKgnJZ1mPM')],['下載 PDF',D('1Il6GdJ7Lh0f6RjYkllvA5GJKgnJZ1mPM')],['下載 Word',D('1NbdBx1y1pExmnpXXuqX7DBKS-zr27EeW')]]],
  ['slides','簡','教學簡報','第 1 課教學簡報','人生的路家己行',[['線上閱讀',V('第 1 課教學簡報',S)],['下載簡報',D(S)]]]
];
function render(){const a=resources.filter(x=>f==='all'||x[0]===f);R.innerHTML=a.map(x=>`<article class="resource"><div class="resource-icon">${x[1]}</div><span class="tag">${x[2]}</span><h3>${x[3]}</h3><p>${x[4]}</p><div class="actions">${x[5].map((z,i)=>`<a class="button ${i===0?'primary':''}" href="${z[1]}" ${z[1].startsWith('http')?'target="_blank" rel="noopener"':''}>${z[0]}</a>`).join('')}</div></article>`).join('');N.textContent=`${a.length} 份教材`}
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{f=b.dataset.filter;document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('is-active',x===b));render()});render();
