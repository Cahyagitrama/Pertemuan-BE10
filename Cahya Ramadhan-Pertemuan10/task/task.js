// /**
//  * Fungsi untuk menampilkan hasil download
//  * @param {string} result - Nama file yang didownload
//  */
// function showDownload(result) {
//   console.log("Download selesai");
//   console.log("Hasil Download: " + result);
// }

// /**
//  * Fungsi untuk download file
//  * @param {function} callback - Function callback show
//  */
// function download(callShowDownload) {
//   setTimeout(function () {
//     const result = "windows-10.exe";
//     callShowDownload(result);
//   }, 3000);
// }

// download(showDownload);

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
/**
* Fungsi untuk menampilkan hasil download
* @param {string} result - Nama file yang didownload
*/

const showDownload = (result) => {
  console.log("Download selesai");
  console.log(`Hasil Download: ${result}`);
};

/**
 * Fungsi untuk download file
 * @returns {Promise<string>} - Promise yang menyelesaikan proses download
 */
const download = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = "windows-10.exe";
      resolve(result);
    }, 3000);
  });
};

// Menggunakan async/await
const executeDownload = async () => {
  console.log("Mulai download...");
  const result = await download();
  showDownload(result);
};

executeDownload();
