(async function(){
  const b64=(window.__b64parts||[]).join("");
  const bin=atob(b64);
  const bytes=new Uint8Array(bin.length);
  for(let i=0;i<bin.length;i++) bytes[i]=bin.charCodeAt(i);
  const text=await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate"))).text();
  window.EMOTEKA_DATA=JSON.parse(text);
  window.dispatchEvent(new Event("emoteka-ready"));
})();
