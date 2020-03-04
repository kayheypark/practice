function swfWrite(src, w, h, bg) {
	var src_arr = src.split("/");
	var src_file = src_arr[src_arr.length -1]
	var src_id = src_file.substr(0,src_file.length-4);
	//alert(src_id);

	html = '';
	html += '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,22,87" id="'+src_id+'" width="'+w+'" height="'+h+'">';
	html += '<param name="movie" value="'+src+'">';
	html += '<param name="allowFullScreen" value="true">';
	html += '<param name="quality" value="high">';
	html += '<param name="bgcolor" value="'+bg+'">';
	html += '<param name="swliveconnect" value="true">';	
	html += '<param name="wmode" value="window">';
	html += '<embed src="'+src+'" quality=high bgcolor="#ffffff" width="'+w+'" height="'+h+'" swliveconnect="true" id="'+src_id+'" name="'+src_id+'" allowfullscreen="true" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"><\/embed>';
	html += '<\/object>';
	document.write(html);
}

