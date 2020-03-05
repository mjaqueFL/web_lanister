function GetCookie(name) {
    var arg=name+"=";
    var alen=arg.length;
    var clen=document.cookie.length;
    var i=0;

    while (i<clen) {
        var j=i+alen;

        if (document.cookie.substring(i,j)==arg)
            return "1";
        i=document.cookie.indexOf(" ",i)+1;
        if (i==0)
            break;
    }

    return null;
}

function Almacen_de_informacion (){
    if(GetCookie("cookies_aceptada"))
    {
        document.cookie = "cookies_aceptada=aceptada; expires=" + 90;
    }
    else
    {
        if(confirm("¿Quieres aceptar el uso de cookies? Consulte nuestra politica de cookies para más información")) {
            var expire = new Date();
            expire = new Date(expire.getTime() + 7776000000);
            document.cookie = "cookies_aceptada=aceptada; expires=" + expire;

            var visit = GetCookie("cookies_aceptada");

            if (visit == 1) {
                popbox3();
            }
        }
    }
}

$(function() {
    var visit=GetCookie("cookies_surestao");
    if (visit==1){ popbox3(); }
});

function popbox3() {
    $('#overbox3').toggle();
}
