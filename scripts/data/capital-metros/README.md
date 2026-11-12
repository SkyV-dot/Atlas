# Capital metropolitan areas

Generated GeoJSON files in this folder are used as separate playable regions when a suitable capital area is available.

Source: European Commission Joint Research Centre, GHS-FUA R2019A. It defines functional urban areas using the urban centre and its commuting belt (at least 15% commuting to the centre); the boundaries describe 2015. The source is global but does not contain a matching functional urban area for every capital, so the generator only creates a separate metro region when it can match a capital point to a source polygon.

The original administrative divisions remain in `public/maps/admin1/detailed`. The metro is clipped to those national divisions before it is added to the playable map.

Source information: https://human-settlement.emergency.copernicus.eu/datasets.php
