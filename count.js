var test = ["hhasd", "abdcs"];

test.forEach((string) => {
    getRepeatedChars(string)
})

const getRepeatedChars = (str) => {
    const chars = {};
    for (const char of str) {
        chars[char] = (chars[char] || 0) + 1;
    }
    var dupeArray = [];
    var duplicates = Object.entries(chars).filter(char => char[1] > 1).map(char => dupeArray.push(char[0]));
    console.log("dupeArray", dupeArray);

    //    return Object.entries(chars).filter(char => char[1] > 1).map(char => char[0]);
}