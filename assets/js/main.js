// // 1)

// var a=3;
// var b=5;
// var c=8;
// var diskriminant=b*b-4*a*c;
// if(diskriminant>0){
//     var x1=(-b+ Math.sqrt(diskriminant))/(2*a);
//     var x2=(-b- Math.sqrt(diskriminant))/(2*a);
//     console.log("Kvadrat tenliyin iki kökü var:");
//     console.log("x1");
//     console.log("x2");   
// }
// else if(diskriminant==0){
//     var x=-b/(2*a);
//     console.log("Kvadrat tenliyin tek koku var.");
//     console.log("x");

// }
// else{
//     console.log("Kvadrat tenliyin helli yoxdur.");
// }

// 2)

// var a = 10;
// for (var i = 1; i < 1000; i++) {
//     if (i % a === 0) {
//         console.log(i);
//     }
// }

// const arr = [2, 4, 5, 9, 1];

// 3)

// let minElement=arr[0];
// for(let i=1;i<arr.length; i++){
//     if(arr[i]<minElement){
//         minElement=arr[i]; 
//     }
// }
// console.log(minElement);

// 4)

// let maxElement=arr[0];
// for(let i=1;i<arr.length; i++){
// if(arr[i]>maxElement){
//         maxElement=arr[i]; 
//     }
// }
// console.log(maxElement);


// 5)

// let minElement=arr[0];
// let minindex=0;
// for(let i=1;i<arr.length; i++){
//     if(arr[i]<minElement){
//         minElement=arr[i];
//         minindex=i; 
//     }
// }
// console.log(minElement);
// console.log(minindex);

// 6)

// let maxElement=arr[0];
// maxindex=0;
// for(let i=1;i<arr.length; i++){
// if(arr[i]>maxElement){
//         maxElement=arr[i]; 
//         maxindex=i;
//     }
// }
// console.log(maxElement);
// console.log(maxindex);

// 7)

// let sum = 0;
// for (let i = 1; i < arr.length; i += 2) {
//     sum += arr[i];
// }
// console.log( sum);


// 8)

// const cumle = "Men Code Academy Tələbəsiyəm";
// const kicikHerfCumle = cumle.toLowerCase();
// console.log(kicikHerfCumle);

// 9)

// const metin = "            Mən Code Academydə Programing tədrisi alıram            ";
// const bosluqsuzMetin = metin.trim();
// console.log(bosluqsuzMetin);

// 10)

// const cumle = "Mən Code Academy Tələbəsiyəm";
// const sozler = cumle.split(' ');
// console.log(sozler);

// 11)

// const cumle = "            Mən Code Academydə Programing tədrisi alıram            ";
// const temizlenmisCumle = cumle.trim();
// const herfSayi = temizlenmisCumle.replaceAll(' ', '').length;
// console.log(herfSayi);

