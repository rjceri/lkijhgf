$('#jumlah').click(function(){
    //alert('jumlah')
    //parsing data / input
    var angka1 = $('#angka_1').val();
    var angka2 = $('#angka_2').val();
    
    //proses
    var hasil = parseInt (angka1) + parseInt (angka2);

    //output
    $('#hasil').text('Hasil penjumlahan '+angka1+' + '+angka2+' =  ' + hasil)
})
$('#kurang').click(function(){
    //alert('kurang')
    var angka1 = $('#angka_1').val();
    var angka2 = $('#angka_2').val();
    
    //proses
    var hasil = parseInt (angka1) - parseInt (angka2);

    //output
    $('#hasil').text('Hasil pengurangan '+angka1+' - '+angka2+' = ' + hasil)
})
$('#kali').click(function(){
    //alert('kali')
    var angka1 = $('#angka_1').val();
    var angka2 = $('#angka_2').val();
    
    //proses
    var hasil = parseInt (angka1) * parseInt (angka2);

    //output
    $('#hasil').text('Hasil perkalian '+angka1+' x '+angka2+' = ' + hasil)
})
$('#bagi').click(function(){
    //alert('bagi')
    var angka1 = $('#angka_1').val();
    var angka2 = $('#angka_2').val();
    
    //proses
    var hasil = parseInt (angka1) / parseInt (angka2);

    //output
    $('#hasil').text('Hasil pembagian '+angka1+' : '+angka2+' = ' + hasil)
})
