//function 1
export function mapelHariSelasa () {
    const mapel = {
        jam1 : () => {
            return "Bahasa Inggris";
        },
        jam2 : () => {
            return "Pemrograman Web";
        },
        jam3 : () => {
            return "PJOK";
        },
        jam4 : () => {
            return "Pemrograman Berbasis Teks,Grafis dan Multimedia";
        },
        jam5 : () => {
            return "KIK";
        }
    };
   return mapel;    
}


//function 2
export function  rumusBangunDatar(){
    const phi= 3.14;
    const kumpulanRumusBangunDatar = [
     
       //Rumus Luas Persegi
        (sisi) => {
            return sisi * sisi;
        },

        //Rumus Luas Persegi Panjang
        (panjang, lebar) => {
            return panjang * lebar;
        },
        //Rumus Luas Segitiga
        (alas, tinggi ) => {
            return 1/2 * alas * tinggi;
        },
        //Rumus Luas Lingkaran
        (r) => {
            return phi * r * r;
        },
        //Rumus Luas Jajar Genjang 
        (alas , tinggi) => {
            return alas * tinggi ;
        },
    ]
    return kumpulanRumusBangunDatar;

}


