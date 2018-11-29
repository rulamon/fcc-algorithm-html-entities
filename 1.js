function convertHTML(str) {
  const entitiesObj = {
  	"&" : "&amp;",
  	"<" : "&lt;",
  	">" : "&gt;",
  	"\"" : "&quot;",
  	"\'" : "&apos;"
  }
  return str.split("").map(x => entitiesObj.hasOwnProperty(x) ? entitiesObj[x] : x).join("")
 
}

console.log(convertHTML("Dolce & Gabbana"));