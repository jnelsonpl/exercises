var sonnetParagraph = document.getElementById("sonnet").textContent; // .textContent is faster

console.log(sonnetParagraph);

// find the word orphans
var orphanSearch = sonnetParagraph.indexOf("orphans");
console.log("orphans located at char:", orphanSearch);

var sample = sonnetParagraph.length;
console.log("sonnetParagraph.length:", sample);

// replace 'winter' with 'yuletide'
var winterReplaced = sonnetParagraph.replace('winter', 'yuletide');
console.log('replace once: ', winterReplaced);

var replaceAll = sonnetParagraph.replace(/the/gi, 'a large');
console.log('replaceAll :', replaceAll);

document.getElementById('sonnet').innerHTML = replaceAll;