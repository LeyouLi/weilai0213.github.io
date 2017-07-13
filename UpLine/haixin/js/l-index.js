window.onload=function () {

//资讯动态轮播图
    var louceng=document.querySelectorAll("#l-tiaozhuan");
    var lcneirong=document.querySelectorAll(".l-dt-lunbo1");
    var con=document.querySelector('.l-dt-zj-lunbo-k');
    //轮播效果
    for (let i=0;i<louceng.length;i++){
        louceng[i].onmouseover=function () {
            var ot=lcneirong[i].offsetTop;
            con.style.top=-ot+"px";
    }
    }
        
//入口
    var box=document.querySelectorAll(".active2");
    var tiao1=document.querySelectorAll(".active2-tiao1");
    var tiao2=document.querySelectorAll(".active2-tiao2");
    var tiao3=document.querySelectorAll(".active2-tiao3");
    var tiao4=document.querySelectorAll(".active2-tiao4");
       
       for(let j=0;j<box.length;j++){
           box[j].onmouseover=function () {
               // alert(j);
               box[j].style.boxShadow= '2px 1px 5px #3A3A3A';
               box[j].style.zIndex='11';
               tiao1[j].style.opacity='1';
               tiao2[j].style.opacity='1';
               tiao3[j].style.opacity='1';
               tiao4[j].style.opacity='1';
               tiao1[j].style.width='70px';
               tiao2[j].style.height='70px';
               tiao3[j].style.width='70px';
               tiao4[j].style.height='70px';
           }
           box[j].onmouseout=function () {
               box[j].style.boxShadow= 'none';
               box[j].style.zIndex='1';
               tiao1[j].style.opacity='0';
               tiao2[j].style.opacity='0';
               tiao3[j].style.opacity='0';
               tiao4[j].style.opacity='0';
               tiao1[j].style.width='0px';
               tiao2[j].style.height='0px';
               tiao3[j].style.width='0px';
               tiao4[j].style.height='0px';
           }
       }

    //投资轮播图
    var dian=document.querySelectorAll(".l-tz-bottom-diandian");
    var dianji=document.querySelectorAll(".l-tz-top-daohang");
    console.log(dianji)
    // dianji.onclick=function () {
    //     alert(1)
    // }
    for(let a=0;a<dian.length;a++){
        dian[a].onmouseover=function(){
            for(var b=0;b<dian.length;b++){
                dian[b].classList.remove("active3");
            }
            dian[a].classList.add("active3");
        }
    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//end
}