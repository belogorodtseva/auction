/*function initMap() {
 var styles = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121"
      },
      {
        lightness: -10
      }
    ]
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        color: "#000000"
      },
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        lightness: 40
      },
      {
        weight: 6
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#000000"
      },
      {
        weight: 2.5
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#2e2e2e"
      },
      {
        lightness: 5
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b"
      },
      {
        weight: 1.5
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#f7df0d"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#f7df0d"
      },
      {
        saturation: -25
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#f7df0d"
      },
      {
        visibility: "simplified"
      },
      {
        weight: 1.5
      }
    ]
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#f7df0d"
      },
      {
        weight: 2.5
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f7df0d"
      },
      {
        weight: 2.5
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d"
      }
    ]
  }
];
var options = {
mapTypeControlOptions: {
  mapTypeIds: ['Styled']
},
  disableDefaultUI: true,
  mapTypeId: 'Styled'
};

var uluru = {lat: 50.469108, lng: 30.520117};
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: uluru
});
var marker = new google.maps.Marker({
  position: uluru,
  map: map
});

var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
map.mapTypes.set('Styled', styledMapType);
*/
var myStyle = [
 {
   elementType: "geometry",
   stylers: [
     {
       color: "#212121"
     },
     {
       lightness: -10
     }
   ]
 },
 {
   elementType: "labels.icon",
   stylers: [
     {
       visibility: "off"
     }
   ]
 },
 {
   elementType: "labels.text.fill",
   stylers: [
     {
       color: "#bdc3c7"
     }
   ]
 },
 {
   elementType: "labels.text.stroke",
   stylers: [
     {
       color: "#212121"
     }
   ]
 },
 {
   featureType: "administrative",
   elementType: "geometry",
   stylers: [
     {
       color: "#bdc3c7"
     }
   ]
 },
 {
   featureType: "administrative.country",
   elementType: "labels.text.fill",
   stylers: [
     {
       color: "#F5F5F5"
     }
   ]
 },
 {
   featureType: "administrative.land_parcel",
   stylers: [
     {
       color: "#000000"
     },
     {
       visibility: "off"
     }
   ]
 },
 {
   featureType: "administrative.locality",
   elementType: "labels.text.fill",
   stylers: [
     {
       lightness: 40
     },
     {
       weight: 6
     }
   ]
 },
 {
   featureType: "administrative.locality",
   elementType: "labels.text.stroke",
   stylers: [
     {
       color: "#000000"
     },
     {
       weight: 2.5
     }
   ]
 },
 {
   featureType: "poi",
   elementType: "labels.text.fill",
   stylers: [
     {
       color: "#bdc3c7"
     }
   ]
 },
 {
   featureType: "poi.park",
   elementType: "geometry",
   stylers: [
     {
       color: "#212121"
     },
     {
       lightness: 5
     }
   ]
 },
 {
   featureType: "poi.park",
   elementType: "labels.text.fill",
   stylers: [
     {
       color: "#bdc3c7"
     }
   ]
 },
 {
   featureType: "poi.park",
   elementType: "labels.text.stroke",
   stylers: [
     {
       color: "#212121"
     },
     {
       weight: 1.5
     }
   ]
 },
 {
   featureType: "road",
   elementType: "geometry.fill",
   stylers: [
     {
       color: "#f1c40f"
     }
   ]
 },
 {
   featureType: "road",
   elementType: "labels.text.fill",
   stylers: [
     {
       color: "#bdc3c7"
     }
   ]
 },
 {
   featureType: "road.arterial",
   elementType: "geometry",
   stylers: [
     {
       color: "#f1c40f"
     },
     {
       saturation: -25
     }
   ]
 },
 {
   featureType: "road.highway",
   elementType: "geometry",
   stylers: [
     {
       color: "#f1c40f"
     },
     {
       visibility: "simplified"
     },
     {
       weight: 1.5
     }
   ]
 },
 {
   featureType: "road.highway.controlled_access",
   elementType: "geometry",
   stylers: [
     {
       color: "#f1c40f"
     },
     {
       weight: 2.5
     }
   ]
 },
 {
   featureType: "road.local",
   elementType: "labels.text.fill",
   stylers: [
     {
       color: "#f1c40f"
     },
     {
       weight: 2.5
     }
   ]
 },
 {
   featureType: "transit",
   elementType: "labels.text.fill",
   stylers: [
     {
       color: "#bdc3c7"
     }
   ]
 },
 {
   featureType: "water",
   elementType: "geometry",
   stylers: [
     {
       color: "#000000"
     }
   ]
 },
 {
   featureType: "water",
   elementType: "labels.text.fill",
   stylers: [
     {
       color: "#212121"
     }
   ]
 }
];
var uluru = {lat: 50.469108, lng: 30.520117};

var map = new google.maps.Map(document.getElementById('map'), {
  mapTypeControlOptions: {
    mapTypeIds: ['mystyle', google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.TERRAIN]
  },
  center: uluru,
  zoom: 13,
  mapTypeId: 'mystyle'
});


var image = 'http://www.myiconfinder.com/uploads/iconsets/48-48-89fdce5084dbe77556cf99f7b22ae7e8-pin.png';
var marker = new google.maps.Marker({
  position: uluru,
  icon: image,
  draggable: true,
  map: map
});



map.mapTypes.set('mystyle', new google.maps.StyledMapType(myStyle, { name: 'My Style' }));
