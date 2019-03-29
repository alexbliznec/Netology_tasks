'use strict'
      //Домашняя работа 3
      
      // Задача 1 
      
      const positions = [
        'Отвертка ультразвуковая WHO-D',
        'Ховерборд Mattel 2016',
        'Нейтрализатор FLASH black edition',
        'Меч световой FORCE (синий луч)',
        'Машина времени DeLorean',
        'Репликатор домашний STAR-94',
        'Лингвенсор 000-17',
        'Целеуказатель электронный WAY-Y'
      ];
      

   for (let i = 0; i < positions.length; i++)  {
       console.log(`${i + 1}-${positions[i]}`);
   }

   //Задача 2
   
    positions.push('Экзоскелет Trooper-111','Нейроинтерфейс игровой SEGUN','Семена дерева Эйва');
    
    console.log(`\n Окончательный список товаров:\n`);
    
    //Вариант 1
    
    for (let i = 0; i < positions.length; i++){
      console.log(`${i + 1}-${positions[i]}`);
    };
        
    
    //Задача 3
    

    
   //var recieveFirst = positions.splice(positions.indexOf('Машина времени DeLorean'),1).toString();
   
   const recieveFirstIndex = positions.indexOf('Машина времени DeLorean');
   const recieveFirstPosition = positions.splice(recieveFirstIndex,1);

   positions.unshift(recieveFirstPosition.toString());
   
  
   
   console.log(`\n Принять в первую очередь:\n`);
   for (let i = 0; i < 3; i++){
    console.log(`${i + 1}-${positions[i]}`);
  };
console.log(`----------------------`);
console.log(positions);
    
   //Задача 4 
   
  let [firstPosition, secondPosition, thirdPosition, fourthPosition, fifthPosition, ...restPositions] = positions;
  
  console.log(`\n В магазине: \n ${firstPosition};\n ${secondPosition}; \n ${thirdPosition};\n ${fourthPosition};\n ${fifthPosition};\n\nНа складе:\n \n ${restPositions}`)
