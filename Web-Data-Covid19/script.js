const kasus = document.querySelector(".kasus");
const meninggal = document.querySelector(".meninggal");
const sembuh = document.querySelector(".sembuh");

const form = document.querySelector(".cari-negara");
const userInput = document.querySelector(".user-input");

const negara = document.getElementById("negara");

const tanggal = document.getElementById("tanggal");

const notFound = document.getElementById("not-found");

const globalURL = "https://disease.sh/v3/covid-19/all";

async function getData(url) {
  let data = await fetch(url);
  data = await data.json();
  return data;
}

async function showData(url) {
  const data = await getData(url);

  if (!data.cases) {
    return notFound.classList.replace("d-none", "d-block");
  }

  notFound.classList.replace("d-block", "d-none");
  const updateTanggal = new Date(data.updated).toLocaleString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    year: 'numeric',
    month: 'long'
  });

  kasus.innerText = new Intl.NumberFormat().format(data.cases);
  meninggal.innerText = new Intl.NumberFormat().format(data.deaths);
  sembuh.innerText = new Intl.NumberFormat().format(data.recovered);
  negara.innerText = data.country ?? "Semua";

  tanggal.innerText = updateTanggal;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!userInput.value) {
    return showData(globalURL);
  }

  const localURL = `https://disease.sh/v3/covid-19/countries/${userInput.value}?strict=true`;
  showData(localURL);

  userInput.value = "";

});

showData(globalURL);