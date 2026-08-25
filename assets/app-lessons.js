const lessons=[['自我探索、生涯規劃','人生的路家己行'],['生命教育','做伙大漢，陪你老'],['地理','彼年熱天的東部名產'],['歲時文化','甜粿的氣味'],['節氣文化','清明'],['科技','電子時代'],['糧食永續（SDG2）','快樂農場'],['健康與福祉（SDG3）','阿公咧蹛院']];
const slides=['1uP5hYJfUuGRtR50xdV_HxQR1TbBwyMCp','1wF_NU2X75d_-9UaNlRE2b_nby-KrvCkn','11eUsQIXKWpeggL9Tjm0agnD4N4rs_Jxs','1B4mTFS9RRql6TwCLkNYsCgCt1tE1m_uz','10-nnJ_twaQLxKKmA6SSDj_abeaia9Wr-','1kXM8IIKIIy9F794nY6Sh-C2XTbWhwBMe','16mCwrIIxc3-Z3eDCOyJq6VKWahpUFEyy','1U-UB9ULgzQ-TENIePZjRCNv-qIAl54xd'];
const D=id=>`https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`;const no=Math.min(8,Math.max(1,Number(document.body.dataset.lesson)||1)),i=no-1,local=`assets/lesson-files/lesson-${String(no).padStart(2,'0')}`;const iconByLabel={'文':'plan','指':'guide','活':'activity','冊':'ebook','測':'test','簡':'slides'};let filter='all';
document.querySelector('main').insertAdjacentHTML('afterbegin',`<header class="lesson-heading"><p>第 ${no} 課 AI 書櫃</p><h1>${lessons[i][1]}</h1></header>`);
const shared=[
  ['plan','文','授課計畫表',`閩南語文（第${no}課）授課計畫表`,lessons[i][1],[['下載 Word',`${local}/閩南語文（第${no}課）授課計畫表＿${lessons[i][1]}.docx`]]],
  ['materials','指','教師教材',`第 ${no} 課授課指引`,lessons[i][1],[['下載 PDF',`${local}/授課指引＿第${no}課＿${lessons[i][1]}.pdf`]]],
  ['materials','活','課堂活動本',`第 ${no} 課課堂活動本`,'本課活動本 PDF。',[['下載 PDF',`${local}/課堂活動本＿第${no}課＿${lessons[i][1]}.pdf`]]],
  ['materials','測','測驗卷',`第 ${no} 課測驗卷`,'本課教師用測驗卷 PDF。',[['下載 PDF',`${local}/測驗卷＿第${no}課＿${lessons[i][1]}.pdf`]]]
];
const resources=[...shared.slice(0,3),['materials','冊','電子書',`第 ${no} 課電子書`,lessons[i][0],[['下載電子書 PDF',`${local}/電子書＿第${no}課＿${lessons[i][1]}.pdf`]]],...shared.slice(3),['slides','簡','教學簡報',`第 ${no} 課教學簡報`,lessons[i][1],[['下載簡報',D(slides[i])]]]];
function render(){const visible=resources.filter(x=>filter==='all'||x[0]===filter);document.querySelector('#resources').innerHTML=visible.map(x=>`<article class="resource"><div class="resource-icon"><img src="assets/icons/${iconByLabel[x[1]]}.png" alt="${x[2]}圖示"></div><span class="tag">${x[2]}</span><h3>${x[3]}</h3><p>${x[4]}</p><div class="actions">${x[5].map((a,k)=>`<a class="button ${k===0?'primary':''}" href="${a[1]}" ${a[1].startsWith('http')?'target="_blank" rel="noopener"':''}>${a[0]}</a>`).join('')}</div></article>`).join('');document.querySelector('#resource-count').textContent=`${visible.length} 份教材`}
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('is-active',x===b));render()});render();
