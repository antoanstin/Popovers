var btn=document.getElementsByClassName("btn")[0];
btn.addEventListener("click", function(e)
{
	e.target.parentNode.getElementsByClassName("popover")[0].classList.toggle("hide");
});