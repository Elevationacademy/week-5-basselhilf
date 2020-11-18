//ex-3
const showPrice = function(){
    let input = $("#inpt").val()

    $.get(`/priceCheck/${input}`,function(furnData){
        $("body").append(`<div>${furnData.price}<div>`)
    })
    $("#furniture").val("")
}

//ex-5
const showItem = function(){
    let input = $("#buyInpt").val()

    $.get(`/buy/${input}`,function(furnData){
        if(furnData.inventory>0){
        $("body").append(`<div> Congratulations, you've just bought ${input} there are ${furnData.inventory} left now in the store<div>`)
        }
        else 
        $("body").append(`<div> The ${input} product is out of the stock <div>`)

    })
    $("#furniture").val("")
}