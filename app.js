import {resources,filterResources,categories} from "./directory.js";
const search=document.querySelector("#search"),category=document.querySelector("#category"),accessible=document.querySelector("#accessible"),grid=document.querySelector("#resources"),summary=document.querySelector("#summary");
for(const value of categories(resources)){const option=document.createElement("option");option.value=value;option.textContent=value;category.append(option);}
function render(){
 const matches=filterResources(resources,{query:search.value,category:category.value,accessibleOnly:accessible.checked});
 grid.replaceChildren();summary.textContent=`${matches.length} resource${matches.length===1?"":"s"} found`;
 if(!matches.length){const p=document.createElement("p");p.textContent="No matches. Try clearing your filters.";grid.append(p);return;}
 for(const item of matches){
  const article=document.createElement("article");article.className="card";
  const tag=document.createElement("span");tag.className="tag";tag.textContent=item.category;
  const title=document.createElement("h2");title.textContent=item.name;
  const area=document.createElement("p");area.className="muted";area.textContent=item.area;
  const description=document.createElement("p");description.textContent=item.description;
  const access=document.createElement("p");access.textContent=item.accessible?"♿ Wheelchair accessible":"Accessibility not confirmed";
  const link=document.createElement("a");link.href=item.website;link.target="_blank";link.rel="noopener noreferrer";link.textContent="Example website";
  article.append(tag,title,area,description,access,link);grid.append(article);
 }
}
for(const control of [search,category,accessible])control.addEventListener("input",render);
render();
