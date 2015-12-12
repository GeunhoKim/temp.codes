function removeUrlParams(url){
    var pattern = new RegExp(/(\?|\&)([^=]+)\=(.([^\&]+)|([0-9]))/g)
    var returnUrl = url;

	match = pattern.exec(url);
	while (match != null) {
    	query = match[0]
    	console.log('query='+ query)
    	key = query.split('=')[0]
    	returnUrl = returnUrl.replace(query, key)
    	
	    match = pattern.exec(url);
	}

	return returnUrl
}