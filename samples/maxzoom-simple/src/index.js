/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START maps_maxzoom_simple]
var map;
var maxZoomService;
var infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 35.6894, lng: 139.692 },
    mapTypeId: "hybrid"
  });

  infoWindow = new google.maps.InfoWindow();

  maxZoomService = new google.maps.MaxZoomService();

  map.addListener("click", showMaxZoom);
}

function showMaxZoom(e) {
  maxZoomService.getMaxZoomAtLatLng(e.latLng, function(response) {
    if (response.status !== "OK") {
      infoWindow.setContent("Error in MaxZoomService");
    } else {
      infoWindow.setContent(
        "The maximum zoom at this location is: " + response.zoom
      );
    }
    infoWindow.setPosition(e.latLng);
    infoWindow.open(map);
  });
}
// [END maps_maxzoom_simple]
export { map, maxZoomService, infoWindow, initMap, showMaxZoom };
