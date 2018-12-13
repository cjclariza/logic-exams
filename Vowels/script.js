function getString() {
    let wordInput = $('#word').val();

    let word = wordInput.replace(/A/g, '4')
                        .replace(/a/g, '4')
                        .replace(/E/g, '3')
                        .replace(/e/g, '3')
                        .replace(/I/g, '1')
                        .replace(/i/g, '1')
                        .replace(/O/g, '0')
                        .replace(/o/g, '0');

    $('#container').append(word)
}
