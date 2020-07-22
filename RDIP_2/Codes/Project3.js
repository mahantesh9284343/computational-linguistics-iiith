var English = ["The child liked the chocolate.","She was stopped by the bravest knight.","Mary baked a cake for his birthday","She decorated the cake carefully","Mary wore a dress with polka dots."]
var Hindi = ["राम ने सीता के लिए फल तोड़ा।","छोटे बच्चे पाठशाला जल्दी आयेंगे।","मेहनत का फल मीठा होता है।","वाह! वह खूबसूरत है।","पेड़ से पत्ते गिर गए।"]

console.log(English)
console.log(Hindi)

function select1()
{
    document.getElementById("engdrop").style.display="none"
    document.getElementById("hindrop").style.display="none"
    document.getElementById("disp").innerHTML=""
    document.getElementById("disp1").innerHTML=""
    document.getElementById("tab1").innerHTML=""
    document.getElementById("but1").style.visibility="hidden"

    if(document.getElementById("english").selected)
    {
        document.getElementById("eee").selected=true
        document.getElementById("engdrop").style.display="block"
	}
	else if(document.getElementById("hindi").selected)
	{
        document.getElementById("hhh").selected=true
		document.getElementById("hindrop").style.display="block"
    }
    else
    {
	    document.getElementById("disp").innerHTML=""
        document.getElementById("disp1").innerHTML=""
        document.getElementById("tab1").innerHTML=""
    }
}

function select2()
{   
    document.getElementById("disp1").innerHTML="<span style='font-style:italic;color:blue;'>Select the POS tag for corresponding words</span>"
    document.getElementById("but1").style.visibility="visible"
	var table1=document.getElementsByTagName("table")[0]
	table1.innerHTML=""
	e=document.getElementById("engdrop1")
	var ans = e.options[e.selectedIndex].text;
    
    if(ans!="---Select a sentence---")
	{
	    ans=ans.replace(/\.$/, "");
	    ans1=ans.split(" ")
	    len=ans1.length
        var tr1 = document.createElement('tr'); 
        var td = document.createElement('td');
        var t= document.createElement('td');
        var t1= document.createElement('td');
        var t2= document.createElement('td');
        var text5 = document.createTextNode("LEXICON");
        var text6 = document.createTextNode("POS");
        var text7 = document.createTextNode(" ");
        var text8 = document.createTextNode(" ");
        td.appendChild(text5)
        t.appendChild(text6)
        tr1.appendChild(td)
        tr1.appendChild(t)
        tr1.appendChild(t1)
        tr1.appendChild(t2)
        table1.appendChild(tr1)
    
        for (var i = 0; i < len; i++)
        {
            var tr = document.createElement('tr'); 
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            var text1 = document.createTextNode(ans1[i]);
            
            var text3 = document.createTextNode(" ");
            var text4 =document.createTextNode(" ");
            var x = document.createElement("select");
            var op1 = new Option();
            var op2 = new Option();
            var op3 = new Option();
            var op4 = new Option();
            var op5 = new Option();
            var op6 = new Option();     
            var op7 = new Option();
            var op8 = new Option();
            var op9 = new Option();
            op1.text = "Noun";  
            op2.text = "Pronoun";
            op3.text = "Verb";
            op4.text = "Adjective";
            op5.text = "Adverb";
            op6.text = "Preposition";
            op7.text = "Conjunction";
            op8.text = "Interjection";
            x.options.add(op1);
            x.options.add(op2);
            x.options.add(op3);
            x.options.add(op4);
            x.options.add(op5);
            x.options.add(op6);
            x.options.add(op7);
            x.options.add(op8);
            td1.appendChild(text1);
            td2.appendChild(x);
            td3.appendChild(text3);
            td4.appendChild(text4);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            table1.appendChild(tr);
        }
    }
    else
    {
	    alert("please select a sentence")
	    document.getElementById("disp").innerHTML=""
        document.getElementById("disp1").innerHTML=""
        document.getElementById("tab1").innerHTML=""
        document.getElementById("but1").style.visibility="hidden"
    }
}

function select3()
{	
    document.getElementById("disp1").innerHTML="<span style='font-style:italic;color:blue;'>Select the POS tag for corresponding words</span>"
    //document.getElementById("but1").style.visibility="visible"
	var table1=document.getElementsByTagName("table")[0]
	table1.innerHTML=""
	e=document.getElementById("hindrop1")
	var ans = e.options[e.selectedIndex].text;
    
    if(ans!="---Select a sentence---")
	{
	    ans=ans.slice(0, -1)
	    ans1=ans.split(" ")
	    len=ans1.length
        var tr1 = document.createElement('tr'); 
        var td = document.createElement('td');
        var t= document.createElement('td');
        var t1= document.createElement('td');
        var t2= document.createElement('td');
        var text5 = document.createTextNode("LEXICON");
        var text6 = document.createTextNode("POS");
        var text7 = document.createTextNode(" ");
        var text8 = document.createTextNode(" ");
        td.appendChild(text5)
        t.appendChild(text6)
        tr1.appendChild(td)
        tr1.appendChild(t)
        tr1.appendChild(t1)
        tr1.appendChild(t2)
        table1.appendChild(tr1)

        for (var i = 0; i < len; i++)
        {
            var tr = document.createElement('tr'); 
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            var text1 = document.createTextNode(ans1[i]);
            var x = document.createElement("select");
            var op1 = new Option();
            var op2 = new Option();
            var op3 = new Option();
            var op4 = new Option();
            var op5 = new Option();
            var op6 = new Option();
            var op7 = new Option();
            var op8 = new Option();
            var op9 = new Option();
            op1.text = "Noun";
            op2.text = "Pronoun";
            op3.text = "Verb";
            op4.text = "Adjective";
            op5.text = "Adverb";
            op6.text = "Determiner";
            op7.text = "Postposition";
            op8.text = "Conjunction";
            op9.text = "Interjection";
            x.options.add(op1);
            x.options.add(op2);
            x.options.add(op3);
            x.options.add(op4);
            x.options.add(op5);
            x.options.add(op6);
            x.options.add(op7);
            x.options.add(op8);
            x.options.add(op9);
            var text3 = document.createTextNode(" ");
            var text4 =document.createTextNode(" ");
            td1.appendChild(text1);
            td2.appendChild(x);
            td3.appendChild(text3);
            td4.appendChild(text4);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            table1.appendChild(tr);
        }
    }
    else
    {
	    alert("please select a sentence")
	    document.getElementById("disp").innerHTML=""
        document.getElementById("disp1").innerHTML=""
        document.getElementById("tab1").innerHTML=""
 //       document.getElementById("but1").style.visibility="hidden"
    }
}