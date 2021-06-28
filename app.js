var a=5
var b=3
var c
c=a+b
document.write( "Sum of 5 and 3 is " + c )
c=a-b
document.write( "<br>"+  "<br>"+  "Subtraction of 5 and 3 is " + c )
c=a*b
document.write( "<br>"+  "<br>"+   "Multiplication of 5 and 3 is " + c )
c=a%b
document.write( "<br>"+  "<br>"+  "modulus of 5 and 3 is " + c )

/*  3  ch-5 assignment no 3   */ 

var a=5
var b=7 
var d

document.write("<br>" +  "<br>" +"initial value is 5")

 c= ++a  +b
document.write("<br>" +  "<br>" + "after increament value is  6" )

document.write("<br>" +  "<br>" + "after Addition value  is " +  c )

c= --a +b
document.write("<br>" +  "<br>" + "after  decreament value  is " +  c )

d=c%3
document.write("<br>" +  "<br>" + "after modulus value   is " +  d )



var tickets
var movie

tickets=prompt("Enter tickets quantity " )
movie=prompt("Enter movie price")

totalprice=tickets*movie

document.write(   "<br>" +  "<br>" +  " Total cost to buy "  +  tickets    +  "  tickets  to a moive is   "  +  totalprice)



var table
var length = 10
var i = 1

table=prompt("Enter 1 to 20 any of number  ")

document.write( "<br>"+  "<br>" + " Multiplication table  :  "   +  table)

for(i = 1; i <= length; i++)

document.write( "<br>"  +i+     "   *   "   +    table   +   " = "   +  (i * table))




far=prompt("Enter far temprature")
cel=(far-32)*5/9
document.write( "<br>"+  "<br>"   +far +  "'C  is  'F  "   + cel  )
cel=prompt("Enter cel temprature")
far=(cel*9/5)+32
document.write( "<br>"+  "<br>" +  cel + " 'F    is    'C     " +    far  )


var item1
var quantity1
var item2
var quantity2
var shiping
var itq1
var itq2

var total_cost

item1=prompt("Enter price  of item  1 ")
quantity1=prompt("Enter Quantitiy of item 1 ")
item2=prompt("Enter price of item2 is ")
quantity2=prompt("Enter Quantitiy of item 2 ")

itq1=item1*quantity1
itq2=item2*quantity2
total_cost=itq1+itq2


document.write( "<br>"+  "<br>" + "Price of item 1 is  " + item1)
document.write( "<br>"+  "<br>" +  "Quantity of item 1 is  " + quantity1)
document.write( "<br>"+  "<br>" +  "Price of item 2 is  " + item2)
document.write( "<br>"+  "<br>" + "Quantity of item 2 is  " + quantity2)
document.write( "<br>"+  "<br>" + "Total cost of your order is " + total_cost)

/* MArks sheet*/

var English= +prompt("Enter English Marks")
var Math= +prompt("Enter Math Marks")
var IC= +prompt("Enter IC Marks")

var obt=(English+Math+IC)
var totalmarks=300
var per=100/totalmarks*obt

document.write("<br>"+  "<br>"+"your Obtained Marks Is " + obt + "<br>" )
document.write("<br>"+  "<br>"+"your Percentage Is " + per + "<br>" )


if(per>=80  ){
    document.write("your Grade IS A" )
}

else if(per >= 70 && per<=79  ){
    document.write("your Grade is B" )
}

else if(per >= 60 && per<=69  ){
    document.write("your Grade is C" )
}

else if(per >= 50 && per<=59  ){
    document.write("your Grade is D" )
}
else if( per <=49 ){
        document.write("You Are FAil Sory Try Next Time")
}


/* Currency Rate in pkr */ 

document.write("Currency in Pkr ")

var  us_dollars
var  Saudi_Riyals
var pkr
var  pk
var pakistan

us_dollars=+prompt("Enter  US Dollars ")
Saudi_Riyals=+prompt("Enter Saudi Riyals ") 

pkr=us_dollars*157;
pk=Saudi_Riyals*42;

document.write( "<br>" + "<br>" + "  Us_dollar is " + us_dollars) 
document.write( "<br>" + "<br>" +  "Saudi_Riyal is " + Saudi_Riyals)

pakistan=pkr+pk

document.write( "<br>" + "<br>" +   "Total Currency in Pkr  is " +  pakistan)
