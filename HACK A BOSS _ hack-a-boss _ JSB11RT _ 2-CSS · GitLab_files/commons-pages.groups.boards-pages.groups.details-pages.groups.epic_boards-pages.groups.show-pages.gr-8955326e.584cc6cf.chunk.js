(this.webpackJsonp=this.webpackJsonp||[]).push([[5,233,889],{"79X9":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var i=n("yBQT"),o=n.n(i),r=(n("WmlO"),n("3R5X"),n("W9Nl"),n("N8nX"),n("c5nz"),n("OZcL"),n("x5O4"),n("lxnW"),n("5sVn"),n("4xRc"),n("LM9r"),n("51O6"),n("une/"),n("Kypc"),n("yt6R"),n("6v3E"),n("RsOv"),n("JHu5"),n("XUYm"),n("h8Et"),n("6oy4")),s=n.n(r),a=n("O6x3"),c=n.n(a),u=n("q+nE"),l=n("oj/M"),d=n("xILg"),p=n("yYHy"),b=n("uw3E"),f=n("SPw5");const g=c.a.prototype.stopCallback;c.a.prototype.stopCallback=function(t,e,n){return-1===Object(b.pb)(b.mb).indexOf(n)&&g.call(this,t,e,n)};const m="local-mousetrap-instance";function h(t){const e=t.closest(".md-area").find(".js-md"),n=new Map;return e.each((function(){const t=s()(this),e=t.data("md-shortcuts");null!=e&&e.length&&n.set(t,e)})),n}class y{constructor(){this.onToggleHelp=this.onToggleHelp.bind(this),this.helpModalElement=null,this.helpModalVueInstance=null,c.a.bind(Object(b.pb)(b.lb),this.onToggleHelp),c.a.bind(Object(b.pb)(b.ib),y.focusSearch),c.a.bind(Object(b.pb)(b.c),this.focusFilter.bind(this)),c.a.bind(Object(b.pb)(b.nb),y.onTogglePerfBar),c.a.bind(Object(b.pb)(b.D),y.hideAppearingContent),c.a.bind(Object(b.pb)(b.kb),y.onToggleCanary);const t=document.body.dataset.findFile;c.a.bind(Object(b.pb)(b.C),(function(){return Object(d.a)(".shortcuts-todos")})),c.a.bind(Object(b.pb)(b.d),(function(){return Object(d.a)(".dashboard-shortcuts-activity")})),c.a.bind(Object(b.pb)(b.y),(function(){return Object(d.a)(".dashboard-shortcuts-issues")})),c.a.bind(Object(b.pb)(b.z),(function(){return Object(d.a)(".dashboard-shortcuts-merge_requests")})),c.a.bind(Object(b.pb)(b.A),(function(){return Object(d.a)(".dashboard-shortcuts-projects")})),c.a.bind(Object(b.pb)(b.x),(function(){return Object(d.a)(".dashboard-shortcuts-groups")})),c.a.bind(Object(b.pb)(b.e),(function(){return Object(d.a)(".dashboard-shortcuts-milestones")})),c.a.bind(Object(b.pb)(b.B),(function(){return Object(d.a)(".dashboard-shortcuts-snippets")})),c.a.bind(Object(b.pb)(b.mb),y.toggleMarkdownPreview),null!=t&&c.a.bind(Object(b.pb)(b.j),(function(){Object(p.N)(t)})),s()(document).on("click.more_help",".js-more-help-button",(function(t){s()(this).remove(),t.preventDefault()})),s()(".js-shortcuts-modal-trigger").off("click").on("click",this.onToggleHelp),Object(f.c)()&&Object(f.a)()}onToggleHelp(t){var e=this;null!=t&&t.preventDefault&&t.preventDefault(),this.helpModalElement&&this.helpModalVueInstance?(this.helpModalVueInstance.$destroy(),this.helpModalElement.remove(),this.helpModalElement=null,this.helpModalVueInstance=null):(this.helpModalElement=document.createElement("div"),document.body.append(this.helpModalElement),this.helpModalVueInstance=new u.default({el:this.helpModalElement,components:{ShortcutsHelp:function(){return Promise.all([n.e(34),n.e(933),n.e(1087)]).then(n.bind(null,"58ZD"))}},render:function(t){return t("shortcuts-help",{on:{hidden:e.onToggleHelp}})}}))}static onTogglePerfBar(t){t.preventDefault();Object(l.H)(Object(l.n)("perf_bar_enabled"))?Object(l.R)("perf_bar_enabled","false",{path:"/"}):Object(l.R)("perf_bar_enabled","true",{path:"/"}),Object(p.D)()}static onToggleCanary(t){t.preventDefault();const e=Object(l.H)(Object(l.n)("gitlab_canary"));Object(l.R)("gitlab_canary",(!e).toString(),{expires:365,path:"/"}),Object(p.D)()}static toggleMarkdownPreview(t){const e=s()(t.target),n=e.closest("form");e.hasClass("js-note-text")&&s()(".js-md-preview-button",n).focus(),s()(document).triggerHandler("markdown-preview:toggle",[t])}focusFilter(t){this.filterInput||(this.filterInput=s()("input[type=search]",".nav-controls")),this.filterInput.focus(),t.preventDefault()}static focusSearch(t){s()("#search").focus(),t.preventDefault&&t.preventDefault()}static hideAppearingContent(t){document.querySelectorAll(".tooltip, .popover").forEach((function(t){t.style.display="none"})),t.preventDefault&&t.preventDefault()}static initMarkdownEditorShortcuts(t,e){const n=h(t),i=new c.a(t[0]);t.data(m,i),n.forEach((function(t,n){i.bind(t,(function(t){t.preventDefault(),e(n)}))}));const r=o()([...n.values()]),s=c.a.prototype.stopCallback;i.stopCallback=function(t,e,n){return!r.includes(n)&&s.call(this,t,e,n)}}static removeMarkdownEditorShortcuts(t){const e=t.data(m);e&&h(t).forEach((function(t){e.unbind(t)}))}}},"7IkT":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("AfGZ");function i(t){return t.replace(/ trial\b/i,"")}},"7lWn":function(t,e){!function(t){var e=t.prototype.stopCallback;t.prototype.stopCallback=function(t,n,i){return!!this.paused||e.call(this,t,n,i)},t.prototype.pause=function(){this.paused=!0},t.prototype.unpause=function(){this.paused=!1},t.init()}(Mousetrap)},B065:function(t,e,n){"use strict";var i=n("wWEL"),o={props:{name:{type:String,required:!0}},render(){var t,e;return null===(t=this.$scopedSlots)||void 0===t?void 0:null===(e=t[Object(i.c)(this.name)])||void 0===e?void 0:e.call(t)}},r=n("bPvS"),s=Object(r.a)(o,void 0,void 0,!1,null,null,null);e.a=s.exports},HWy0:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("O6x3"),o=n.n(i),r=n("yYHy"),s=n("xILg"),a=n("uw3E"),c=n("79X9");class u extends c.default{constructor(){super(),o.a.bind(Object(a.pb)(a.q),(function(){return Object(s.a)(".shortcuts-project")})),o.a.bind(Object(a.pb)(a.f),(function(){return Object(s.a)(".shortcuts-project-activity")})),o.a.bind(Object(a.pb)(a.r),(function(){return Object(s.a)(".shortcuts-project-releases")})),o.a.bind(Object(a.pb)(a.i),(function(){return Object(s.a)(".shortcuts-tree")})),o.a.bind(Object(a.pb)(a.g),(function(){return Object(s.a)(".shortcuts-commits")})),o.a.bind(Object(a.pb)(a.m),(function(){return Object(s.a)(".shortcuts-builds")})),o.a.bind(Object(a.pb)(a.t),(function(){return Object(s.a)(".shortcuts-network")})),o.a.bind(Object(a.pb)(a.s),(function(){return Object(s.a)(".shortcuts-repository-charts")})),o.a.bind(Object(a.pb)(a.k),(function(){return Object(s.a)(".shortcuts-issues")})),o.a.bind(Object(a.pb)(a.l),(function(){return Object(s.a)(".shortcuts-issue-boards")})),o.a.bind(Object(a.pb)(a.o),(function(){return Object(s.a)(".shortcuts-merge_requests")})),o.a.bind(Object(a.pb)(a.w),(function(){return Object(s.a)(".shortcuts-wiki")})),o.a.bind(Object(a.pb)(a.u),(function(){return Object(s.a)(".shortcuts-snippets")})),o.a.bind(Object(a.pb)(a.n),(function(){return Object(s.a)(".shortcuts-kubernetes")})),o.a.bind(Object(a.pb)(a.h),(function(){return Object(s.a)(".shortcuts-environments")})),o.a.bind(Object(a.pb)(a.p),(function(){return Object(s.a)(".shortcuts-metrics")})),o.a.bind(Object(a.pb)(a.v),u.navigateToWebIDE),o.a.bind(Object(a.pb)(a.W),(function(){return Object(s.a)(".shortcuts-new-issue")}))}static navigateToWebIDE(){var t,e,n;const i=Object(r.e)({sourceProjectFullPath:null===(t=window.gl.mrWidgetData)||void 0===t?void 0:t.source_project_full_path,targetProjectFullPath:null===(e=window.gl.mrWidgetData)||void 0===e?void 0:e.target_project_full_path,iid:null===(n=window.gl.mrWidgetData)||void 0===n?void 0:n.iid});i&&Object(r.N)(i)}}},O6x3:function(t,e,n){var i;!function(o,r,s){if(o){for(var a,c={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},u={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},l={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},d={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p=1;p<20;++p)c[111+p]="f"+p;for(p=0;p<=9;++p)c[p+96]=p.toString();y.prototype.bind=function(t,e,n){return t=t instanceof Array?t:[t],this._bindMultiple.call(this,t,e,n),this},y.prototype.unbind=function(t,e){return this.bind.call(this,t,(function(){}),e)},y.prototype.trigger=function(t,e){return this._directMap[t+":"+e]&&this._directMap[t+":"+e]({},t),this},y.prototype.reset=function(){return this._callbacks={},this._directMap={},this},y.prototype.stopCallback=function(t,e){if((" "+e.className+" ").indexOf(" mousetrap ")>-1)return!1;if(function t(e,n){return null!==e&&e!==r&&(e===n||t(e.parentNode,n))}(e,this.target))return!1;if("composedPath"in t&&"function"==typeof t.composedPath){var n=t.composedPath()[0];n!==t.target&&(e=n)}return"INPUT"==e.tagName||"SELECT"==e.tagName||"TEXTAREA"==e.tagName||e.isContentEditable},y.prototype.handleKey=function(){var t=this;return t._handleKey.apply(t,arguments)},y.addKeycodes=function(t){for(var e in t)t.hasOwnProperty(e)&&(c[e]=t[e]);a=null},y.init=function(){var t=y(r);for(var e in t)"_"!==e.charAt(0)&&(y[e]=function(e){return function(){return t[e].apply(t,arguments)}}(e))},y.init(),o.Mousetrap=y,t.exports&&(t.exports=y),void 0===(i=function(){return y}.call(e,n,e,t))||(t.exports=i)}function b(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)}function f(t){if("keypress"==t.type){var e=String.fromCharCode(t.which);return t.shiftKey||(e=e.toLowerCase()),e}return c[t.which]?c[t.which]:u[t.which]?u[t.which]:String.fromCharCode(t.which).toLowerCase()}function g(t){return"shift"==t||"ctrl"==t||"alt"==t||"meta"==t}function m(t,e,n){return n||(n=function(){if(!a)for(var t in a={},c)t>95&&t<112||c.hasOwnProperty(t)&&(a[c[t]]=t);return a}()[t]?"keydown":"keypress"),"keypress"==n&&e.length&&(n="keydown"),n}function h(t,e){var n,i,o,r=[];for(n=function(t){return"+"===t?["+"]:(t=t.replace(/\+{2}/g,"+plus")).split("+")}(t),o=0;o<n.length;++o)i=n[o],d[i]&&(i=d[i]),e&&"keypress"!=e&&l[i]&&(i=l[i],r.push("shift")),g(i)&&r.push(i);return{key:i,modifiers:r,action:e=m(i,r,e)}}function y(t){var e=this;if(t=t||r,!(e instanceof y))return new y(t);e.target=t,e._callbacks={},e._directMap={};var n,i={},o=!1,s=!1,a=!1;function c(t){t=t||{};var e,n=!1;for(e in i)t[e]?n=!0:i[e]=0;n||(a=!1)}function u(t,n,o,r,s,a){var c,u,l,d,p=[],b=o.type;if(!e._callbacks[t])return[];for("keyup"==b&&g(t)&&(n=[t]),c=0;c<e._callbacks[t].length;++c)if(u=e._callbacks[t][c],(r||!u.seq||i[u.seq]==u.level)&&b==u.action&&("keypress"==b&&!o.metaKey&&!o.ctrlKey||(l=n,d=u.modifiers,l.sort().join(",")===d.sort().join(",")))){var f=!r&&u.combo==s,m=r&&u.seq==r&&u.level==a;(f||m)&&e._callbacks[t].splice(c,1),p.push(u)}return p}function l(t,n,i,o){e.stopCallback(n,n.target||n.srcElement,i,o)||!1===t(n,i)&&(function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}(n),function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}(n))}function d(t){"number"!=typeof t.which&&(t.which=t.keyCode);var n=f(t);n&&("keyup"!=t.type||o!==n?e.handleKey(n,function(t){var e=[];return t.shiftKey&&e.push("shift"),t.altKey&&e.push("alt"),t.ctrlKey&&e.push("ctrl"),t.metaKey&&e.push("meta"),e}(t),t):o=!1)}function p(t,e,r,s){function u(e){return function(){a=e,++i[t],clearTimeout(n),n=setTimeout(c,1e3)}}function d(e){l(r,e,t),"keyup"!==s&&(o=f(e)),setTimeout(c,10)}i[t]=0;for(var p=0;p<e.length;++p){var b=p+1===e.length?d:u(s||h(e[p+1]).action);m(e[p],b,s,t,p)}}function m(t,n,i,o,r){e._directMap[t+":"+i]=n;var s,a=(t=t.replace(/\s+/g," ")).split(" ");a.length>1?p(t,a,n,i):(s=h(t,i),e._callbacks[s.key]=e._callbacks[s.key]||[],u(s.key,s.modifiers,{type:s.action},o,t,r),e._callbacks[s.key][o?"unshift":"push"]({callback:n,modifiers:s.modifiers,action:s.action,seq:o,level:r,combo:t}))}e._handleKey=function(t,e,n){var i,o=u(t,e,n),r={},d=0,p=!1;for(i=0;i<o.length;++i)o[i].seq&&(d=Math.max(d,o[i].level));for(i=0;i<o.length;++i)if(o[i].seq){if(o[i].level!=d)continue;p=!0,r[o[i].seq]=1,l(o[i].callback,n,o[i].combo,o[i].seq)}else p||l(o[i].callback,n,o[i].combo);var b="keypress"==n.type&&s;n.type!=a||g(t)||b||c(r),s=p&&"keydown"==n.type},e._bindMultiple=function(t,e,n){for(var i=0;i<t.length;++i)m(t[i],e,n)},b(t,"keypress",d),b(t,"keydown",d),b(t,"keyup",d)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)},PsNq:function(t,e,n){"use strict";n.d(e,"a",(function(){return M}));var i=n("q+nE"),o=n("4pZC"),r=n.n(o),s=(n("h8Et"),n("cuRJ")),a=n("KFH7"),c=n("nPFI"),u=n("49qB"),l=n("7IkT"),d=n("qqJG"),p=n("B065"),b=n("U1Ws"),f=n("t9l/"),g=n("mWeI");const m={i18n:{widgetTitle:Object(f.g)("Trials|%{planName} Trial"),widgetRemainingDays:Object(f.g)("Trials|Day %{daysUsed}/%{duration}")},trackingEvents:{widgetClick:{action:"click_link",label:"trial_status_widget"}}},h={i18n:{close:Object(f.g)("Modal|Close"),compareAllButtonTitle:Object(f.g)("Trials|Compare all plans"),popoverTitle:Object(f.g)("Trials|Hey there"),popoverContent:Object(f.g)("Trials|Your trial ends on\n      %{boldStart}%{trialEndDate}%{boldEnd}. We hope you’re enjoying the\n      features of GitLab %{planName}. To keep those features after your trial\n      ends, you’ll need to buy a subscription. (You can also choose GitLab\n      Premium if it meets your needs.)"),upgradeButtonTitle:Object(f.g)("Trials|Upgrade %{groupName} to %{planName}")},trackingEvents:{popoverShown:{action:"popover_shown",label:"trial_status_popover"},contactSalesBtnClick:{action:"click_button",label:"contact_sales"},compareBtnClick:{action:"click_button",label:"compare_all_plans"}},resizeEventDebounceMS:150,disabledBreakpoints:["xs","sm"],trialEndDateFormatString:"mmmm d"},{i18n:y,trackingEvents:j,trialEndDateFormatString:v,resizeEventDebounceMS:O,disabledBreakpoints:w}=h,k=g.a.mixin({experiment:"group_contact_sales"});var S={components:{GlButton:s.a,GlPopover:a.a,GlSprintf:c.a,GitlabExperiment:p.a},mixins:[k],inject:{containerId:{},daysRemaining:{},groupName:{},planName:{},plansHref:{},purchaseHref:{},targetId:{},trialEndDate:{},user:{}},data:()=>({disabled:!1}),i18n:y,handRaiseLeadAttributes:{size:"small",variant:"confirm",class:"gl-mb-3 gl-w-full",buttonTextClasses:"gl-font-sm",href:"#"},computed:{formattedTrialEndDate(){return Object(b.q)(this.trialEndDate,v,!0)},planNameWithoutTrial(){return Object(l.a)(this.planName)},upgradeButtonTitle(){return Object(f.h)(this.$options.i18n.upgradeButtonTitle,{groupName:this.groupName,planName:Object(l.a)(this.planName)})}},created(){var t=this;this.debouncedResize=r()((function(){return t.updateDisabledState()}),O),window.addEventListener("resize",this.debouncedResize)},mounted(){this.updateDisabledState()},beforeDestroy(){window.removeEventListener("resize",this.debouncedResize)},methods:{trackPageAction(t){const{action:e,...n}=j[t];this.track(e,{...n})},updateDisabledState(){this.disabled=w.includes(u.b.getBreakpointSize())},onShown(){this.trackPageAction("popoverShown"),Object(d.a)()}}},T=n("bPvS"),K=Object(T.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("gl-popover",{ref:"popover",attrs:{placement:"rightbottom",boundary:"viewport",container:t.containerId,target:t.targetId,disabled:t.disabled,delay:{hide:400}},on:{shown:t.onShown},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n    "+t._s(t.$options.i18n.popoverTitle)+"\n    "),n("gl-emoji",{staticClass:"gl-vertical-align-baseline gl-font-size-inherit gl-ml-1",attrs:{"data-name":"wave"}})]},proxy:!0}])},[t._v(" "),n("gl-sprintf",{attrs:{message:t.$options.i18n.popoverContent},scopedSlots:t._u([{key:"bold",fn:function(e){var i=e.content;return[n("b",[t._v(t._s(t.sprintf(i,{trialEndDate:t.formattedTrialEndDate})))])]}},{key:"planName",fn:function(){return[t._v(t._s(t.planNameWithoutTrial))]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"gl-mt-5"},[n("gitlab-experiment",{attrs:{name:"group_contact_sales"},scopedSlots:t._u([{key:"control",fn:function(){return[n("gl-button",{staticClass:"gl-mb-0",attrs:{"data-testid":"upgrade-btn",category:"primary",variant:"confirm",size:"small",block:"",href:t.purchaseHref}},[n("span",{staticClass:"gl-font-sm"},[t._v(t._s(t.upgradeButtonTitle))])])]},proxy:!0},{key:"candidate",fn:function(){return[n("div",{attrs:{"data-testid":"contact-sales-btn"},on:{click:function(e){return t.trackPageAction("contactSalesBtnClick")}}},[n("div",{staticClass:"js-hand-raise-lead-button",attrs:{"data-button-attributes":JSON.stringify(t.$options.handRaiseLeadAttributes),"data-namespace-id":t.user.namespaceId,"data-user-name":t.user.userName,"data-first-name":t.user.firstName,"data-last-name":t.user.lastName,"data-company-name":t.user.companyName,"data-glm-content":t.user.glmContent}})])]},proxy:!0}])}),t._v(" "),n("gl-button",{staticClass:"gl-mb-0",attrs:{href:t.plansHref,category:"secondary",variant:"confirm",size:"small",block:"","data-testid":"compare-btn",title:t.$options.i18n.compareAllButtonTitle},on:{click:function(e){return t.trackPageAction("compareBtnClick")}}},[n("span",{staticClass:"gl-font-sm"},[t._v(t._s(t.$options.i18n.compareAllButtonTitle))])])],1)],1)}),[],!1,null,null,null).exports,C=n("u1ru"),x=n("z7LP");const{i18n:_,trackingEvents:P}=m,D=g.a.mixin({experiment:"group_contact_sales"});var E={components:{GlLink:C.a,GlProgressBar:x.a},mixins:[D],inject:{containerId:{default:null},trialDaysUsed:{},trialDuration:{},daysRemaining:{},navIconImagePath:{},percentageComplete:{},planName:{},plansHref:{}},computed:{widgetTitle(){return Object(f.h)(_.widgetTitle,{planName:Object(l.a)(this.planName)})},widgetRemainingDays(){return Object(f.h)(_.widgetRemainingDays,{daysUsed:this.trialDaysUsed,duration:this.trialDuration})}},methods:{onWidgetClick(){const{action:t,...e}=P.widgetClick;this.track(t,{...e})}}},N=Object(T.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("gl-link",{attrs:{id:t.containerId,title:t.widgetTitle,href:t.plansHref}},[n("div",{staticClass:"gl-display-flex gl-flex-direction-column gl-align-items-stretch gl-w-full",attrs:{"data-testid":"widget-menu"},on:{click:t.onWidgetClick}},[n("div",{staticClass:"gl-display-flex gl-w-full"},[n("span",{staticClass:"nav-icon-container svg-container"},[n("img",{staticClass:"svg",attrs:{src:t.navIconImagePath,width:"16"}})]),t._v(" "),n("span",{staticClass:"nav-item-name"},[t._v("\n        "+t._s(t.widgetTitle)+"\n      ")]),t._v(" "),n("span",{staticClass:"collapse-text gl-font-sm gl-mr-auto"},[t._v("\n        "+t._s(t.widgetRemainingDays)+"\n      ")])]),t._v(" "),n("div",{staticClass:"gl-display-flex gl-align-items-stretch gl-mt-2"},[n("gl-progress-bar",{staticClass:"gl-flex-grow-1",attrs:{value:t.percentageComplete}})],1)])])}),[],!1,null,null,null).exports;const I=function(){const t=document.getElementById("js-trial-status-widget");if(!t)return;const{containerId:e,trialDaysUsed:n,trialDuration:o,daysRemaining:r,navIconImagePath:s,percentageComplete:a,planName:c,plansHref:u}=t.dataset;return new i.default({el:t,provide:{containerId:e,trialDaysUsed:Number(n)||0,trialDuration:Number(o)||0,daysRemaining:Number(r),navIconImagePath:s,percentageComplete:Number(a),planName:c,plansHref:u},render:function(t){return t(N)}})},G=function(){const t=document.getElementById("js-trial-status-popover");if(!t)return;const{containerId:e,daysRemaining:n,groupName:o,planName:r,plansHref:s,purchaseHref:a,targetId:c,trialEndDate:u,namespaceId:l,userName:d,firstName:p,lastName:b,companyName:f,glmContent:g}=t.dataset;return new i.default({el:t,provide:{containerId:e,daysRemaining:n,groupName:o,planName:r,plansHref:s,purchaseHref:a,targetId:c,trialEndDate:new Date(u),user:{namespaceId:l,userName:d,firstName:p,lastName:b,companyName:f,glmContent:g}},render:function(t){return t(K)}})},M=function(){return{widget:I(),popover:G()}}},SPw5:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c}));var i=n("O6x3"),o=n.n(i);n("7lWn");const r="shortcutsDisabled",s=function(){try{return"true"===localStorage.getItem(r)}catch(t){return!1}};function a(){localStorage.setItem(r,!1),o.a.unpause()}function c(){localStorage.setItem(r,!0),o.a.pause()}},Sq3g:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}));var i=n("pkvD"),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(t).replace(i.h,"")},r=function(t,e){return t?{innerHTML:t}:e?{textContent:e}:{}}},qqJG:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("JHu5"),n("3R5X"),n("XUYm");const i=async function(){const t=document.querySelectorAll(".js-hand-raise-lead-button");if(t.length>0){const{initHandRaiseLeadButton:e}=await Promise.all([n.e(2),n.e(34),n.e(42),n.e(103),n.e(462)]).then(n.bind(null,"ZT+P"));t.forEach((async function(t){e(t)}))}}},uw3E:function(t,e,n){"use strict";n.d(e,"lb",(function(){return c})),n.d(e,"A",(function(){return u})),n.d(e,"x",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return p})),n.d(e,"B",(function(){return b})),n.d(e,"ib",(function(){return f})),n.d(e,"c",(function(){return g})),n.d(e,"y",(function(){return m})),n.d(e,"z",(function(){return h})),n.d(e,"C",(function(){return y})),n.d(e,"nb",(function(){return j})),n.d(e,"D",(function(){return v})),n.d(e,"kb",(function(){return O})),n.d(e,"a",(function(){return w})),n.d(e,"M",(function(){return k})),n.d(e,"jb",(function(){return S})),n.d(e,"N",(function(){return T})),n.d(e,"mb",(function(){return K})),n.d(e,"b",(function(){return x})),n.d(e,"eb",(function(){return _})),n.d(e,"fb",(function(){return P})),n.d(e,"hb",(function(){return D})),n.d(e,"db",(function(){return E})),n.d(e,"gb",(function(){return N})),n.d(e,"cb",(function(){return I})),n.d(e,"q",(function(){return G})),n.d(e,"f",(function(){return M})),n.d(e,"r",(function(){return R})),n.d(e,"i",(function(){return B})),n.d(e,"j",(function(){return q})),n.d(e,"g",(function(){return H})),n.d(e,"t",(function(){return z})),n.d(e,"s",(function(){return L})),n.d(e,"k",(function(){return F})),n.d(e,"W",(function(){return A})),n.d(e,"l",(function(){return V})),n.d(e,"o",(function(){return W})),n.d(e,"m",(function(){return U})),n.d(e,"p",(function(){return Y})),n.d(e,"h",(function(){return $})),n.d(e,"n",(function(){return J})),n.d(e,"u",(function(){return X})),n.d(e,"w",(function(){return Z})),n.d(e,"v",(function(){return Q})),n.d(e,"ab",(function(){return tt})),n.d(e,"Z",(function(){return et})),n.d(e,"bb",(function(){return nt})),n.d(e,"X",(function(){return it})),n.d(e,"Y",(function(){return ot})),n.d(e,"F",(function(){return rt})),n.d(e,"G",(function(){return st})),n.d(e,"E",(function(){return at})),n.d(e,"I",(function(){return ct})),n.d(e,"J",(function(){return ut})),n.d(e,"S",(function(){return lt})),n.d(e,"U",(function(){return dt})),n.d(e,"R",(function(){return pt})),n.d(e,"T",(function(){return bt})),n.d(e,"V",(function(){return ft})),n.d(e,"Q",(function(){return gt})),n.d(e,"O",(function(){return mt})),n.d(e,"P",(function(){return ht})),n.d(e,"K",(function(){return yt})),n.d(e,"L",(function(){return jt})),n.d(e,"H",(function(){return vt})),n.d(e,"ob",(function(){return xt})),n.d(e,"pb",(function(){return _t}));var i=n("odYa"),o=n.n(i),r=n("xqp2"),s=n("t9l/");const a=o()((function(){let t={};if(r.a.canUseLocalStorage())try{t=JSON.parse(localStorage.getItem("gl-keyboard-shortcuts-customizations")||"{}")}catch(t){}return t})),c={id:"globalShortcuts.toggleKeyboardShortcutsDialog",description:Object(s.a)("Toggle keyboard shortcuts help dialog"),defaultKeys:["?"]},u={id:"globalShortcuts.goToYourProjects",description:Object(s.a)("Go to your projects"),defaultKeys:["shift+p"]},l={id:"globalShortcuts.goToYourGroups",description:Object(s.a)("Go to your groups"),defaultKeys:["shift+g"]},d={id:"globalShortcuts.goToActivityFeed",description:Object(s.a)("Go to the activity feed"),defaultKeys:["shift+a"]},p={id:"globalShortcuts.goToMilestoneList",description:Object(s.a)("Go to the milestone list"),defaultKeys:["shift+l"]},b={id:"globalShortcuts.goToYourSnippets",description:Object(s.a)("Go to your snippets"),defaultKeys:["shift+s"]},f={id:"globalShortcuts.startSearch",description:Object(s.a)("Start search"),defaultKeys:["s","/"]},g={id:"globalShortcuts.focusFilterBar",description:Object(s.a)("Focus filter bar"),defaultKeys:["f"]},m={id:"globalShortcuts.goToYourIssues",description:Object(s.a)("Go to your issues"),defaultKeys:["shift+i"]},h={id:"globalShortcuts.goToYourMergeRequests",description:Object(s.a)("Go to your merge requests"),defaultKeys:["shift+m"]},y={id:"globalShortcuts.goToYourTodoList",description:Object(s.a)("Go to your To-Do list"),defaultKeys:["shift+t"]},j={id:"globalShortcuts.togglePerformanceBar",description:Object(s.a)("Toggle the Performance Bar"),defaultKeys:["p b"]},v={id:"globalShortcuts.hideAppearingContent",description:Object(s.a)("Hide tooltips or popovers"),defaultKeys:["esc"]},O={id:"globalShortcuts.toggleCanary",description:Object(s.a)("Toggle GitLab Next"),defaultKeys:["g x"]},w={id:"editing.boldText",description:Object(s.a)("Bold text"),defaultKeys:["mod+b"],customizable:!1},k={id:"editing.italicText",description:Object(s.a)("Italic text"),defaultKeys:["mod+i"],customizable:!1},S={id:"editing.strikethroughText",description:Object(s.a)("Strikethrough text"),defaultKeys:["mod+shift+x"],customizable:!1},T={id:"editing.linkText",description:Object(s.a)("Link text"),defaultKeys:["mod+k"],customizable:!1},K={id:"editing.toggleMarkdownPreview",description:Object(s.a)("Toggle Markdown preview"),defaultKeys:["ctrl+shift+p","command+shift+p"]},C={id:"editing.editRecentComment",description:Object(s.a)("Edit your most recent comment in a thread (from an empty textarea)"),defaultKeys:["up"]},x={id:"wiki.editWikiPage",description:Object(s.a)("Edit wiki page"),defaultKeys:["e"]},_={id:"repositoryGraph.scrollLeft",description:Object(s.a)("Scroll left"),defaultKeys:["left","h"]},P={id:"repositoryGraph.scrollRight",description:Object(s.a)("Scroll right"),defaultKeys:["right","l"]},D={id:"repositoryGraph.scrollUp",description:Object(s.a)("Scroll up"),defaultKeys:["up","k"]},E={id:"repositoryGraph.scrollDown",description:Object(s.a)("Scroll down"),defaultKeys:["down","j"]},N={id:"repositoryGraph.scrollToTop",description:Object(s.a)("Scroll to top"),defaultKeys:["shift+up","shift+k"]},I={id:"repositoryGraph.scrollToBottom",description:Object(s.a)("Scroll to bottom"),defaultKeys:["shift+down","shift+j"]},G={id:"project.goToOverview",description:Object(s.a)("Go to the project's overview page"),defaultKeys:["g p"]},M={id:"project.goToActivityFeed",description:Object(s.a)("Go to the project's activity feed"),defaultKeys:["g v"]},R={id:"project.goToReleases",description:Object(s.a)("Go to releases"),defaultKeys:["g r"]},B={id:"project.goToFiles",description:Object(s.a)("Go to files"),defaultKeys:["g f"]},q={id:"project.goToFindFile",description:Object(s.a)("Go to find file"),defaultKeys:["t"]},H={id:"project.goToCommits",description:Object(s.a)("Go to commits"),defaultKeys:["g c"]},z={id:"project.goToRepoGraph",description:Object(s.a)("Go to repository graph"),defaultKeys:["g n"]},L={id:"project.goToRepoCharts",description:Object(s.a)("Go to repository charts"),defaultKeys:["g d"]},F={id:"project.goToIssues",description:Object(s.a)("Go to issues"),defaultKeys:["g i"]},A={id:"project.newIssue",description:Object(s.a)("New issue"),defaultKeys:["i"]},V={id:"project.goToIssueBoards",description:Object(s.a)("Go to issue boards"),defaultKeys:["g b"]},W={id:"project.goToMergeRequests",description:Object(s.a)("Go to merge requests"),defaultKeys:["g m"]},U={id:"project.goToJobs",description:Object(s.a)("Go to jobs"),defaultKeys:["g j"]},Y={id:"project.goToMetrics",description:Object(s.a)("Go to metrics"),defaultKeys:["g l"]},$={id:"project.goToEnvironments",description:Object(s.a)("Go to environments"),defaultKeys:["g e"]},J={id:"project.goToKubernetes",description:Object(s.a)("Go to kubernetes"),defaultKeys:["g k"]},X={id:"project.goToSnippets",description:Object(s.a)("Go to snippets"),defaultKeys:["g s"]},Z={id:"project.goToWiki",description:Object(s.a)("Go to wiki"),defaultKeys:["g w"]},Q={id:"project.goToWebIDE",description:Object(s.a)("Open in Web IDE"),defaultKeys:["."]},tt={id:"projectFiles.moveSelectionUp",description:Object(s.a)("Move selection up"),defaultKeys:["up"]},et={id:"projectFiles.moveSelectionDown",description:Object(s.a)("Move selection down"),defaultKeys:["down"]},nt={id:"projectFiles.openSelection",description:Object(s.a)("Open Selection"),defaultKeys:["enter"]},it={id:"projectFiles.goBack",description:Object(s.a)("Go back (while searching for files)"),defaultKeys:["esc"]},ot={id:"projectFiles.goToFilePermalink",description:Object(s.a)("Go to file permalink (while viewing a file)"),defaultKeys:["y"]},rt={id:"issuables.commentReply",description:Object(s.a)("Comment/Reply (quoting selected text)"),defaultKeys:["r"]},st={id:"issuables.editDescription",description:Object(s.a)("Edit description"),defaultKeys:["e"]},at={id:"issuables.changeLabel",description:Object(s.a)("Change label"),defaultKeys:["l"]},ct={id:"issuesMRs.changeAssignee",description:Object(s.a)("Change assignee"),defaultKeys:["a"]},ut={id:"issuesMRs.changeMilestone",description:Object(s.a)("Change milestone"),defaultKeys:["m"]},lt={id:"mergeRequests.nextFileInDiff",description:Object(s.a)("Next file in diff"),defaultKeys:["]","j"]},dt={id:"mergeRequests.previousFileInDiff",description:Object(s.a)("Previous file in diff"),defaultKeys:["[","k"]},pt={id:"mergeRequests.goToFile",description:Object(s.a)("Go to file"),defaultKeys:["mod+p","t"],customizable:!1},bt={id:"mergeRequests.nextUnresolvedDiscussion",description:Object(s.a)("Next unresolved discussion"),defaultKeys:["n"]},ft={id:"mergeRequests.previousUnresolvedDiscussion",description:Object(s.a)("Previous unresolved discussion"),defaultKeys:["p"]},gt={id:"mergeRequests.copySourceBranchName",description:Object(s.a)("Copy source branch name"),defaultKeys:["b"]},mt={id:"mergeRequestCommits.nextCommit",description:Object(s.a)("Next commit"),defaultKeys:["c"]},ht={id:"mergeRequestCommits.previousCommit",description:Object(s.a)("Previous commit"),defaultKeys:["x"]},yt={id:"issues.nextDesign",description:Object(s.a)("Next design"),defaultKeys:["right"]},jt={id:"issues.previousDesign",description:Object(s.a)("Previous design"),defaultKeys:["left"]},vt={id:"issues.closeDesign",description:Object(s.a)("Close design"),defaultKeys:["esc"]},Ot={id:"webIDE.goToFile",description:Object(s.a)("Go to file"),defaultKeys:["mod+p"]},wt={id:"webIDE.commit",description:Object(s.a)("Commit (when editing commit message)"),defaultKeys:["mod+enter"],customizable:!1},kt={id:"metrics.expandPanel",description:Object(s.a)("Expand panel"),defaultKeys:["e"],customizable:!1},St={id:"metrics.viewLogs",description:Object(s.a)("View logs"),defaultKeys:["l"],customizable:!1},Tt={id:"metrics.downloadCSV",description:Object(s.a)("Download CSV"),defaultKeys:["d"],customizable:!1},Kt={id:"metrics.copyLinkToChart",description:Object(s.a)("Copy link to chart"),defaultKeys:["c"],customizable:!1},Ct={id:"metrics.showAlerts",description:Object(s.a)("Alerts"),defaultKeys:["a"],customizable:!1},xt=[{id:"globalShortcuts",name:Object(s.a)("Global Shortcuts"),keybindings:[c,u,l,d,p,b,f,g,m,h,y,j,v]},{id:"editing",name:Object(s.a)("Editing"),keybindings:[w,k,S,T,K,C]},{id:"wiki",name:Object(s.a)("Wiki"),keybindings:[x]},{id:"repositoryGraph",name:Object(s.a)("Repository Graph"),keybindings:[_,P,D,E,N,I]},{id:"project",name:Object(s.a)("Project"),keybindings:[G,M,R,B,q,H,z,L,F,A,V,W,U,Y,$,J,X,Z,Q]},{id:"projectFiles",name:Object(s.a)("Project Files"),keybindings:[tt,et,nt,it,ot]},{id:"issuables",name:Object(s.a)("Epics, issues, and merge requests"),keybindings:[rt,st,at]},{id:"issuesMRs",name:Object(s.a)("Issues and merge requests"),keybindings:[ct,ut]},{id:"mergeRequests",name:Object(s.a)("Merge requests"),keybindings:[lt,dt,pt,bt,ft,gt]},{id:"mergeRequestCommits",name:Object(s.a)("Merge request commits"),keybindings:[mt,ht]},{id:"issues",name:Object(s.a)("Issues"),keybindings:[yt,jt,vt]},{id:"webIDE",name:Object(s.a)("Web IDE"),keybindings:[Ot,wt]},{id:"metrics",name:Object(s.a)("Metrics"),keybindings:[kt,St,Tt,Kt,Ct]},{id:"misc",name:Object(s.a)("Miscellaneous"),keybindings:[O]}],_t=function(t){return function(t){return!("customizable"in t)||Boolean(t.customizable)}(t)&&a()[t.id]||t.defaultKeys}},z7LP:function(t,e,n){"use strict";var i=n("Z2pp"),o=n("jyii"),r=n("gCUY"),s=n("GpHn"),a=n("Sq3g"),c=n("G55H"),u=n("ST6S"),l=n("8Vyw"),d=n("ySPH"),p=i.a.extend({name:o.Y,mixins:[s.a],inject:{bvProgress:{default:function(){return{}}}},props:Object(r.c)({value:{type:[Number,String],default:0},label:{type:String},labelHtml:{type:String},max:{type:[Number,String],default:null},precision:{type:[Number,String],default:null},variant:{type:String},striped:{type:Boolean,default:null},animated:{type:Boolean,default:null},showProgress:{type:Boolean,default:null},showValue:{type:Boolean,default:null}},o.Y),computed:{progressBarClasses:function(){return[this.computedVariant?"bg-".concat(this.computedVariant):"",this.computedStriped||this.computedAnimated?"progress-bar-striped":"",this.computedAnimated?"progress-bar-animated":""]},progressBarStyles:function(){return{width:this.computedValue/this.computedMax*100+"%"}},computedValue:function(){return Object(l.b)(this.value,0)},computedMax:function(){var t=Object(l.b)(this.max)||Object(l.b)(this.bvProgress.max,0);return t>0?t:100},computedPrecision:function(){return Object(u.d)(Object(l.c)(this.precision,Object(l.c)(this.bvProgress.precision,0)),0)},computedProgress:function(){var t=this.computedPrecision,e=Object(u.f)(10,t);return Object(l.a)(100*e*this.computedValue/this.computedMax/e,t)},computedVariant:function(){return this.variant||this.bvProgress.variant},computedStriped:function(){return Object(c.b)(this.striped)?this.striped:this.bvProgress.striped||!1},computedAnimated:function(){return Object(c.b)(this.animated)?this.animated:this.bvProgress.animated||!1},computedShowProgress:function(){return Object(c.b)(this.showProgress)?this.showProgress:this.bvProgress.showProgress||!1},computedShowValue:function(){return Object(c.b)(this.showValue)?this.showValue:this.bvProgress.showValue||!1}},render:function(t){var e,n=this.label,i=this.labelHtml,o=this.computedValue,r=this.computedPrecision,s={};return this.hasNormalizedSlot()?e=this.normalizeSlot():n||i?s=Object(a.a)(i,n):this.computedShowProgress?e=this.computedProgress:this.computedShowValue&&(e=Object(l.a)(o,r)),t("div",{staticClass:"progress-bar",class:this.progressBarClasses,style:this.progressBarStyles,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":Object(d.e)(this.computedMax),"aria-valuenow":Object(l.a)(o,r)},domProps:s},e)}}),b=i.a.extend({name:o.X,mixins:[s.a],provide:function(){return{bvProgress:this}},props:Object(r.c)({variant:{type:String},striped:{type:Boolean,default:!1},animated:{type:Boolean,default:!1},height:{type:String},precision:{type:[Number,String],default:0},showProgress:{type:Boolean,default:!1},showValue:{type:Boolean,default:!1},max:{type:[Number,String],default:100},value:{type:[Number,String],default:0}},o.X),computed:{progressHeight:function(){return{height:this.height||null}}},render:function(t){var e=this.normalizeSlot();return e||(e=t(p,{props:{value:this.value,max:this.max,precision:this.precision,variant:this.variant,animated:this.animated,striped:this.striped,showProgress:this.showProgress,showValue:this.showValue}})),t("div",{class:["progress"],style:this.progressHeight},[e])}}),f=n("6IRw");const g={components:{BProgress:b}};const m=n.n(f)()({render:function(){var t=this.$createElement;return(this._self._c||t)("b-progress",this._b({},"b-progress",this.$attrs,!1))},staticRenderFns:[]},void 0,g,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=m}}]);
//# sourceMappingURL=commons-pages.groups.boards-pages.groups.details-pages.groups.epic_boards-pages.groups.show-pages.gr-8955326e.584cc6cf.chunk.js.map