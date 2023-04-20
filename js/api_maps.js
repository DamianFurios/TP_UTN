function iniciarMap(){
    var coord = {lat:-27.4253911 ,lng: -59.0113575};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
