function War4scom(nama, anggota, satpam, projek, calon, struktur) {
  this.name = nama;
  this.anggota = anggota;
  this.cops = satpam;
  this.projek = projek;
  this.Kerja = calon;
  this.struktur = struktur;

  this.Calonmendaftar = function(namaCalon) {
    this.Kerja.push(namaCalon);
    return this.Kerja;
  }

  this.Interview = function(namaCalon, status) {
    if (this.Kerja.length === 0) {
      alert('Belum ada yang daftar');
      return false;
    }

    for (i = 0; i < this.Kerja.length; i++) {
      if(this.Kerja[i] == namaCalon) {
        this.Kerja[i] = 'selamat anda diterima';
        this.struktur += status;
        return this.Kerja;
      }
    }
  }

}

let Creativeindustry = new War4scom('WARAS', ['Maulana Zulkifli Nugroho', 
'Dimas Bagus J.V', 'Fatih Kurniawan', 'Nanda Wido Prasojo', 'Muhammad Ramadhika Adhi N'], ['Ucup', 'Udin'], ['Game', 'Web', 
'App', 'Webapp'], [], []);