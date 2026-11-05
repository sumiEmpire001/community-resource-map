export const resources = [
  {id:"r1",name:"Sample Community Library",category:"Education",area:"Central District",description:"Reading space, literacy workshops and computer access.",accessible:true,website:"https://example.org/library"},
  {id:"r2",name:"Sample Food Support Hub",category:"Food",area:"North District",description:"Information about food assistance and community meals.",accessible:true,website:"https://example.org/food"},
  {id:"r3",name:"Sample Youth Learning Centre",category:"Education",area:"South District",description:"After-school learning and digital skills sessions.",accessible:false,website:"https://example.org/youth"},
  {id:"r4",name:"Sample Community Clinic",category:"Health",area:"Central District",description:"General health information and referrals.",accessible:true,website:"https://example.org/clinic"},
  {id:"r5",name:"Sample Career Desk",category:"Employment",area:"West District",description:"CV workshops and employment guidance.",accessible:true,website:"https://example.org/careers"},
  {id:"r6",name:"Sample Community Garden",category:"Environment",area:"East District",description:"Volunteer gardening and environmental learning.",accessible:false,website:"https://example.org/garden"}
];
export function filterResources(items,{query="",category="",accessibleOnly=false}={}){
  const q=query.trim().toLocaleLowerCase();
  return items.filter(item=>(!category||item.category===category)&&(!accessibleOnly||item.accessible)&&(!q||[item.name,item.area,item.description,item.category].some(value=>value.toLocaleLowerCase().includes(q))));
}
export function categories(items){return [...new Set(items.map(item=>item.category))].sort();}
