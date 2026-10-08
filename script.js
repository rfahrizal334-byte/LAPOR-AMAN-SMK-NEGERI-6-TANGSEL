const $=s=>document.querySelector(s);
const toast=(msg)=>{const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),3500)};

const desc=$("#description"), counter=$("#counter");
desc.addEventListener("input",()=>counter.textContent=desc.value.length);

function ticket(){
  const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s="LA-";
  for(let i=0;i<6;i++)s+=chars[Math.floor(Math.random()*chars.length)];
  return s;
}
function getReports(){return JSON.parse(localStorage.getItem("laporAmanReports")||"[]")}
function saveReports(x){localStorage.setItem("laporAmanReports",JSON.stringify(x))}

$("#reportForm").addEventListener("submit",e=>{
  e.preventDefault();
  const t=ticket();
  const report={
    ticket:t,category:$("#category").value,when:$("#when").value,where:$("#where").value,
    urgency:$("#urgency").value,description:desc.value,created:new Date().toISOString(),status:"Diterima"
  };
  const all=getReports();all.push(report);saveReports(all);
  e.target.reset();counter.textContent="0";
  toast("Laporan berhasil dikirim. Kode tiket: "+t);
  setTimeout(()=>alert("LAPORAN TERKIRIM\n\nSimpan kode tiket Anda:\n"+t+"\n\nGunakan kode ini untuk mengecek status laporan."),150);
});

$("#statusForm").addEventListener("submit",e=>{
  e.preventDefault();
  const code=$("#ticketInput").value.trim().toUpperCase();
  const report=getReports().find(r=>r.ticket===code);
  const box=$("#statusResult");box.classList.remove("hidden");
  if(report){
    box.textContent="✓ Laporan "+report.ticket+" berstatus: "+report.status+".";
  }else{
    box.textContent="Kode tiket tidak ditemukan pada perangkat ini.";
    box.style.background="#fff5f5";box.style.color="#9b3b3b";
  }
});

const when=$("#when");
when.value=new Date(Date.now()-new Date().getTimezoneOffset()*60000).toISOString().slice(0,16);
