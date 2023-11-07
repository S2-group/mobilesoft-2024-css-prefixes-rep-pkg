var Start = Date.now();
    window.addEventListener('load', function(){
	var loadTime = performance.timing.responseEnd - performance.timing.navigationStart;
    console.log("LOADING TIME IS= " + loadTime + " ms"); 
    timing = btoa(loadTime.toString());
	name = document.URL;
    }, false);