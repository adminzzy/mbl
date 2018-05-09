var startCount = 0;
var errorPaga = "/ErrorFiles/404.html";
var IMAGE_DELETE_URL = "/image/shoptransfer/";

$(document).ready(function () {
    ready();

});

var ready = function () {
    a_none_ready_simulationClick();
    // $("img").addClass("carousel-inner img-responsive img-rounded");
};


var a_none_ready_simulationClick = function() {
    var d = $.getUrlParam("d");
    $.ajax({
        url: "//meibanglai.com/data/getForeignExhibition.do",
        type: "get",
        data: {
            "d":d
        },
        dataType: "json",
        success: function(data) {
            console.log(data);
            //填数据
            if(data.code==200){
                var d = data.data;

                document.getElementById("meeting_name").innerHTML = d.meeting_name;

                var tds = document.getElementsByTagName("td");
                // for (i=0; i<tds.length; i++){
                //     var td = tds[i];
                //     console.log(td.innerHTML);
                // }
                tds[0].innerHTML = d.meeting_name ;
                tds[1].innerHTML = d.meeting_time ;
                tds[2].innerHTML = d.meeting_area ;
                tds[3].innerHTML = d.pavilion_name ;
                tds[4].innerHTML = d.meeting_adress ;
                tds[5].innerHTML = d.organizer ;
                tds[6].innerHTML = d.undertakeer ;
                tds[7].innerHTML = d.supporter ;
                tds[8].innerHTML = d.contacter ;
                tds[9].innerHTML = d.tellphone ;
                tds[10].innerHTML = d.fax ;
                tds[11].innerHTML = d.about_uri ;
                tds[12].innerHTML = d.mail ;
                tds[13].innerHTML = d.meeting_context ;
                tds[14].innerHTML = d.meeting_money ;



            }else{
                   window.location.href = errorPaga;
            }
        },
        error: function () {
               window.location.href = errorPaga;
        }

    })
};


//获取参数地址栏参数
$.getUrlParam = function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
}



















