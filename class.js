class MobilToyota {
  constructor(merk, tipe, cc, warna, versi) {
    this.merk = merk,
    this.tipe = tipe,
    this.cc = cc,
    this.warna = warna,
    this.versi = versi
  }

  merkMobil() {
    console.log("ini Mobil " + this.merk );
  }

  isPajakBarangMewah() {
    console.log("ini terkena pajak barang mewah");
  }

  bahanBakar() {
    console.log("Bensin");
  }
}


let avanza = new MobilToyota("Avanza", "SUV", 1500, "Pink", "Doyok");
let innova = new MobilToyota("Innova", "SUV", 2500, "Blue", "Hybrid");


class Avanza extends MobilToyota() {
  constructor(merk) {
    super(merk,)
  }
} 



