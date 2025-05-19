function firstNonRepeatedChar(str) {
    const charCount = {};

    // First pass: count characters using if statements
    for (const char of str) {
        if (charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char] = charCount[char] + 1;
        }
    }

    // Second pass: find the first character with count === 1
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
