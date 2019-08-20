const getTheTitles = function(books) {
    let outputArray = []; 
    books.forEach(element => {
        let currentTitle = element.title;
        outputArray.push(currentTitle);
    });
    return outputArray;
}
module.exports = getTheTitles;
