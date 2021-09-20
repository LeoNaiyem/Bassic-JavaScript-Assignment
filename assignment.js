



// kilometerToMeter = kilometer(km)*1000 = meter
function kilometerToMeter(km){
    const meter = km*1000;
    return meter;
}
const convertedResult = kilometerToMeter(13);
console.log(convertedResult);



// budgetCalculator = watch*50 + phone*100 + laptop*500 = totalCost
function budgetCalculator(watch, phone, laptop){
    watch = watch* 50;
    phone = phone* 100;
    laptop = laptop* 500;
    total = watch + phone + laptop;
    return total;
}
const totalCost = budgetCalculator(10, 10, 10);
console.log(totalCost);



// hotelCost = (1 to 10)*100 + (11 to 20)*80 + (21 to all)*50;
function hotelCost(days){
    let totalCost = 0;
    if(days <= 10){
        totalCost = days* 100;
    }
    else if(days <= 20){
        const firstPeriodCost = 10* 100;
        const remainingDays = days - 10;
        const secondPeriodCost = remainingDays* 80;
        totalCost = firstPeriodCost + secondPeriodCost;   
    }
    else{
        const firstPeriodCost = 10* 100;
        const secondPeriodCost = 10* 80;
        const remainingDays = days - 20;
        const thirdPeriodCost = remainingDays* 50;
        totalCost = firstPeriodCost + secondPeriodCost + thirdPeriodCost;

    }
    return totalCost;
}
const totalHotelCost = hotelCost(33);
console.log(totalHotelCost);




// megaFriend = longest name
function megaFriend(friends){
    let megaFriendName = ""
    for(let name of friends){
        if(name.length > megaFriendName.length){
            megaFriendName = name;
        }
    }
    return megaFriendName;
}

const friendNames = ['Barkat', 'Rafiq', 'Jbbar', 'Zakir Naik', 'Aubdulla', 'Muhammad', 'Muhammad Ali', 'Naiyem Hossain']
const megaFriendName = megaFriend(friendNames);
console.log(megaFriendName);