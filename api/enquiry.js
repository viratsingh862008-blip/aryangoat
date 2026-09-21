export default function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({ok:false,error:'method_not_allowed'});
  const body=req.body&&typeof req.body==='object'?req.body:{};
  if(body.website) return res.status(400).json({ok:false,error:'invalid_request'});
  const required=['name','phone','checkin','checkout'];
  const missing=required.filter(k=>!String(body[k]??'').trim());
  if(missing.length) return res.status(400).json({ok:false,error:'missing_required_fields',fields:missing});
  return res.status(200).json({ok:true,received:true});
}