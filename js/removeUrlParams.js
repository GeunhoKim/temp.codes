/**
 * url string의 query value만 제거한 url string을 반환
 *
 *   e.g. in: 'http://example.org/sample?member=admin&pageIdx=3'
 *       out: 'http://example.org/sample?member&pageIdx'
 *
 *  요청 url에서 고유한 url 정보를 가져올 때 사용
 *
 */
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