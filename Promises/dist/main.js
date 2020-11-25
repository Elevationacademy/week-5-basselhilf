// $.get('/randomWord', function (word) {
//     $.get(`/synonyms/${word}`, function (synonyms) {
//         $.get(`/sentiment/${word}`, function (sentiment) {
//             console.log(`
//             The word ${word} has a 
//             ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//             its synonyms are: ${synonyms}`)
//         })
//     })
// })


// $.ajax({
//     method: "GET",
//     url: "/randomWord",
//     success: function (word) {
//         $.ajax({
//             method: "GET",
//             url: `/synonyms/${word}`,
//             success: function (synonyms) {
//                 $.ajax({
//                     method: "GET",
//                     url: `sentiment/${word}`,
//                     success: function (sentiment) {
//                         console.log(`
//                         The word ${word} has a 
//                         ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//                         its synonyms are: ${synonyms}`)
//                     },
//                     error: function (err) {
//                         console.log(err)
//                     }
//                 })
//             },
//             error: function (err) {
//                 console.log(err)
//             }
//         })
//     },
//     error: function (err) {
//         console.log(err)
//     }
// })

//ex-1
// $.get('/randomWord')
//     .then(function(word) {
//         console.log(word)
//         return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
//     })
//     .then(function(book) {
//         console.log(book);
//     })

//ex-2
$.get('/randomWord')
	    .then(function(word) {
	        console.log(word)
	        let randomBook = $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
	        let randomGif = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`)
	        Promise.all([randomBook, randomGif])
	            .then(function(result) {
	                $("body").append(`<div>${result[0].items[0].volumeInfo.title}</div>`)
	                $("body").append(`<iframe src="${result[1].data[0].embed_url}">`)
	            })
	    })