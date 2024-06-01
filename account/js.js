// 1. Собрать в перемнные 3 селекта
// 2. Написать функцию, которая в качестве параметра принимает селект и внутри себя наполняет его option: запустить цикл на нужное количество повторений, внутри его создавать тег option и вставлять в него содержимое и добавлять в Select.

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const selectDay = document.querySelector('.day');
const selectMonth = document.querySelector('.month')
const selectYears = document.querySelector('.year');

months.forEach(item => {
    const option = document.createElement('option');
    option.innerText = item;
    selectMonth.append(option);
})




function createOptions (select, start, end){
    for(i = start; i <= end; i++){
        const option = document.createElement('option');
        option.innerText = i;
        select.append(option);
    }
}

createOptions(selectDay, 0, 31);
createOptions(selectYears, 1970, 2010);


