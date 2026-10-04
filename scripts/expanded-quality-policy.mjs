// Evidence truth is editorial; this gate prevents incomplete reviews from authorizing release.
export function validateExpandedQuality(route, { requireAssessment = false } = {}) {
  const errors=[];
  const q=route.qualityAssessment, grade=route.qualityGrade;
  if(!q){if(requireAssessment)errors.push(`${route.slug}: expanded-v2 değerlendirmesi gerekli.`);return errors;}
  const fail=(condition,message)=>{if(condition)errors.push(`${route.slug}: ${message}`);};
  fail(q.model!=='expanded-v2','bilinmeyen kalite modeli.');
  fail(!['A','B','C+','C','D'].includes(grade),'kalite sınıfı gerekli.');
  fail((grade==='C+'?'C':grade)!==route.confidence,'confidence/qualityGrade tutarsız.');
  const ready=['C+','B','A'].includes(grade);
  if(ready){
    for(const key of ['identityVerified','speciesRouteSpecific','currentLawResolved','safePublicAccessVerified'])fail(q[key]!==true,`${grade}: ${key} eksik.`);
    fail(!Array.isArray(q.unresolvedRisks)||q.unresolvedRisks.length>0,'hukuk/erişim riskleri çözülmeden C+ olamaz.');
    fail(!route.fishEvidence?.length||!route.fish?.length,'rota-özel tür kanıtı gerekli.');
    fail(!route.accessEvidence?.length,'erişim kanıtı gerekli.');
    fail(!Number.isFinite(route.lat)||!Number.isFinite(route.lng),'genel su konumu doğrulanmalı.');
  }
  if(['A','B'].includes(grade)){
    fail(new Set(q.independentStrongFamilies||[]).size<2,'ikinci güçlü bağımsız aile gerekli.');
    fail(q.localContentVerified!==true,'özgün yerel içerik gerekli.');
  }
  if(grade==='A')fail(q.fieldOrEquivalentVerified!==true,'saha veya eşdeğer olağanüstü kanıt gerekli.');
  fail(!ready&&route.indexing!=='hold','C/D kaydı C+ eşiği olmadan hold kalmalı.');
  const names=new Set((route.fishEvidence||[]).map(e=>e.name));
  fail((route.fish||[]).some(f=>!names.has(f)),'kanıtsız tür listede kalamaz.');
  return errors;
}
