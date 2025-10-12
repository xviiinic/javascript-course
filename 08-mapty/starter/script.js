'use strict';

console.log('Mapty OOP Foundation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    // store the coordinates as an array of lat and long
    this.coords = coords;
    // store distance in kilometes
    this.distance = distance;
    // store duration in minutes
    this.duration = duration;
  }

  // generate workout description
  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log('Test workout:', testWorkout);

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('Running workout:', run1);
console.log('Running pace:', run1.pace.toFixed(1), 'min/kim');

const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('Cycling workout:', cycling1);
console.log('Cycling speed:', cycling1.speed.toFixed(1), 'km/h');

run1.click();
cycling1.click();
console.log('Run clicks:', run1.clicks);
console.log('Cycling clicks:', cycling1.clicks);

console.log('=== TESTING GEOLOCATION API ===');

//// FINAL CODE
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = {};

  constructor() {
    console.log('App starting');
    this._getPosition();
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    console.log(`Loading map at coordinates: ${latitude}, ${longitude}`);

    // create coordinate array
    // VERY IMPORTANT!!!!
    const coords = [latitude, longitude];

    // initalize map and center at users location
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    // add open street map
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // add a marker to the users location
    L.marker(coords).addTo(this.#map).bindPopup('Test location!').openPopup();

    // map click!
    this.#map.on('click', function (mapEvent) {
      console.log('Map clicked!', mapEvent);
      // Extract coordindate when clicking on the map
      const { lat, lng } = mapEvent.latlng;
      console.log(`Map clicked at: ${lat.toFixed(4)},${lng.toFixed(4)}`);

      // craete the blue marker
      L.marker([lat, lng])
        .addTo(this.#map)
        .bindPopup(
          `Workout location<br>Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`
        )
        .openPopup();
    });

    console.log('Map created successfully!');
  }

  _loadDefaultMap() {
    console.log('Loading default map location');
    const defaultCoords = [14.604, 120.994];

    this.#map = L.map('map').setView(defaultCoords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // map click!
    this.#map.on('click', function (mapEvent) {
      console.log('Map clicked!', mapEvent);
      // Extract coordindate when clicking on the map
      const { lat, lng } = mapEvent.latlng;
      console.log(`Map clicked at: ${lat.toFixed(4)},${lng.toFixed(4)}`);

      // craete the blue marker
      L.marker([lat, lng])
        .addTo(this.#map)
        .bindPopup(
          `Workout location<br>Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`
        )
        .openPopup();
    });
    console.log('Default map loaded successfully!');
  }
  _getPosition() {
    if (navigator.geolocation) {
      console.log('🔍 Requesting user location...');
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), {
        timeout: 10000,
        enableHighAccuracy: true,
        maximumAge: 600000,
      });
    } else {
      alert('❌ Geolocation is not supported by this browser');
      this._loadDefaultMap();
    }
  }
  _handleLocationError(error) {
    console.error('Geolocation error:', error);

    let message = 'Could not get your position. ';

    switch (error.code) {
      case error.PERMISSION_DENIED:
        message +=
          'Location access was denied. Please enable location services and refresh the page.';
        break;
      case error.POSITION_UNAVAILABLE:
        message += 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        message += 'Location request timed out.';
        break;
      default:
        message += 'An unknown error occurred.';
        break;
    }

    alert(`📍 ${message}`);
    this._loadDefaultMap();
  }
}
