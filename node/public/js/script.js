let main = document.querySelector(".main");

function createBlock(inBlock, classL, innerText = "") {
    let el = document.createElement(`div`);
    el.classList.add(`${classL}`);
    el.innerText = `${innerText}`;
    inBlock.append(el);
}

async function getAllCar() {
      main.innerHTML = '';
    const response = await fetch(`/api/catalog/get/allCar`, {});
    if (response.ok) {
        const responseObj = await response.json();
          renderCar(responseObj);
        return;
    }
    alert("Error");
}

function renderCar(car) {
    if (car) {
        for (let k = 0; k < car.length; k++) {
            createBlock(main, "in-main-car");
        }
        let inMainCar = document.querySelectorAll(".in-main-car");
        for (let i = 0; i < inMainCar.length; i++) {
            createBlock(inMainCar[i], "block", `Марка: ${car[i].mark}`);
            createBlock(inMainCar[i], "block", `Номер: ${car[i].number}`);
            createBlock(inMainCar[i], "block", `Цвет: ${car[i].color}`);
            createBlock(inMainCar[i], "block", `Вес: ${car[i].weight}`);
            createBlock(inMainCar[i], "block", `Год выпуска: ${car[i].age}`);
            createBlock(inMainCar[i], "block", `Тип двигателя: ${car[i].type}`);
            createBlock(inMainCar[i], "block", `Кол-во наруш: ${car[i].offense}`);
            createBlock(inMainCar[i], "block", `Кол-во шраф: ${car[i].fine}`);
        }
    } else {
        alert("Ошибка");
    }
}

        async function addCar() {
          const mark = document.querySelector("#mark").value;
          const number = document.querySelector("#number").value;
          const color = document.querySelector("#color").value;
          const weight = document.querySelector("#weight").value;
          const age = document.querySelector("#age").value; 
          const type = document.querySelector("#type").value;
          const offense = document.querySelector("#offense").value;
          const fine = document.querySelector("#fine").value;
          if(type == 'undefined'){
            alert('Выберите тип');
          }
          else{
            const data = {
              mark: mark,
              number: number,
              color: color,
              weight: weight,
              age: age,
              type: type,
              offense: offense,
              fine: fine,
            }; 
            
            let sendData = JSON.stringify(data);
            
            const response = await fetch("/api/catalog/addCar", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: sendData,
            });
            console.log(response);
            if (response.ok) {
                alert('добавлено');
              return;
            }
            alert(`Ошибка`);
          }
         
        }
        async function setCar(){
          main.innerHTML = ''
          const mark = document.querySelector("#mark").value;
          const number = document.querySelector("#number").value;
          const color = document.querySelector("#color").value;
          const weight = document.querySelector("#weight").value;
          const age = document.querySelector("#age").value; 
          const type = document.querySelector("#type").value;
          const offense = document.querySelector("#offense").value;
          const fine = document.querySelector("#fine").value;
          const data = {
            mark: mark,
            number: number,
            color: color,
            weight: weight,
            age: age,
            type: type,
            offense: offense,
            fine: fine,
          }
        const response = await fetch(`/api/catalog/get/allCar`, {});
        if (response.ok) {
          const responseObj = await response.json();
          let filteredCars = filterCars(responseObj, filterEmpty(data));
          renderCar(filteredCars);
          return;
        }
         
          function filterCars(array, filterObj) {
            return array.filter(car => {
                for (let key in filterObj) {
                    if (car[key] !== filterObj[key]) {
                        return false;
                    }
                }
                return true;
            });
        }
      }

      function filterEmpty(obj) {
        let newObj = {};
        for (let key in obj) {
            if (obj[key] !== '' && obj[key] !== 'undefined' && obj[key] !== NaN) {
              newObj[key] = obj[key];
            }
        }
        return newObj;
    }

      async function delCar() {
        const number = document.querySelector("#number").value;
        const response = await fetch(`/api/catalog/car/delete?number=${number}`, {
          method: "DELETE",
        });
        console.log(response);
        if (response.ok) {

            alert('Удалено');
            console.log('11111');
          return;
        }
        
          alert(`Error`);
      }

      async function putCar() {
        const putNumber = document.querySelector("#putNumber").value;
        const violations = document.querySelector('#putSel').value;
        const of_fi = document.querySelector('#of-fi').value;
        const color = document.querySelector('#putColor').value;
        const data = {
          number: putNumber,
          violations: violations,
          of_fi: of_fi,
          color: color
        };

        const response = await fetch("/api/catalog/car/edit", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      
        if (response.ok) {
          alert('Измененно');
          return;
        }
        alert(`Error`);
      }
      

  