function getNumbers() {
    let num = $('#number').val();
    while(num > 0) {
        num = num - 1;
        if( (num % 2) == 0 ) {
            $('#even').append(num + "<br>");
        } else {
            $('#odd').append(num + "<br>");
        }
    }
}
