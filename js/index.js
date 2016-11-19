var outer = document.getElementById('outer');
var oLis=outer.getElementsByTagName('li');
var spans = outer.getElementsByTagName('span');
for(var i=0;i<oLis.length;i++){
    oLis[i].index=i;
    oLis[i].onmouseenter = function (e){ //onmouseenter事件来代替onmouseover
        e = e || window.event;
        //先要判断我的鼠标是从盒子的那个方向进来的
        var res = getDirection(this,e);  //res代表的就是方向
        //通过res来判断方向 0 , 1 ,2 ,3
        console.log(res);
        switch (res){
            case 0: //左
                utils.css(spans[this.index],{left: -113, top : 0});
                break;
            case 1:
                utils.css(spans[this.index],{left: 0, top : 113});
                break;
            case 2:
                utils.css(spans[this.index],{left: 113, top : 0});
                break;
            case 3:
                utils.css(spans[this.index],{left : 0, top : -113});
                break;
        }

        animate(spans[this.index],{left:0,top:0},500);
    };
    oLis[i].onmouseleave = function (e){ //onmouseleave代替onmouseout
        var res = getDirection(this,e); // 算从哪个方向出去
        switch (res){
            case 0: //左
                animate(spans[this.index],{left: -113, top : 0},500);
                break;
            case 1:
                animate(spans[this.index],{left: 0, top : 113},500);
                break;
            case 2:
                animate(spans[this.index],{left: 113, top : 0},500);
                break;
            case 3:
                animate(spans[this.index],{left : 0, top : -113},500);
                break;
        }
    };

    function getDirection(Lis,e){
        var x = e.pageX - Lis.offsetLeft - Lis.offsetWidth/2;
        var y = Lis.offsetTop + Lis.offsetHeight/2 - e.pageY;
        var angu = Math.atan2(y,x)*180/Math.PI;
        return Math.round((angu+180)/90)%4;
    }

}
