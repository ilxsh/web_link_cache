
		var qs = 'id=1&item_id=&url=';
		
		if (document.location.search == '')
			qs = '?' + qs;
		else
			qs = document.location.search + '&' + qs;
		
		document.write('<a target="_blank" style="text-decoration: none" href="http://totalcardiagnostics.com/c/php/banner/click.php' + qs + '"></a>');
	