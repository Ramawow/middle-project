import "./style/style.css";

import '../src/components/navbar';
import '../src/components/hero';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

const baseUrl = 'https://covid19.mathdro.id/api/countries/Indonesia/';

const getData = () => {
    fetch(baseUrl)
        .then(response => response.json())
        .then(results => {
            const heroContentElement = document.querySelector('hero-content');
            heroContentElement.coronaReport = results;
        })
        .catch(() => showMessage());
};

const showMessage = (message = 'Periksa koneksi internet...') => {
    alert(message);
};

getData();