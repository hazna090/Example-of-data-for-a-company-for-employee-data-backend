const titleElement = document.querySelector("h1"); // mengambil element HTML dengan tag "h1"
titleElement.innerText = "APPLE"; //tag "h1" mengubah teks nya menjadi APPLE

const toline_data = [];
//console.log(toline_data); // menampilkan data
//console.table(toline_data); //  menampilkan data ke dalam table /debug

toline_data.push({
  id: 1,
  brand: "apple",
  tahun: 1976,
  pendiri: "Steve Jobs, Steve Wozniak, Ronald Wayne", //objek data ke dalam array yang berisi informasi data
  negara: "california",
  link: "https://www.apple.com/",
  picture: "images_1/apple_logo1.jpg",
});

const tbodyElement = document.querySelector("#toline_data-list"); // mengambil element html dengan id

function hapus(index) {
  if (confirm("apakah anda yakin ingin menghapus data ini")) {
    data_toline.splice(index, 1);
    tampilkandata();
  }
}

function tampilkandata() {
  tbodyElement.innerHTML = "";

  toline_data.map((toline_data, index) => {
    const no = index + 1;

    tbodyElement.innerHTML += `
<tr>
<td>${no}</td>
<td>${toline_data.brand}</td>
<td>${toline_data.tahun}</td>
<td>${toline_data.pendiri}</td>
<td>${toline_data.negara}</td>
<td>
<a href="${toline_data.link}">link</a>
</td>
<td>
<img src="${toline_data.picture}" width="50" height="60"/> 
</td>

<td>
<button class = "btn btn-danger" type="button" onclick="hapus(${index})">hapus</button>
</td>
</tr>`;
  });
}

tampilkandata();

const formtambahdata = document.querySelector("#tambah_data");
formtambahdata.addEventListener("submit", (event) => {
  event.preventDefault();
  const brand = document.querySelector("#brand").value;
  const tahun = document.querySelector("#tahun").value;
  const pendiri = document.querySelector("#pendiri").value;
  const negara = document.querySelector("#negara").value;
  const link = document.querySelector("#link").value;
  const picture = document.querySelector("#picture").value;

  if (brand && tahun && pendiri && negara && link && picture) {
    const data = {
      brand,
      tahun,
      pendiri,
      negara,
      link,
      picture,
    };
    toline_data.push(data);
    tampilkandata();
  } else {
    alert("isi data dulu");
  }
});
