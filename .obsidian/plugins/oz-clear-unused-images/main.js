"use strict";var e=require("obsidian");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function t(e,t,s,n){return new(s||(s=Promise))((function(i,a){function o(e){try{d(n.next(e))}catch(e){a(e)}}function l(e){try{d(n.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,l)}d((n=n.apply(e,t||[])).next())}))}const s={deleteOption:".trash",logsModal:!0,excludedFolders:"",ribbonIcon:!1,excludeSubfolders:!1};class n extends e.PluginSettingTab{constructor(e,t){super(e,t),this.plugin=t}display(){let{containerEl:t}=this;t.empty(),t.createEl("h2",{text:"Clear Images Settings"}),new e.Setting(t).setName("Ribbon Icon").setDesc("Turn on if you want Ribbon Icon for clearing the images.").addToggle((e=>e.setValue(this.plugin.settings.ribbonIcon).onChange((e=>{this.plugin.settings.ribbonIcon=e,this.plugin.saveSettings(),this.plugin.refreshIconRibbon()})))),new e.Setting(t).setName("Delete Logs").setDesc("Turn off if you dont want to view the delete logs Modal to pop up after deletion is completed. It wont appear if no image is deleted").addToggle((e=>e.setValue(this.plugin.settings.logsModal).onChange((e=>{this.plugin.settings.logsModal=e,this.plugin.saveSettings()})))),new e.Setting(t).setName("Deleted Image Destination").setDesc("Select where you want images to be moved once they are deleted").addDropdown((e=>{e.addOption("permanent","Delete Permanently"),e.addOption(".trash","Move to Obsidian Trash"),e.addOption("system-trash","Move to System Trash"),e.setValue(this.plugin.settings.deleteOption),e.onChange((e=>{this.plugin.settings.deleteOption=e,this.plugin.saveSettings()}))})),new e.Setting(t).setName("Excluded Folder Full Paths").setDesc("Provide the FULL path of the folder names (Case Sensitive) divided by comma (,) to be excluded from clearing. \n\t\t\t\t\ti.e. For images under Personal/Files/Zodiac -> Personal/Files/Zodiac should be used for exclusion").addTextArea((e=>e.setValue(this.plugin.settings.excludedFolders).onChange((e=>{this.plugin.settings.excludedFolders=e,this.plugin.saveSettings()})))),new e.Setting(t).setName("Exclude Subfolders").setDesc("Turn on this option if you want to also exclude all subfolders of the folder paths provided above.").addToggle((e=>e.setValue(this.plugin.settings.excludeSubfolders).onChange((e=>{this.plugin.settings.excludeSubfolders=e,this.plugin.saveSettings()}))));const s=t.createDiv("coffee");s.addClass("oz-coffee-div");s.createEl("a",{href:"https://ko-fi.com/L3L356V6Q"}).createEl("img",{attr:{src:"https://cdn.ko-fi.com/cdn/kofi2.png?v=3"}}).height=45}}class i extends e.Modal{constructor(e,t){super(t),this.textToView=e}onOpen(){let{contentEl:e}=this,t=this;const s=e.createEl("div");s.addClass("unused-images-center-wrapper");s.createEl("h1",{text:"Clear Unused Images - Logs"}).addClass("modal-title");const n=e.createEl("div");n.addClass("unused-images-logs"),n.innerHTML=this.textToView;const i=e.createEl("div");i.addClass("unused-images-center-wrapper");const a=i.createEl("button",{text:"Close"});a.addClass("unused-images-button"),a.addEventListener("click",(()=>{t.close()}))}}const a=/.*(jpe?g|png|gif|svg|bmp)/i,o=/!\[\[(.*?)\]\]/i,l=new Set(["jpeg","jpg","png","gif","svg","bmp"]),d=(e,t)=>{let s=e.vault.getFiles(),n=[];for(let e=0;e<s.length;e++)"md"!==s[e].extension&&(l.has(s[e].extension.toLowerCase())||"all"===t)&&n.push(s[e]);return n},r=(e,t)=>{var s=new Set,n=e.metadataCache.resolvedLinks;if(n)for(const[e,o]of Object.entries(n))for(const[o,l]of Object.entries(n[e])){var i=o.match(a);i&&s.add(i[0]),"all"!==t||o.endsWith(".md")||s.add(o)}return e.vault.getMarkdownFiles().forEach((t=>{let n=e.metadataCache.getFileCache(t);if(n.frontmatter){let i=n.frontmatter;for(let n of Object.keys(i))if("string"==typeof i[n])if(i[n].match(o)){let a=i[n].match(o)[1],l=e.metadataCache.getFirstLinkpathDest(a,t.path);l&&s.add(l.path)}else c(i[n])&&s.add(i[n])}})),s},c=e=>e.match(a),h=(e,t)=>{var s=t.settings.excludedFolders,n=t.settings.excludeSubfolders;if(""===s)return!1;var i=new Set(s.split(",").map((e=>e.trim())));if(n)for(let t of i){var a=new RegExp(t+".*");if(e.parent.path.match(a))return!0}else if(i.has(e.parent.path))return!0;return!1},g=()=>(new Date).toLocaleDateString("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"});class u extends e.Plugin{constructor(){super(...arguments),this.ribbonIconEl=void 0,this.refreshIconRibbon=()=>{var e;null===(e=this.ribbonIconEl)||void 0===e||e.remove(),this.settings.ribbonIcon&&(this.ribbonIconEl=this.addRibbonIcon("image-file","Clear Unused Images",(e=>{this.clearUnusedAttachments("image")})))},this.clearUnusedAttachments=s=>t(this,void 0,void 0,(function*(){var n,a,o,l=((e,t)=>{var s,n=d(e,t),i=[];return s=r(e,t),n.forEach((e=>{s.has(e.path)||i.push(e)})),i})(this.app,s);if(l.length>0){let e="";e+=`[+] ${g()}: Clearing started.</br>`,(n=l,a=this,o=this.app,t(void 0,void 0,void 0,(function*(){var e=a.settings.deleteOption,t=0;let s="";for(let i of n)h(i,a)?console.log("File not referenced but excluded: "+i.path):(".trash"===e?(yield o.vault.trash(i,!1),s+="[+] Moved to Obsidian Trash: "+i.path+"</br>"):"system-trash"===e?(yield o.vault.trash(i,!0),s+="[+] Moved to System Trash: "+i.path+"</br>"):"permanent"===e&&(yield o.vault.delete(i),s+="[+] Deleted Permanently: "+i.path+"</br>"),t++);return{deletedImages:t,textToView:s}}))).then((({deletedImages:t,textToView:s})=>{if(e+=s,e+="[+] "+t.toString()+" image(s) in total deleted.</br>",e+=`[+] ${g()}: Clearing completed.`,this.settings.logsModal){new i(e,this.app).open()}}))}else new e.Notice(`All ${"image"===s?"images":"attachments"} are used. Nothing was deleted.`)}))}onload(){return t(this,void 0,void 0,(function*(){console.log("Clear Unused Images plugin loaded..."),this.addSettingTab(new n(this.app,this)),yield this.loadSettings(),this.addCommand({id:"clear-images-obsidian",name:"Clear Unused Images",callback:()=>this.clearUnusedAttachments("image")}),this.addCommand({id:"clear-unused-attachments",name:"Clear Unused Attachments",callback:()=>this.clearUnusedAttachments("all")}),this.refreshIconRibbon()}))}onunload(){console.log("Clear Unused Images plugin unloaded...")}loadSettings(){return t(this,void 0,void 0,(function*(){this.settings=Object.assign({},s,yield this.loadData())}))}saveSettings(){return t(this,void 0,void 0,(function*(){yield this.saveData(this.settings)}))}}module.exports=u;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9zZXR0aW5ncy50cyIsInNyYy9tb2RhbHMudHMiLCJzcmMvdXRpbC50cyIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpudWxsLCJuYW1lcyI6WyJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwiREVGQVVMVF9TRVRUSU5HUyIsImRlbGV0ZU9wdGlvbiIsImxvZ3NNb2RhbCIsImV4Y2x1ZGVkRm9sZGVycyIsInJpYmJvbkljb24iLCJleGNsdWRlU3ViZm9sZGVycyIsIk96YW5DbGVhckltYWdlc1NldHRpbmdzVGFiIiwiUGx1Z2luU2V0dGluZ1RhYiIsImNvbnN0cnVjdG9yIiwiYXBwIiwicGx1Z2luIiwic3VwZXIiLCJ0aGlzIiwiZGlzcGxheSIsImNvbnRhaW5lckVsIiwiZW1wdHkiLCJjcmVhdGVFbCIsInRleHQiLCJTZXR0aW5nIiwic2V0TmFtZSIsInNldERlc2MiLCJhZGRUb2dnbGUiLCJ0b2dnbGUiLCJzZXRWYWx1ZSIsInNldHRpbmdzIiwib25DaGFuZ2UiLCJzYXZlU2V0dGluZ3MiLCJyZWZyZXNoSWNvblJpYmJvbiIsImFkZERyb3Bkb3duIiwiZHJvcGRvd24iLCJhZGRPcHRpb24iLCJvcHRpb24iLCJhZGRUZXh0QXJlYSIsImNvZmZlZURpdiIsImNyZWF0ZURpdiIsImFkZENsYXNzIiwiaHJlZiIsImF0dHIiLCJzcmMiLCJoZWlnaHQiLCJMb2dzTW9kYWwiLCJNb2RhbCIsInRleHRUb1ZpZXciLCJvbk9wZW4iLCJjb250ZW50RWwiLCJteU1vZGFsIiwiaGVhZGVyV3JhcHBlciIsImxvZ3MiLCJpbm5lckhUTUwiLCJidXR0b25XcmFwcGVyIiwiY2xvc2VCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2UiLCJpbWFnZVJlZ2V4IiwiYmFubmVyUmVnZXgiLCJpbWFnZUV4dGVuc2lvbnMiLCJTZXQiLCJnZXRBdHRhY2htZW50c0luVmF1bHQiLCJ0eXBlIiwiYWxsRmlsZXMiLCJ2YXVsdCIsImdldEZpbGVzIiwiYXR0YWNobWVudHMiLCJpIiwibGVuZ3RoIiwiZXh0ZW5zaW9uIiwiaGFzIiwidG9Mb3dlckNhc2UiLCJwdXNoIiwiZ2V0QXR0YWNobWVudFBhdGhTZXRGb3JWYXVsdCIsImF0dGFjaG1lbnRzU2V0IiwicmVzb2x2ZWRMaW5rcyIsIm1ldGFkYXRhQ2FjaGUiLCJtZEZpbGUiLCJsaW5rcyIsIk9iamVjdCIsImVudHJpZXMiLCJmaWxlUGF0aCIsIm5yIiwiaW1hZ2VNYXRjaCIsIm1hdGNoIiwiYWRkIiwiZW5kc1dpdGgiLCJnZXRNYXJrZG93bkZpbGVzIiwiZm9yRWFjaCIsImZpbGVDYWNoZSIsImdldEZpbGVDYWNoZSIsImZyb250bWF0dGVyIiwiayIsImtleXMiLCJmaWxlTmFtZSIsImZpbGUiLCJnZXRGaXJzdExpbmtwYXRoRGVzdCIsInBhdGgiLCJwYXRoSXNBbkltYWdlIiwiZmlsZUlzSW5FeGNsdWRlZEZvbGRlciIsImV4Y2x1ZGVkRm9sZGVyc1NldHRpbmdzIiwiZXhjbHVkZWRGb2xkZXJQYXRocyIsInNwbGl0IiwibWFwIiwiZm9sZGVyUGF0aCIsInRyaW0iLCJleGx1ZGVkRm9sZGVyUGF0aCIsInBhdGhSZWdleCIsIlJlZ0V4cCIsInBhcmVudCIsImdldEZvcm1hdHRlZERhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsIk96YW5DbGVhckltYWdlcyIsIlBsdWdpbiIsInVuZGVmaW5lZCIsInJpYmJvbkljb25FbCIsInJlbW92ZSIsImFkZFJpYmJvbkljb24iLCJldmVudCIsImNsZWFyVW51c2VkQXR0YWNobWVudHMiLCJmaWxlTGlzdCIsInVudXNlZEF0dGFjaG1lbnRzIiwidXNlZEF0dGFjaG1lbnRzU2V0IiwiYWxsQXR0YWNobWVudHNJblZhdWx0IiwiYXR0YWNobWVudCIsIlV0aWwuZ2V0VW51c2VkQXR0YWNobWVudHMiLCJVdGlsLmdldEZvcm1hdHRlZERhdGUiLCJkZWxldGVkSW1hZ2VzIiwiY29uc29sZSIsImxvZyIsInRyYXNoIiwiZGVsZXRlIiwidG9TdHJpbmciLCJvcGVuIiwiTm90aWNlIiwib25sb2FkIiwiYWRkU2V0dGluZ1RhYiIsImxvYWRTZXR0aW5ncyIsImFkZENvbW1hbmQiLCJpZCIsIm5hbWUiLCJjYWxsYmFjayIsIm9udW5sb2FkIiwiYXNzaWduIiwibG9hZERhdGEiLCJzYXZlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Z0ZBcUVPLFNBQVNBLEVBQVVDLEVBQVNDLEVBQVlDLEVBQUdDLEdBRTlDLE9BQU8sSUFBS0QsSUFBTUEsRUFBSUUsV0FBVSxTQUFVQyxFQUFTQyxHQUMvQyxTQUFTQyxFQUFVQyxHQUFTLElBQU1DLEVBQUtOLEVBQVVPLEtBQUtGLElBQVcsTUFBT0csR0FBS0wsRUFBT0ssSUFDcEYsU0FBU0MsRUFBU0osR0FBUyxJQUFNQyxFQUFLTixFQUFpQixNQUFFSyxJQUFXLE1BQU9HLEdBQUtMLEVBQU9LLElBQ3ZGLFNBQVNGLEVBQUtJLEdBSmxCLElBQWVMLEVBSWFLLEVBQU9DLEtBQU9ULEVBQVFRLEVBQU9MLFFBSjFDQSxFQUl5REssRUFBT0wsTUFKaERBLGFBQWlCTixFQUFJTSxFQUFRLElBQUlOLEdBQUUsU0FBVUcsR0FBV0EsRUFBUUcsT0FJVE8sS0FBS1IsRUFBV0ssR0FDbEdILEdBQU1OLEVBQVlBLEVBQVVhLE1BQU1oQixFQUFTQyxHQUFjLEtBQUtTLFdDaEUvRCxNQUFNTyxFQUE0QyxDQUNyREMsYUFBYyxTQUNkQyxXQUFXLEVBQ1hDLGdCQUFpQixHQUNqQkMsWUFBWSxFQUNaQyxtQkFBbUIsU0FHVkMsVUFBbUND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
