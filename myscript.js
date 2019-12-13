


var sign = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", "Does Not Exist"];


var future = [
    "Your sign is Aries! Today will be a sunny one for you!",
    "Your sign is Taurus! Today might be tough but there will a gift for you when you get home.",
    "Your sign is Gemini! Watch out for doubles today.",
    "Your sign is Cancer! Today is a day to appreciate the little things.",
    "Your sign is Leo! Your death is near...",
    "Your sign is Virgo! Get some coffee and take the day off for some self care.",
    "Your sign is Libra! You are an incredible person. Take the day to let everyone know it!",
    "Your sign is Scorpio! Your life is about to take an unexpected turn.",
    "Your sign is Sagittarius! You may receive bad news today, try and look at the positive side of things.",
    "Your sign is Capricorn! Try to take a break from worrying today since your future may be grim.",
    "Your sign is Aquarius! Things may get fishy today.",
    "Your sign is Pisces! Try to find a balance in life today.",
    "I'm sorry, the birthday you have entered does not exist. Please re-enter your date."
];

var image = ["images/aries.jpg","images/taurus.gif", "images/gemini.gif", "images/cancer.jpeg", "images/leo.jpeg", "images/virgo.jpg","images/libra.jpeg", "images/scorpio.jpg", "images/sagittarius.jpg", "images/Capricorn.jpg", "images/aquarius.png", "images/pisces.png", "images/bad.jpg" ];



function start(){
    var name = document.getElementById("name").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    console.log(month, name, day);
    var result = horoscope(month, day);
    document.getElementById("sign").innerHTML = sign[result];
    document.getElementById("future").innerHTML = future[result];
    document.getElementById("image").src = image[result];
}




function horoscope(month, day){

    if(month == 0){
        if(day <= 18){
            return 9;
        }else{
            return 10;
        }
    }

    if(month == 1){
        if(day >= 27){
            return 12;
        }
        if(day <= 17){
            return 10;
        }else{
            return 11;
        }

    }

    if(month == 2){
        if(day <= 19){
            return 11;
        }else{
            return 0;
        }
    }

    if(month == 3){
        if(day >= 30){
            return 12
        }
        if(day <= 18){
            return 0;
        }else{
            return 1;
        }
    }

    if(month == 4){
        if(day <= 19){
            return 1;
        }else{
            return 2;
        }
    }

    if(month == 5){
        if(day >= 30){
            return 12;
        }
        if(day <= 20){
            return 2;
        }else{
            return 3;
        }
    }

    if(month == 6){
        if(day <= 21){
            return 3;
        }else{
            return 4;
        }
    }

    if(month == 7){
        if(day <= 21){
            return 4;
        }else{
            return 5;
        }
    }

    if(month == 8){
        if(day >= 30){
            return 12;
        }
        if(day <= 21){
            return 5;
        }else{
            return 6;
        }
    }

    if(month == 9){
        if(day <= 21){
            return 6;
        }else{
            return 7;
        }
    }

    if(month == 10){
        if(day >= 30){
            return 12;
        }
        if(day <= 21){
            return 7;
        }else{
            return 8;
        }
    }

    if(month == 11){
        if(day <= 20){
            return 8;
        }else{
            return 9;
        }
    }

}