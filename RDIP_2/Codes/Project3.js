var English = ["The child liked the chocolate.","She was stopped by the bravest knight.","Mary baked a cake for his birthday","She decorated the cake carefully","Mary wore a dress with polka dots."]
var Hindi = ["राम ने सीता के लिए फल तोड़ा।","छोटे बच्चे पाठशाला जल्दी आयेंगे।","मेहनत का फल मीठा होता है।","वाह! वह खूबसूरत है।","पेड़ से पत्ते गिर गए।"]

console.log(English)
console.log(Hindi)

function select1()
{
document.getElementById("engdrop").style.display="none"
document.getElementById("hindrop").style.display="none"
	if(document.getElementById("english").selected)
	{
      document.getElementById("engdrop").style.display="block"
	}
	else if(document.getElementById("hindi").selected)
	{
		  document.getElementById("hindrop").style.display="block"
	}
} 