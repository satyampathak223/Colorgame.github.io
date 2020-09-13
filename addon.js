
var n=6,k=1;
function reload(x){
	for(var i=0;i<n;i++)
	{
		var r=(Math.random()*500)%256;
		var g=(Math.random()*500)%256;
		var b=(Math.random()*500)%256;
		var f="RGB("+r+","+g+","+b+")";
		x[i].style.background=f;
	}
	var ans=Math.round((Math.random()*100))%n;
	document.querySelector("#colorDisplay").textContent=x[ans].style.background;
	return ans;
}


var x=document.querySelectorAll(".square");
var ans=reload(x);

var neww=document.querySelector("#reset");
neww.addEventListener("click",function(){
	document.querySelector("#message").textContent="";
    k=1;
    ans=reload(x);
});


for(var i=0;i<n;i++)
{
	if(i!=ans)
		x[i].addEventListener("click",function(){
			if(k==1)
			{
				document.querySelector("#message").textContent="Try Again";
				this.style.background="#232323"
			}
		});
	else
		x[i].addEventListener("click",function(){
			var x=document.querySelectorAll(".square");
			for(var i=0;i<x.length;i++)
				x[i].style.background=this.style.background;
			k=0;
			document.querySelector("#message").textContent="Correct!";

		});
}

var mode=document.querySelectorAll(".mode");

mode[0].addEventListener("click",function(){
	this.classList.add("selected");
	mode[1].classList.remove("selected");
	n=3;
	for(var j=3;j<6;j++)
		x[j].classList.remove("square");
	ans=reload();
});

mode[1].addEventListener("click",function(){
	mode[0].classList.remove("selected");
	this.classList.add("selected");
	n=6;
	for(var j=0;j<6;j++)
		x[j].classList.add("square");
	ans=reload();
});

