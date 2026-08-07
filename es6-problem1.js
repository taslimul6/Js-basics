//one

function describeDeclaration(string){

    if(string==="var"){
        return "Can redeclare, can reassign"
    }
    else if(string==="let"){
        return "Cannot redeclare, can reassign";
    }else if(string ==="const"){
        return ""
    }else{
        return "Invalid"
    }
        
}

// console.log(describeDeclaration("da"));

//two Movie Ticket Booking

function bookTicket(movie, seats = 1 ,pricePerSeat = 300  ){

    if( typeof movie==="string" &&  seats >0  &&  pricePerSeat > 0  ){

        return `movie:  ${movie} Seat(s): ${seats}, Total ৳ : ${seats * pricePerSeat} `;

    }else{
        return "Invalid"
    }
}

console.log(bookTicket("halue",-10));
