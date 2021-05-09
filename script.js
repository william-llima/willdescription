
typing()


function typing(){
	var text = document.querySelector("h1")
var rawtext=text.innerHTML.split("")
 text.innerHTML=""

 rawtext.forEach(function(leter,i){
 	setTimeout(function(){
 		text.innerHTML+=leter
 	},85 *i)
 })

}

ambmenu=document.getElementById('ambmenuselect')
ambmenubox=document.getElementById('menu_amb')

ambmenubox.addEventListener('click',function(){
	typedisp=window.getComputedStyle(ambmenu).getPropertyValue("display")
	console.log(typedisp)
	typedisp=='none'?typedisp='flex':typedisp='none'	
	ambmenu.style.display=typedisp
})

logogit=document.getElementById('logogit')

logogit.addEventListener('click',function(){
	document.location.href="https://github.com/william-llima"
})