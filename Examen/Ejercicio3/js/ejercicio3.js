$(document).ready(function(){

    $.ajax({
        type:'get',
        url:"json.php",
        dataType:'json',
        success: muestraProvincias(url,document.getElementById("provincias"))
    });

    function muestraProvincias(data,status){
        $each(data,function(item){
            $(status).append("<div>"+data+"</div>");
        });
    }

});