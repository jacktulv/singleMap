$(function() {
  var map;

  var mapErrorHandler=  function   () {
    alert("connect google failed need mofa");
    }




  const client_id='OZPUIUWVXYZF5VJUZQS5A01FN2CUKCVXCW2RKQUMBNMGIA5F';
  const client_secret='VYZOK3E15J3U32JF3OVTSOFTSUTFY2MEFXNS54JBKG25YWFN';
  var  initlocations=[
                {title:'外滩', location:{lat:31.240518,lng:121.490523}},
                {title:'东方明珠', location:{lat:31.239946,lng:121.499720}},
                {title:'武康大楼', location:{lat:31.204737,lng:121.438294}},
                {title:'静安寺', location:{lat:31.222991,lng:121.445995}},
                {title:'豫园', location:{lat:31.227560,lng:121.486879}}
              ];


  var mapview={
    markers:[],
    largeInfowindow : new google.maps.InfoWindow(),

    geocoder :new google.maps.Geocoder(),

      //显示地址的具体实现
    geocode:function (marker,geocoder,largeInfowindow) {
      if(largeInfowindow.marker!=marker){
        largeInfowindow.marker = marker;
        largeInfowindow.setOptions({'maxWidth':400});
        geocoder.geocode({'location':marker.position},function (results,status) {
          if(status=='OK'){
            if(results[0]){
              //获取foursqure评论
              $.ajax({
                url:'https://api.foursquare.com/v2/venues/explore',
                data:{'v':'20180101','query':marker.title,'limit':'2','near':'Shanghai','client_id':client_id,'client_secret':client_secret},
                type:'POST',
                dataType:'jsonp',
              }).done(editcontent)
              .fail(function() { alert("error"); });


              function editcontent (data) {
                let content=`${results[0].formatted_address}<br>
                <p>Tips From Foursquare:${data.response.groups[0].items[0].tips[0].text}</p>`;
                largeInfowindow.setContent(content);//，一开始想放在全局content=""，然后再这个函数里处理他， 但总是显示"" 不知道哪里错了。只有在这里错了
              }


              largeInfowindow.open(map, marker);
              largeInfowindow.addListener('closeclick', function() {
                largeInfowindow.marker = null;
              });
            }else {
              largeInfowindow.setContent(marker.title);
              largeInfowindow.open(map, marker);
              largeInfowindow.addListener('closeclick', function() {
                largeInfowindow.marker = null;
              });
            }
          }else {
              window.alert('Geocoder failed due to: ' + status);
          }
        })
      }
    },

    //初始地图
    initMap:function () {
      //隐藏侧栏

        //地图定到上海
        map=new google.maps.Map(document.getElementById('map'),{
        center:{lat:31.244242,lng: 121.487648},
        zoom:13,
        mapTypeControl: false
        });

        var defaultIcon = mapview.makeMarkerIcon('0091ff');

        //初始化marker
        for (var i = 0; i < initlocations.length; i++) {
            var position=initlocations[i].location;
            var title=initlocations[i].title;
            var marker= new google.maps.Marker({
              position:position,
              icon:defaultIcon,
              title:title,
              map:map,
              animation: google.maps.Animation.BOUNCE,
              id:i
            });
            this.markers.push(marker);

            //点击的事件
            google.maps.event.addListener(marker, 'click',function (){
                  mapview.geocode(this,mapview.geocoder,mapview.largeInfowindow);
            });
        }

    },

    //找出符合的marker
    renderMarks:function (title) {
        var highlightedIcon = this.makeMarkerIcon('FFFF24');
        this.markers.forEach(function (marker) {
             marker.setMap(null);
             if(marker.getTitle()==title){
               marker.setOptions({animation:google.maps.Animation.DROP});
               marker.setMap(map);
               var bounds =new google.maps.LatLngBounds();
               mapview.geocode(marker,mapview.geocoder,mapview.largeInfowindow);
               marker.setIcon(highlightedIcon);
               bounds.extend(marker.position);
               map.fitBounds(bounds);
             }
        });
    },

    //显示所有marker
    renderAllMarks:function () {
      var bounds =new google.maps.LatLngBounds();
      this.markers.forEach(function (marker) {
        marker.setMap(map);
        bounds.extend(marker.position);
      });
      map.fitBounds(bounds);
    },
    makeMarkerIcon:function (markerColor) {
      var markerImage = new google.maps.MarkerImage(
        'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
        '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21,34));
      return markerImage;
    }

  }

//ko 模板
  var ViewModel=function () {
    var self=this;

    //监听输入
    self.inputplace="";

  //试着用ko但是没绑起来，  self.inputplace=ko.observable("");

    //监听marker
    self.obmarkers=ko.observableArray([]);

    //初始化marker
    self.initobmarkers=function () {
      initlocations.forEach(function (elem) {
        self.obmarkers.push(elem);
      });
    }
    self.initobmarkers();


    //默认显示侧栏
    var flag=true;
    self.shouldShowaside=ko.observable(flag);

    //显示侧栏事件
    self.showaside=function () {
      if(flag){
        self.shouldShowaside(!flag);
        mapview.renderAllMarks();
      }
      self.shouldShowaside(!flag);
      flag=!flag;

      mapview.renderAllMarks();
    }

    //单击选中当前位置
    self.showOnemarker=function (location) {
              self.obmarkers.remove(function (item) {
                  return item.title!=location.title;
              });
              mapview.renderMarks(location.title);
    };

    //处理输入框查询
    self.showInputmarker=function (d,e) {
        if(e.keyCode == 13){
            self.obmarkers.remove(function (item) {
            return item.title!=self.inputplace;
          });
            mapview.renderMarks(self.inputplace);

          };
        }


    //显示所有位置
    self.showallmarker=function () {
      self.obmarkers.removeAll();
      self.initobmarkers();
      mapview.renderAllMarks();
    }
  }
  ko.applyBindings(new ViewModel());
  mapview.initMap();
}());
