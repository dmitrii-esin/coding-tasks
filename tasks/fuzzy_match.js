const fuzzyMatch = (text, search) => {
    /*
    Parameter text is a title, search is the user's search
    */
    // remove spaces, lower case the search so the search
    // is case insensitive
    const search = search.replace(/\ /g, '').toLowerCase();
    const tokens = [];
    const searchPosition = 0;

    // Go through each character in the text
    for (let n = 0; n < text.length; n++) {
        const textChar = text[n];
        // if we match a character in the search, highlight it
        if (searchPosition < search.length && textChar.toLowerCase() == search[searchPosition]) {
            textChar = '<b>' + textChar + '</b>';
            searchPosition += 1;
        }
        tokens.push(textChar);
    }
    // If are characters remaining in the search text,
    // return an empty string to indicate no match
    if (searchPosition != search.length)
    {
        return '';
    }
    return tokens.join('');
}