window.addEventListener('load', function(){
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        loadView(hash);
    } else {
        loadView('kezdooldal');
    }

    this.window.addEventListener('hashchange', function(){
        const hash = window.location.hash.substring(1);
        loadView(hash);
    });
})


function loadView(viewName){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', viewName + '.html', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 ){
            document.getElementById('content').innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}


