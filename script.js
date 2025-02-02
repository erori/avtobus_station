ymaps.ready(init);

function init() {
    
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64], 
        zoom: 10 
    });

    
    var buses = [
        { number: '123', time: '5 минут', coordinates: [55.75, 37.60] },
        { number: '456', time: '10 минут', coordinates: [55.77, 37.65] }
    ];

    
    buses.forEach(function(bus) {
        var placemark = new ymaps.Placemark(bus.coordinates, {
            hintContent: 'Автобус ' + bus.number,
            balloonContent: 'Автобус ' + bus.number + ' подъезжает через ' + bus.time
        });
        myMap.geoObjects.add(placemark);
    });

    
    updateBusList(buses);

    
    document.getElementById('zoom-in').addEventListener('click', function() {
        myMap.setZoom(myMap.getZoom() + 1);
    });

    document.getElementById('zoom-out').addEventListener('click', function() {
        myMap.setZoom(myMap.getZoom() - 1);
    });
}


function updateBusList(buses) {
    var busList = document.getElementById('bus-list');
    busList.innerHTML = ''; 

    buses.forEach(function(bus) {
        var li = document.createElement('li');
        li.textContent = 'Автобус ' + bus.number + ' - ' + bus.time;
        busList.appendChild(li);
    });
}