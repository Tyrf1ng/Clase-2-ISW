for(i = 0 ; i < 10 ; i++){
    console.log(i+1)
};

for(i = 10 ; i > 0 ; i--){
    console.log(i)
};

for(i = 1 ; i <= 10 ; i++){
    if(i % 2 == 0){
        console.log(i)
    }
};

for(i = 0; i < 10 ; i++){
    if(i % 2 == 1){
        console.log(i);
    }
};

for(i = 1 ; i <= 10 ; i++){
    if(i % 3 == 0){
        console.log(i)
    }
};

for(i = 1 ; i <= 10 ; i++){
    if(i % 5 == 0){
        console.log(i)
    }
};

for(i = 1 ; i <= 10 ; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i)
    }
};

for(i = 1 ; i <= 10 ; i++){
    if(i % 3 == 0 || i % 5 == 0){
        console.log(i)
    }
};