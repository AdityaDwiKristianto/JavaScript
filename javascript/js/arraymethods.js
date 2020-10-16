let nilai = [
    { nama: "budi", ipa: 90, bahasa: 70, matematika: 70 },
    { nama: "joni", ipa: 85, bahasa: 70, matematika: 60 },
    { nama: "tejo", ipa: 70, bahasa: 75, matematika: 90 },
    { nama: "siti", ipa: 90, bahasa: 80, matematika: 90 },
];

let nama = ["budi", "joni", "tejo", "siti"];
// nama.push("ani", "roma");

//console.log(nama.shift());

//nama.unshift("bobi", "roki");

//console.log(nama.slice(0, 3));

let mapel = ["ipa", "bahasa", "matematika"];
//console.log(nama.concat(mapel));

// console.log(nama.concat(['ips', 'pkn', 'sejarah']));

//console.log(nama.splice(3, 4));

//console.log(nama.pop());

//console.log(nilai[0].nama);
//console.log(nama);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// nama.forEach(function(a) {
//     console.log(a);
// });

// nama.forEach(a => console.log(a)); 

// nilai.filter(function(a) {
//     if (a.ipa > 80) {
//         console.log(a.nama);
//     }
// });

nilai.filter((a) => (a.ipa > 80 ? console.log(a) : null));