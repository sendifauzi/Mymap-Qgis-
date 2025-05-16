ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11970370.949187, -767692.575106, 11972387.504370, -766238.010711]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_8MasjiddiKotaCimahi_1 = new ol.format.GeoJSON();
var features_8MasjiddiKotaCimahi_1 = format_8MasjiddiKotaCimahi_1.readFeatures(json_8MasjiddiKotaCimahi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8MasjiddiKotaCimahi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8MasjiddiKotaCimahi_1.addFeatures(features_8MasjiddiKotaCimahi_1);
var lyr_8MasjiddiKotaCimahi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8MasjiddiKotaCimahi_1, 
                style: style_8MasjiddiKotaCimahi_1,
                popuplayertitle: '8 Masjid di Kota Cimahi',
                interactive: true,
                title: '<img src="styles/legend/8MasjiddiKotaCimahi_1.png" /> 8 Masjid di Kota Cimahi'
            });

lyr_OSMStandard_0.setVisible(true);lyr_8MasjiddiKotaCimahi_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_8MasjiddiKotaCimahi_1];
lyr_8MasjiddiKotaCimahi_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'X-coord': 'X-coord', 'Y-coord': 'Y-coord', 'Deskripsi': 'Deskripsi', 'Gambar_URL': 'Gambar_URL', });
lyr_8MasjiddiKotaCimahi_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'X-coord': 'TextEdit', 'Y-coord': 'TextEdit', 'Deskripsi': 'TextEdit', 'Gambar_URL': 'TextEdit', });
lyr_8MasjiddiKotaCimahi_1.set('fieldLabels', {'id': 'inline label - visible with data', 'Nama': 'header label - always visible', 'X-coord': 'inline label - visible with data', 'Y-coord': 'inline label - visible with data', 'Deskripsi': 'header label - always visible', 'Gambar_URL': 'inline label - visible with data', });
lyr_8MasjiddiKotaCimahi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});