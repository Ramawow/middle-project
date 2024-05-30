const btnSuccess = document.querySelector('.btn-success');
const teks = document.querySelector('.teks');
const btnKurang = document.querySelector('.btnKurang');
const itemMe = document.querySelector('.itemMe');


// Logika urng yang ribet
// let jumlah = 1;
// btnSuccess.addEventListener('click', function () {
//     teks.innerHTML = jumlah++;
// })

// btnKurang.addEventListener('click', function () {
//     teks.innerHTML = jumlah - 1;
//     if (teks.innerHTML == 0) {
//         return 0;
//     } else {
//         jumlah--;
//     }
// })


btnSuccess.addEventListener('click', function (event) {
    teks.innerText++;
});

btnKurang.addEventListener('click', function (event) {
    teks.innerText--;
    if (teks.innerText <= 0) {
        return teks.innerText = 0;
    }
});


