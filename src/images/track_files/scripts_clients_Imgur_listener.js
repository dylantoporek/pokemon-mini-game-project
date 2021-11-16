(function(win){win.cca=win.cca||{}
win.cca.privacy=win.cca.privacy||{que:[]}
var doAPI=function(){win.__ccaImgur=win.__ccaImgur||{que:[]}
win.__ccaImgur.log=[];var log=function(data){win.__ccaImgur.log.push(data);}
eventEnums=["pageload","vote","comment","favorite","share"]
win.__ccaImgur.fireEvent=function(data){if(!validateEvent(data)){return}
var pixel=new Image();var scrapePixelUrl=new URL("https://imgur-categorisation.ccgateway.net/v1/pixel");if(check(data.pageTitle)){scrapePixelUrl.searchParams.set("pageTitle",data.pageTitle);}
if(check(data.pageDescription)){scrapePixelUrl.searchParams.set("pageDescription",data.pageDescription);}
if(check(data.imageid)){scrapePixelUrl.searchParams.set("imageid",data.imageid);}
if(check(data.comment)){scrapePixelUrl.searchParams.set("comment",data.comment);}
if(check(data.url)){scrapePixelUrl.searchParams.set("url",data.url);}
if(check(data.eventType)){scrapePixelUrl.searchParams.set("eventType",data.eventType);}
if(check(data.vote)){scrapePixelUrl.searchParams.set("vote",data.vote);}
if(check(data.shareTarget)){scrapePixelUrl.searchParams.set("shareTarget",data.shareTarget);}
if(check(data.favorite)){scrapePixelUrl.searchParams.set("favorite",data.favorite);}
if(check(data.carbonid)){scrapePixelUrl.searchParams.set("carbonid",data.carbonid);}
if(check(data.pageid)){scrapePixelUrl.searchParams.set("pageid",data.pageid);}
if(check(data.tags)){scrapePixelUrl.searchParams.set("tags",JSON.stringify(data.tags));}
if(check(data.pageComments)){scrapePixelUrl.searchParams.set("pageComments",JSON.stringify(data.pageComments));}
pixel.src=encodeURI(scrapePixelUrl.href);}
var check=function(thing){if(thing&&thing!=""&&thing!=[]&&thing!="undefined"){return true}
return false}
var validateEvent=function(data){if(!data){console.log("WARNING from CCAImgur, empty data was sent in event");return false}
if(!data.eventType){console.log("WARNING from CCAImgur, data was sent without event name");return false}
data.eventType=data.eventType.toLowerCase();if(!eventEnums.includes(data.eventType)){console.log(`WARNING from CCAImgur, the event name of ${data.eventType} is not a valid enum`);return false}
if(data.eventType!="pageload"){if(!_ccScriptSettings||!_ccScriptSettings.user||!_ccScriptSettings.user.id){console.log(`WARNING from CCAImgur, could not get id`);return false}else{data.carbonid=_ccScriptSettings.user.id}}
if(_ccScriptSettings&&_ccScriptSettings.user&&_ccScriptSettings.user.id){data.pageid=_ccScriptSettings.pageData.pvid}
if(data.favorite){data.favorite=true;}
if(data.vote&&data.vote!='upvote'&&data.vote!='downvote'){console.log(`WARNING from CCAImgur,vote property set to ${data.vote} does not match enums: upvote,downvote`);return false}
if(!data.url||data.url==""){data.url=win.location.href;}
return true}
var tempQue=win.__ccaImgur.que
for(callback of tempQue){log("Calling a callback created BEFORE load")
callback();log("completing callback")}
tempQue=null;win.__ccaImgur.que.push=function(callback){log("Calling a callback created AFTER load")
callback();log("completing callback")}}
var privpush=function(){switch(ccao.privacy.law.toLowerCase()){case "gdpr":if(ccao.privacy.gdpr.Consent){doAPI();}else{}
break;case "ccpa":if(ccao.privacy.ccpa.Consent){doAPI();}else{}
break;case "na":doAPI();break;case "optout":case "unknown":default:break;}}
win.cca.privacy.que.push(privpush)})(window)