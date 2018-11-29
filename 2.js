function convertHTML(str) {
  const entitiesArr = [
  	[/&/g, "&amp;"],
  	[/</g, "&lt;"],
  	[/>/g, "&gt;"],
  	[/"/g, "&quot;"],
  	[/'/g, "&apos;"]
  ];
  entitiesArr.map(x => str = str.replace(x[0], x[1]))
  return str;
}

console.log(convertHTML("Dolce < Gabb < ana"));