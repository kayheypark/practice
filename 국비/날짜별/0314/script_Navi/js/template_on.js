// Top Menu
window.onload = function (){
	seq = 0;
	nav = document.getElementById("gnb");
	nav.menu = new Array();
	nav.current = null;
	nav.menuseq = 0;
	navLen = nav.childNodes.length;
	
	allA = nav.getElementsByTagName("a");
	for(k = 0; k < allA.length; k++) {
		allA.item(k).onmouseover = allA.item(k).onfocus = function () {
			nav.isOver = true;
		}
		allA.item(k).onmouseout = allA.item(k).onblur = function () {
			nav.isOver = false;
			setTimeout(function () {
				if (nav.isOver == false) {
					if (nav.menu[seq])
						nav.menu[seq].onmouseover();
					else if(nav.current) {
						menuImg = nav.current.childNodes.item(0);
						menuImg.src = menuImg.src.replace("_on.gif", ".gif");
						if (nav.current.submenu)
							nav.current.submenu.style.display = "none";
						nav.current = null;
					}
				}
			}, 500);
		}
	}

	for (i = 0; i < navLen; i++) {
		navItem = nav.childNodes.item(i);
		if (navItem.tagName != "LI")
			continue;

		navAnchor = navItem.getElementsByTagName("a").item(0);
		navAnchor.submenu = navItem.getElementsByTagName("ul").item(0);
		
		navAnchor.onmouseover = navAnchor.onfocus = function () {
			if (nav.current) {
				menuImg = nav.current.childNodes.item(0);
				menuImg.src = menuImg.src.replace("_on.gif", ".gif");
				if (nav.current.submenu)
					nav.current.submenu.style.display = "none";
				nav.current = null;
			}
			if (nav.current != this) {
				menuImg = this.childNodes.item(0);
				menuImg.src = menuImg.src.replace(".gif", "_on.gif");
				if (this.submenu)
					this.submenu.style.display = "block";
				nav.current = this;
			}
			nav.isOver = true;
		}
		nav.menuseq++;
		nav.menu[nav.menuseq] = navAnchor;
	}
	if (nav.menu[seq])
		nav.menu[seq].onmouseover();
}


