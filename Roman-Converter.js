function romanCoverter(num) {
let romanNumeral="";
while(num>0){
if(num<4){
romanNumeral+="I"
num--
}
else if(num==4){
romanNumeral+="IV"
num-=4
}
else if(num>=5 && num<9){
romanNumeral+="V"
num-=5
}else if(num===9){
romanNumeral+="IX"
num-=9
}
else if(num>=10 && num<40){
  romanNumeral+="X"
  num-=10
}
else if(num===40){
romanNumeral+="XL"
num-=40
}
else if(num>=40 &&num<50){
romanNumeral+="XL"
num-=40
}
else if(num>=50 && num<90){
romanNumeral+="L"
num-=50
}
else if(num>=90 && num<400){
romanNumeral+="XC"
num-=90
}
else if(num>90 && num<400){
romanNumeral+="L"
num-=90
}
else if(num===400){
romanNumeral+="CD"
num-=400
}
else if(num>=500 &&num<600){
romanNumeral+="D"
num-=500
}
else if(num>=600 && num<700){
romanNumeral+="DC"
num-=600
}
else if(num>=700 && num<800){
romanNumeral+="DCC"
num-=700
}
else if(num>=800 && num<900){
romanNumeral+="DCCC"
num-=800
}
else if(num>=900&& num<1000){
  romanNumeral+="CM"
  num-=900
}
else if(num>=1000){
romanNumeral+="M"
num-=1000
}
else if(num>=2000 && num<3000){
romanNumeral+="MM"
num-=2000
}
else if(num>=3000 && num<4000){
romanNumeral+="MMM"
num-=3000;
}


 }
return romanNumeral;

}
