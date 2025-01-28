//your JS code here. If required.
let select=document.getElementById("colorSelect");

function remove()
{
	let selectedindex=select.selectedIndex;
	
	if(selectedindex!==-1)
	{
		select.remove(selectedindex)
	}
}
