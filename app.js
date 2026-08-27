const state=JSON.parse(localStorage.getItem('govcom')||'null')||{meetings:[{date:'26/08/2026',pipeline:300000,strong:250000,commit:200000,won:320000}],actions:[{name:'Revisar oportunidades Strong',deadline:'30/08/2026',status:'Pendente'}]};const meta=500000;
function money(v){return 'R$ '+Number(v).toLocaleString('pt-BR')}
function save(){localStorage.setItem('govcom',JSON.stringify(state))}
function render(){const m=state.meetings[state.meetings.length-1];const gap=Math.max(meta-m.won,0);const forecast=m.won+m.pipeline*.2+m.strong*.5+m.commit*.9;const coverage=gap?(m.pipeline+m.strong+m.commit)/gap:9.9;
[['kpiMeta',meta],['kpiWon',m.won],['kpiGap',gap],['kpiForecast',forecast]].forEach(x=>{const e=document.getElementById(x[0]);if(e)e.textContent=money(x[1])});
let e=document.getElementById('kpiAting');if(e)e.textContent=Math.round(m.won/meta*100)+'%';e=document.getElementById('kpiCoverage');if(e)e.textContent=coverage.toFixed(1).replace('.',',')+'x';
}
function openPage(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));const p=document.getElementById(id);if(p)p.classList.add('active');document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.page===id))}
document.querySelectorAll('.nav-item').forEach(b=>b.addEventListener('click',()=>openPage(b.dataset.page)));render();