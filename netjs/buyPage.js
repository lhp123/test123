function ram(str){
		if(str.length<9){
			str += Math.floor(Math.random()*10);
			return ram(str);
		}else{
			return str;
		}
	}
	
	$.post("action.php",{action:"getlocaluser"},function(data){
		var datas = jQuery.parseJSON(data);
		if(datas.success==1){
			var session_uid = datas.uid;
			//var session_uid = "3";
			//var session_mp = $("#sess_mp").html();
			if(typeof(Storage) !== "undefine"){
				var	product_num = localStorage.num;
				var	product_id = jQuery.parseJSON(localStorage.product_id);
				var li ="";
				for(var i=0;i<product_id.length;i++){
					var urldet = "http://www.dtdc007.com/m/sharedetail.html?uid="+ram("")+""+session_uid+"&pid="+ram("")+""+product_id[i].id+"&type="+ram("")+""+product_id[i].type;
					li += "<li><div><a href='"+urldet+"'>"+urldet+"</a></div><a href='#' style='width:70%;text-align:center;' data1='"+urldet+"' data2='http://www.dtdc007.com/m/"+product_id[i].img+"' data3='"+product_id[i].title+"' class='button button-green sharebtn1'><span>���������</span></a><a href='#' style='width:70%;text-align:center;' data1='"+urldet+"' data2='http://www.dtdc007.com/m/"+product_id[i].img+"' data3='"+product_id[i].title+"' class='button button-red sharebtn2'><span>��������Ȧ</span></a></li>";
					
				}
				$("#link_add").append(li);
				localStorage.removeItem("product_id");
				localStorage.removeItem("num");
			}
		}
	});

  /*
   * ע�⣺
   * 1. ���е�JS�ӿ�ֻ���ڹ��ںŰ󶨵������µ��ã����ںſ�������Ҫ�ȵ�¼΢�Ź���ƽ̨���롰���ں����á��ġ��������á�����д��JS�ӿڰ�ȫ��������
   * 2. ��������� Android ���ܷ����Զ������ݣ��뵽�����������µİ����ǰ�װ��Android �Զ������ӿ��������� 6.0.2.58 �汾�����ϡ�
   * 3. �������⼰���� JS-SDK �ĵ���ַ��http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
   *
   * ������������������ĵ�����¼5-�������󼰽���취�����������δ�ܽ����ͨ����������������
   * �����ַ��weixin-open@qq.com
   * �ʼ����⣺��΢��JS-SDK��������������
   * �ʼ�����˵�����ü��������������������ڣ��������������������ĳ������ɸ��Ͻ���ͼƬ��΢���Ŷӻᾡ�촦����ķ�����
   */
  wx.config({
    debug: false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      // ����Ҫ���õ� API ��Ҫ�ӵ�����б���
		'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems'
    ]
  });
  wx.ready(function () {
    // ��������� API
	$(".sharebtn1").click(function(){
		var url = $(this).attr("data1");
		var img = $(this).attr("data2");
		var title = $(this).attr("data3");
		//alert($(this).attr("data1"));
		wx.onMenuShareAppMessage({
      title: title,
      link: url,
      imgUrl: img,
      success: function (res) {
        alert('�ѷ���');
      },
      cancel: function (res) {
        alert('��ȡ��');
      }
    });
	alert('������������Ͻǵġ����͸����ѡ�');
	});
	

$(".sharebtn2").click(function(){
		var url = $(this).attr("data1");
		var img = $(this).attr("data2");
		var title = $(this).attr("data3");
		//alert($(this).attr("data1"));
		wx.onMenuShareTimeline({
      title: title,
      link: url,
      imgUrl: img,
      success: function (res) {
        alert('�ѷ���');
      },
      cancel: function (res) {
        alert('��ȡ��');
      }
    });
	alert('������������Ͻǵġ���������Ȧ��');
	});
	wx.error(function (res) {

});
  });