function getNumbers() {
    let num = $('#number').val();

    for(r=1; r<=num; r++ ) { // r = 11
        for(s=1; s<=(num-r); s++) { // s = 1
            $('#container').append('&nbsp;');

        }
        for(p=1; p<=r; p++){ //
            $('#container').append('* ');
        }
        $('#container').append('</br>');
    }
}
