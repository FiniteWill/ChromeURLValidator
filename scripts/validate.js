function getCurURL(){
    return window.location.href;
}
/**
 * Sends a GET request to the given URL and returns a Promise.
 * @param {String} url
 * @returns {Promise}
 */
function getRequest(url){
    return new Promise(function (resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "json";
        let data = "NOTHING";
        xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.response);
                resolve(xhr.response);
            } 
            else {
                console.log(`Error: ${xhr.status}`);
                data=xhr.status;
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };

        xhr.onerror = function() {
            reject({
                "status": this.status,
                "statusText": this.statusText
            });
        }
        xhr.send();
    });
}