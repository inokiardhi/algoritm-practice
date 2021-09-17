// console.log(calculateChange(700649, 800000));
// console.log(calculateChange(575650, 580000));
// console.log(calculateChange(657650, 600000));
// output: 
// Kembalian
// Kembalian yang harus diberikan kasir: 99351
// dibulatkan menjadi 99300

// 1 lembar 50000
// 2 lembar 20000
// 1 lembar 5000
// 2 lembar 2000
// 1 koin 200
// 1 koin 100

// Kembalian yang harus diberikan kasir: 4350
// dibulatkan menjadi 4300

// 2 lembar 2000
// 1 koin 200
// 1 koin 100

// False, kurang bayar

const kembalian = [];

const calculateChange = (totalBelanja, uangBelanja) => {
    if(totalBelanja > uangBelanja) {
        console.log("kurang bayar");
    }

    else {
        const jumlahKembalian = uangBelanja - totalBelanja;
        console.log(`Kembalian yang harus diberikan kasir: ${jumlahKembalian}`)
        let pembulatan = Math.floor(jumlahKembalian/100)*100;
        console.log(`dibulatkan menjadi ${pembulatan}`)

        while(pembulatan > 0) {
            if (pembulatan >= 50000) {
                kembalian.push(50000);
                pembulatan = pembulatan - 50000;
            } else if (pembulatan >= 20000) {
                kembalian.push(20000);
                pembulatan = pembulatan - 20000;
            } else if (pembulatan >= 5000) {
                kembalian.push(5000);
                pembulatan = pembulatan - 5000;
            } else if (pembulatan >= 2000) {
                kembalian.push(2000);
                pembulatan = pembulatan - 2000;
            } else if (pembulatan >= 200) {
                kembalian.push(200);
                pembulatan = pembulatan - 200;
            } else if (pembulatan >= 100) {
                kembalian.push(100);
                pembulatan = pembulatan - 100;
            }
            
        }
        kembalian.includes(50000) && console.log(`${kembalian.filter(item => item === 50000).length} lembar Rp.50000`)
        kembalian.includes(20000) && console.log(`${kembalian.filter(item => item === 20000).length} lembar Rp.20000`)
        kembalian.includes(5000) && console.log(`${kembalian.filter(item => item === 5000).length} lembar Rp.5000`)
        kembalian.includes(2000) && console.log(`${kembalian.filter(item => item === 2000).length} lembar Rp.2000`)
        kembalian.includes(200) && console.log(`${kembalian.filter(item => item === 200).length} koin Rp.200`)
        kembalian.includes(100) && console.log(`${kembalian.filter(item => item === 100).length} koin Rp.100`)
        return;
    }
    
};

calculateChange(700649, 800000);
calculateChange(575650, 580000);
calculateChange(657650, 600000);
