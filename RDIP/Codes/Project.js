var English=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
        ["some students like to study in the night","at night some students like to study"],
        ["John and Mary went to church","Mary and John went to church"],
        ["John went to church after eating","after eating John went to church","John after eating went to church"],
        ["did he go to market","he did go to market"],
        ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
        ["John goes to the library and studies","John studies and goes to the library"],
        ["John ate an apple so did she","she ate an apple so did John"],
        ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
        ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];
var correctE=["Mary and John went to church","John goes to the library and studies","some students like to study in the night","John ate an apple before afternoon","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday","John ate an apple so did she"]


var Hindi=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
        ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
        ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
        ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
        ["बिल्लियों को मारकर कुत्ता सो गया"	,"मारकर बिल्लियों को कुत्ता सो गया"	 ,"बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता"	,"कुत्ता सो गया बिल्लियों को मारकर"	,"कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
        ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
        ["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];
var correctH=["राम और श्याम गयें बाजार","श्याम सोया और राम भी","मैंने उसे बताया कि राम सो रहा है","राम सोया खाकर","बिल्लियों को मारकर कुत्ता सो गया","एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"]

function selection()
{
    e=correctE[Math.floor(Math.random() * correctE.length)];
    e1=e.split(" ");
    h=correctH[Math.floor(Math.random() * correctH.length)];
    h1=h.split(" ");
    document.getElementById("disp1").innerHTML=""
    document.getElementById("disp2").innerHTML=""
    document.getElementById("disp3").innerHTML=""
    document.getElementById("dispcheck").innerHTML=""
    document.getElementById("reform").style.visibility="hidden";
    document.getElementById("check").style.visibility="hidden";
    document.getElementById("getcrt").style.visibility="hidden";
	count=0

if(document.getElementById("english").selected)
{

	document.getElementById("para1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words"
    document.getElementById("para2").innerHTML="(select the buttons in proper order)";
	let body = document.getElementsByTagName("p")[2];
    /* Random function to jumble words in the sentences */
	for(i=0;i<e1.length;i++)
    {
	    j=Math.floor(Math.random()*e1.length)
	    e2=e1[i];
	    e1[i]=e1[j]
	    e1[j]=e2;
    }
    for(i=0;i<e1.length;i++)
    {
        let button = document.createElement("button");
		button.id='button'+i;
        button.innerHTML = e1[i]
        body.appendChild(button);
        
        button.addEventListener ("click",function()
        {
            document.getElementById("disp2").innerHTML="Formed Sentences (after selecting words):"
            document.getElementById("disp3").innerHTML+=this.innerHTML+" ";
            this.style.display="none";
            count=count+1;
            
            if(count > 0)
            {
                document.getElementById("reform").style.visibility="visible";
            }
            var m=String(document.getElementById("disp3").innerHTML).replace(/\s+$/,"");
            m1=m.split(" ");
            if(e1.length == m1.length)
            {
                document.getElementById("check").style.visibility="visible";
            }
        });
    }
    }
    else if (document.getElementById("hindi").selected) 
    { 
	document.getElementById("para1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words"
	document.getElementById("para2").innerHTML="(select the buttons in proper order):";
	let body = document.getElementsByTagName("p")[2];
	for(i=0;i<h1.length;i++)
    {
	    j=Math.floor(Math.random()*h1.length)
	    e2=h1[i];
	    h1[i]=h1[j]
	    h1[j]=e2;
    }
    for(i=0;i<h1.length;i++)
    {
        let button = document.createElement("button");
		button.id='button'+i;
        button.innerHTML = h1[i]
        body.appendChild(button)

        button.addEventListener ("click",function()
        {
            document.getElementById("disp2").innerHTML="Formed Sentences (after selecting words)"
            document.getElementById("disp3").innerHTML+=this.innerHTML+" ";
            this.style.display="none";
            count=count+1;
            if(count > 0)
            {
                document.getElementById("reform").style.visibility="visible";
            }
            var n=String(document.getElementById("disp3").innerHTML).replace(/\s+$/,"");
            n1=n.split(" ");
            if(h1.length == n1.length)
            {
                document.getElementById("check").style.visibility="visible";
            }
        
        });
    }
    }
    else
    {
	    document.getElementById("para1").innerHTML=""
	    document.getElementById("para2").innerHTML=""
	    document.getElementById("disp1").innerHTML=""
    }
}

function Reform()
{
    for(i=0;i<e1.length || i<h1.length;i++)
	{
        if(document.getElementById('button'+i).style.display=="none")
        {
    	document.getElementById('button'+i).style.display="inline";
	    document.getElementById('disp2').innerHTML=""
        document.getElementById('disp3').innerHTML=""
        document.getElementById('dispcheck').innerHTML=""
        document.getElementById('reform').style.visibility="hidden"
        document.getElementById('check').style.visibility="hidden"
        document.getElementById('getcrt').style.visibility="hidden"
        }
    }
}

function check(){
    var z=String(document.getElementById("disp3").innerHTML).replace(/\s+$/,"");
    temp=0;
    temp1=0;
    if(document.getElementById("english").selected)
    {
        for(i=0;i<10;i++)
        {
            for(j=0;j<English[i].length;j++)
            {
                if(z == English[i][j])
                {
                    temp++;
                }
            }
        }
        if(temp == 1)
        {
            document.getElementById("dispcheck").innerHTML="<span style='color:green; font-size:30px'>Right answer!!!</span>"
        }
        else
        {
            document.getElementById("dispcheck").innerHTML="<span style='color:red; font-size:30px'>Wrong answer!!!</span>"
            document.getElementById("getcrt").style.visibility="visible";
        }
    }
    else if(document.getElementById("hindi").selected)
    {
        for(i=0;i<7;i++)
        {
            for(j=0;j<Hindi[i].length;j++)
            {
                if(z == Hindi[i][j])
                {
                    temp1++;
                }
            }
        }
        if(temp1 == 1)
        {
            document.getElementById("dispcheck").innerHTML="<span style='color:green; font-size:30px'>Right answer!!!</span>"
        }
        else
        {
            document.getElementById("dispcheck").innerHTML="<span style='color:red; font-size:30px'>Wrong answer!!!</span>"
            document.getElementById("getcrt").style.visibility="visible";
        }
    }
}