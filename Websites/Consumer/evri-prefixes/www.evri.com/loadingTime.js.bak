function xml_http_post(url, data, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url, true);         
    req.send(data);    
}    

function calcaulate_performance() {
    var plt = window.performance.timing.domComplete - window.performance.timing.requestStart;
    var local_server_ip = "http://localhost:8000"
    console.log("Calculated PLT: " + plt);
    xml_http_post(local_server_ip, plt, null)
}    

window.addEventListener ? window.addEventListener("load", calcaulate_performance, true) : window.attachEvent && window.attachEvent("onload", calcaulate_performance);
