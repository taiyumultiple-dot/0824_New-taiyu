const download=id=>`https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`;
const lessonInfo=[
  ['自我探索、生涯規劃','人生的路家己行'],['生命教育','做伙大漢，陪你老'],['地理','彼年熱天的東部名產'],['歲時文化','甜粿的氣味'],['節氣文化','清明'],['科技','電子時代'],['糧食永續（SDG2）','快樂農場'],['健康與福祉（SDG3）','阿公咧蹛院']
];
const slides=['1uP5hYJfUuGRtR50xdV_HxQR1TbBwyMCp','1wF_NU2X75d_-9UaNlRE2b_nby-KrvCkn','11eUsQIXKWpeggL9Tjm0agnD4N4rs_Jxs','1B4mTFS9RRql6TwCLkNYsCgCt1tE1m_uz','10-nnJ_twaQLxKKmA6SSDj_abeaia9Wr-','1kXM8IIKIIy9F794nY6Sh-C2XTbWhwBMe','16mCwrIIxc3-Z3eDCOyJq6VKWahpUFEyy','1U-UB9ULgzQ-TENIePZjRCNv-qIAl54xd'];
const icons={plan:'文',guide:'指',activity:'活',ebook:'冊',test:'測',slides:'簡'};
const fullResources=[
  {scope:'full',type:'plan',icon:'plan',tag:'授課計畫表',title:'閩南語文（上）授課計畫表',desc:'上學期課程目標、教學進度與評量安排。',actions:[['下載 Word','assets/documents/閩南語文(上)授課計畫表-1150810.docx']]},
  {scope:'full',type:'plan',icon:'plan',tag:'授課計畫表',title:'閩南語文（下）授課計畫表',desc:'下學期課程目標、教學進度與評量安排。',actions:[['下載 Word','assets/documents/閩南語文(下)授課計畫表-1150810.docx']]},
  {scope:'full',type:'plan',icon:'plan',tag:'授課計畫表',title:'閩南語文（全）授課計畫表',desc:'全學年課程總覽與單元規劃。',actions:[['下載 Word','assets/documents/閩南語文(全)授課計畫表-1150810.docx']]},
  {scope:'full',type:'materials',icon:'guide',tag:'教師教材',title:'授課指引（全）',desc:'全冊教師授課指引 PDF。',actions:[['下載 PDF',download('1EaLr3J_96wWFsFpsjygvQyBvgLDCkV24')]]},
  {scope:'full',type:'materials',icon:'activity',tag:'課堂活動本',title:'課堂活動本（全・教用）',desc:'全冊教用課堂活動本 PDF。',actions:[['下載 PDF',download('1u2WiMOORsASrlRshraHAvsYsy4eo15SP')]]},
  {scope:'full',type:'materials',icon:'test',tag:'測驗卷',title:'測驗卷（全）',desc:'全冊教師用測驗卷 PDF。',actions:[['下載 PDF',download('1Il6GdJ7Lh0f6RjYkllvA5GJKgnJZ1mPM')] ]}
];
const unitResources=lessonInfo.flatMap(([theme,name],index)=>{
  const no=index+1,folder=`assets/lesson-files/lesson-${String(no).padStart(2,'0')}`;
  const go=`lesson-${String(no).padStart(2,'0')}.html`;
  const toLesson=['前往第 '+no+' 課頁',go];
  return [
    {scope:String(no),type:'plan',icon:'plan',tag:'授課計畫表',title:`閩南語文（第${no}課）授課計畫表`,desc:name,actions:[['下載 Word',`${folder}/閩南語文（第${no}課）授課計畫表＿${name}.docx`],toLesson]},
    {scope:String(no),type:'materials',icon:'guide',tag:'教師教材',title:`授課指引＿第${no}課`,desc:name,actions:[['下載 PDF',`${folder}/授課指引＿第${no}課＿${name}.pdf`],toLesson]},
    {scope:String(no),type:'materials',icon:'activity',tag:'課堂活動本',title:`課堂活動本＿第${no}課`,desc:name,actions:[['下載 PDF',`${folder}/課堂活動本＿第${no}課＿${name}.pdf`],toLesson]},
    {scope:String(no),type:'materials',icon:'ebook',tag:'電子書',title:`電子書＿第${no}課`,desc:theme,actions:[['下載電子書 PDF',`${folder}/電子書＿第${no}課＿${name}.pdf`],toLesson]},
    {scope:String(no),type:'materials',icon:'test',tag:'測驗卷',title:`測驗卷＿第${no}課`,desc:'本課教師用測驗卷 PDF。',actions:[['下載 PDF',`${folder}/測驗卷＿第${no}課＿${name}.pdf`],toLesson]},
    {scope:String(no),type:'slides',icon:'slides',tag:'教學簡報',title:`教學簡報＿第${no}課`,desc:name,actions:[['下載簡報',download(slides[index])],toLesson]}
  ];
});
const resources=[...fullResources,...unitResources];
let scope='all',type='all';
const resourceEl=document.querySelector('#resources'),countEl=document.querySelector('#resource-count'),titleEl=document.querySelector('#resources-title');
function scopeTitle(){if(scope==='all')return '完整教材總庫';if(scope==='full')return '全冊教材';return `第 ${scope} 課教材`}
function card(resource){return `<article class="resource"><div class="resource-icon">${icons[resource.icon]}</div><span class="tag">${resource.tag}</span><h3>${resource.title}</h3><p>${resource.desc}</p><div class="actions">${resource.actions.map((action,index)=>`<a class="button ${index===0?'primary':''}" href="${action[1]}" ${action[1].startsWith('http')?'target="_blank" rel="noopener"':''}>${action[0]}</a>`).join('')}</div></article>`}
function setScope(nextScope){scope=nextScope;document.querySelectorAll('.scope-tab').forEach(item=>{const selected=item.dataset.scope===scope;item.classList.toggle('is-active',selected);item.setAttribute('aria-pressed',selected)})}
function render(){const visible=resources.filter(resource=>(scope==='all'||resource.scope===scope)&&(type==='all'||resource.type===type));resourceEl.innerHTML=visible.map(card).join('');countEl.textContent=`${visible.length} 份教材`;titleEl.textContent=scopeTitle();const empty=document.querySelector('#empty');empty.hidden=visible.length>0;if(!visible.length)empty.textContent=scope==='full'&&type==='slides'?'全冊沒有教學簡報；請選擇「全部檔案」或第 1～8 課查看各課簡報。':'此範圍目前沒有這類教材。'}
document.querySelectorAll('.scope-tab').forEach(button=>button.onclick=()=>{setScope(button.dataset.scope);render()});
document.querySelectorAll('.tab').forEach(button=>button.onclick=()=>{type=button.dataset.filter;const hasMatches=resources.some(resource=>(scope==='all'||resource.scope===scope)&&(type==='all'||resource.type===type));if(!hasMatches&&scope!=='all')setScope('all');document.querySelectorAll('.tab').forEach(item=>{const selected=item===button;item.classList.toggle('is-active',selected);item.setAttribute('aria-pressed',selected)});render()});
render();
