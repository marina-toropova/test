
const DEFAULT_LATITUDE = 56.85190;
const DEFAULT_LONGITUDE = 60.61220;
const SET_VIEW_LONGITUDE = 60.61220;

const IconSizes = {
    MAIN_ICON_SIZE: [52, 52],
  };

const map = L.map('map');

const mainPinIcon = L.icon({
    iconUrl: '../images/location-pin-svgrepo-com.svg',
    iconSize: IconSizes.MAIN_ICON_SIZE
  });

  const mainPinMarker = L.marker(
    {
      lat: DEFAULT_LATITUDE,
      lng: DEFAULT_LONGITUDE,
    },
    {
      draggable: false,
      icon: mainPinIcon,
    },
  );

  mainPinMarker.setLatLng({
    lat: DEFAULT_LATITUDE,
    lng: DEFAULT_LONGITUDE,
  });

  const loadMap = () => {
    map.setView({
        lat: DEFAULT_LATITUDE,
        lng: SET_VIEW_LONGITUDE,
      }, 13);
  
    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      },
    ).addTo(map);
  
    mainPinMarker.addTo(map);
  };

export { loadMap };