let carObj = [
    {
        mark: "wolkswagen",
        number: "0187-AA8",
        color: "серый",
        weight: '1200',
        age: '2008',
        type: "diesel",
        offense: '0',
        fine: '1',
    },
    {
        mark: "toyota",
        number: "0917-AA8",
        color: "оранжевый",
        weight: '1900',
        age: '2009',
        type: "diesel",
        offense: '1',
        fine: '9',
    },
    {
        mark: "bmv",
        number: "0001-AA1",
        color: "красный",
        weight: '1250',
        age: '2010',
        type: "petrol",
        offense: '3',
        fine: '0',
    },
    {
        mark: "wolkswagen",
        number: "9999-AA9",
        color: "чёрный",
        weight: '1260',
        age: '2011',
        type: "diesel",
        offense: '2',
        fine: '7',
    },
    {
        mark: "posrche",
        number: "9987-AA8",
        color: "белый",
        weight: '1100',
        age: '2012',
        type: "petrol",
        offense: '4',
        fine: '2',
    },
    {
        mark: "audi",
        number: "0989-AA8",
        color: "жёлтый",
        weight: '1500',
        age: '2013',
        type: "petrol",
        offense: '2',
        fine: '0',
    },
    {
        mark: "audi",
        number: "0997-AA8",
        color: "белый",
        weight: '1300',
        age: '2014',
        type: "petrol",
        offense: '6',
        fine: '0',
    },
    {
        mark: "audi",
        number: "1987-AA8",
        color: "белый",
        weight: '1200',
        age: '2015',
        type: "hybrid",
        offense: '10',
        fine: '2',
    },
    {
        mark: "audi",
        number: "0987-AA7",
        color: "чёрный",
        weight: '1700',
        age: '2022',
        type: "electro",
        offense: '1',
        fine: '5',
    },
    {
        mark: "toyota",
        number: "0987-AA9",
        color: "красный",
        weight: '1600',
        age: '2017',
        type: "electro",
        offense: '0',
        fine: '11',
    },
]; 
function getObjCar() {
    const results = carObj;
    return results;
}
function addCar(data) {
    const { mark, number, color, weight, age, type, offense, fine} = data;
    let newCar;
    if (mark && number && color && weight && age && type && offense && fine) {
        newCar = {
            mark: mark,
            number: number,
            color: color,
            weight: weight,
            age: age,
            type: type,
            offense: offense,
            fine: fine
      };
  
      
      carObj.push(newCar);
      return carObj;
    }
  
    return false;
  }
  function deleteCarByNumber(number) {
    
    let count = 0;
    for(let i = 0; i < carObj.length; i++){
        if(carObj[i].number == number){
            delete carObj[i];
            count =+ 1;
        }
    }
    if(count != 1){
        return false;
    }
    carObj = carObj.filter(item => item !== null);
    return true;
   }

   function editCar(data) {
    console.log(data);
    const { number, violations, of_fi, color } = data;
    let findCar;
    
    for(let i = 0; i < carObj.length; i++){
        if(carObj[i].number == number){
            findCar = carObj[i];
        }
    }
    if(findCar){
        if(number && violations && of_fi != ''){
            if(violations == 'offense'){
                findCar.offense = of_fi;
            } else {
                findCar.fine = of_fi;
            }
            for(let i = 0; i < carObj.length; i++){
                if(carObj[i].number == number){
                    carObj[i] = findCar;
                }
            }
            return true;
        }
        if(number && violations && color != ''){
            findCar.color = color;
    
            for(let i = 0; i < carObj.length; i++){
                if(carObj[i].number == number){
                    carObj[i] = findCar;
                }
            }
            return true;
        }
    }
    
    return false;
  }

module.exports = { 
    getObjCar,
    addCar,
    deleteCarByNumber,
    editCar
 };
