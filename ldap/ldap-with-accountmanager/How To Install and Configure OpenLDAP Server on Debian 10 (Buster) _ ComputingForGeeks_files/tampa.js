__ez.vaep=(function(){var pixels=[],pxURL="/porpoiseant/lemon.gif";function AddPixel(vaID,pixelData){if(__ez.dot.isDefined(vaID)&&__ez.dot.isValid(pixelData)){pixels.push({type:'video-ad',video_ad_impression_id:vaID,domain_id:__ez.dot.getDID(),t_epoch:__ez.dot.getEpoch(0),data:__ez.dot.dataToStr(pixelData)});}}
function Fire(){if(typeof document.visibilityState!=='undefined'&&document.visibilityState==="prerender"){return;}
if(__ez.dot.isDefined(pixels)&&pixels.length>0){(new Image()).src=__ez.dot.getURL(pxURL)+"?orig="+(__ez.template.isOrig===true?1:0)+"&va="+btoa(JSON.stringify(pixels));}
pixels=[];}
return{Add:AddPixel,Fire:Fire};})();