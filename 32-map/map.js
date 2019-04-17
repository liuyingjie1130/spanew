
$(function() {
  /* global BMap BMAP_NORMAL_MAP BMAP_HYBRID_MAP BMAP_ANIMATION_BOUNCE: true */
  var map = new BMap.Map('main');  
  var point = new BMap.Point(114.529963, 38.003679);
  map.centerAndZoom(point, 25);
  map.addControl(new BMap.MapTypeControl({
    mapTypes: [
    BMAP_NORMAL_MAP,
    BMAP_HYBRID_MAP 
    ]

  }));   

  map.enableScrollWheelZoom(true);
  map.setMapType(BMAP_HYBRID_MAP);

  var marker = new BMap.Marker(point, {'title': 'SPA 富应用开发'}); 
  marker.setAnimation(BMAP_ANIMATION_BOUNCE);

  map.addOverlay(marker);
  var opts = {
    width : 230, 
    height:100,
    title : '<strong>SPA 富应用开发</strong>' 


  };

  var infoWindow = new BMap.InfoWindow(''
      + '<div style="width: 250px">'
      + '<p>'
      + '时间：周二、周四下午<br>'
      + '地点：505 教室'
      + '</p>'
      + '<a href="https://github.com/liuyingjie1130" target="_blank">'
      + '<img src="https://avatars2.githubusercontent.com/u/25972488?s=400&u=f461802c31f09ce2cfc5ea92b7be85d7a59c5642&v=4" alt="英杰在此" width="40px" height="40px" style="position: relative; top: -58px; left: 190px">'
      + '</a>'
      + '</div>', opts);

  marker.openInfoWindow(infoWindow);

  marker.addEventListener('click', function(){          
    map.openInfoWindow(infoWindow, point);
  });
});
