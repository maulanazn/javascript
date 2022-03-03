//execution context, hoisting, and scope
/* 
  2 fase:
  -Creation(fase pembuatan pada global context)
  -execution
*/

// console.log(nama);
// let nama = "maulana";

//hoisting(menarik ulur variabel untuk dieksekusi)

// let nama = "zulkifli";
// let umur = 18;

// console.log(Perkenalan());

// function Perkenalan() {
//   return `Halo nama saya ${nama}, dan umur saya tahun ini adalah ${umur}`;
// }

//hoisting close to closure

// function a() {
//   console.log('ini a');

//     function b(){
//       console.log('ini b');

//         function c() {
//           console.log('ini c');
//         }
//         c();
//     }
//     b();
// }

// a();

//contoh penerapan dari scope dan hoisting

var nama = "maulana zulkifli nugroho";
var username = "@maulana.zn";

function cetakIg() {
  /*scope, mencari variabel terdekat jika tidak ada dia akan mencari ke global*/
  var IgUrl = "http:/instagram.com/";
  return IgUrl + username;
}

console.log(cetakIg('@satrio'));

//contoh penerapan execution context, hoisting, dan scope

// function a() {
//   console.log('Maulana');
  
//   function b() {
//     console.log('Fatih');
//   }
//   b();
//   function c(nama) {
//     console.log(nama);
//   }
//   c('Bima');
// }



// var nama1 = "dimas";
// console.log(nama);
// a();
// var nama = "Nanda";
// console.log(nama1);