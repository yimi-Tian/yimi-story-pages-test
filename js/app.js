fetch('data/version.json').then(r=>r.json()).then(j=>{document.getElementById('v').textContent=j.version}).catch(()=>{document.getElementById('v').textContent='讀取失敗'})
