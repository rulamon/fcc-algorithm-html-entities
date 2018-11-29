function convertHTML(str) {
  const entitiesObj = {
  	"&" : "&amp;",
  	"<" : "&lt;",
  	">" : "&gt;",
  	"\"" : "&quot;",
  	"\'" : "&apos;"
  };
  let newStr = str;
  for (let i in entitiesObj) {
  	newStr = newStr.replace(i, entitiesObj[i])
  }
  return newStr;
}

console.log(convertHTML("Dolce < Gabbana"));