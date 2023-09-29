
var voteEligible = function (age) {
       var result = +age;
    if (age==0|| age<0 || age>=130 ||age==null||isNaN(result) ){
        console.log(`Invalid data: ${age}`);
    
    
} else {
    if (age<18) {
        console.log(`Hey sorry you are not eligible for vote....Age ${age}`);
    } else {
        console.log(`Congrats you can vote, Age: ${age}`);
    }
        
    }
    
}
voteEligible(45);
voteEligible(20);
voteEligible(17);
voteEligible(8);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);