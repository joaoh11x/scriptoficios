function concatenarSites(){
    var sitesInput = document.getElementById("sitesInput").value;
    var sitesArray = sitesInput.split('\n');
    var resultado = "";

    sitesArray.forEach(function(site) {
        site = site.trim();
        if(site){
            resultado +=  `local-zone:"${site}" redirect\n`
            resultado +=  `local-data:"${site}. A 186.224.17.49\n`
        }
    });

    document.getElementById("resultado").value = resultado;
}
