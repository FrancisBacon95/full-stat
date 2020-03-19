import axios from 'axios';
function axiosTset() {
    axios.get('http://localhost:8080/api/posts').then(function(response) {
        //되는 것 확인함 : console.log(response.data);
        return response.data;
    })
}
const input_calender={
    '1월':1,
    '2월':2,
    '3월':3,
    '4월':4,
    '5월':5,
    '6월':6,
    '7월':7,
    '8월':8,
    '9월':0,
    '10월':0,
    '11월':0,
    '12월':0,
}
function CS(og_data,input_calender){
    for(var index in og_data){
        var calender= input_calender 
        if (og_data[index].month === '1'){
            calender['1월']+=1;
        } else if (og_data[index].month === '2'){
            calender['2월']+=1;
        } else if (og_data[index].month === '3'){
            calender['3월']+=1;
        } else if (og_data[index].month === '4'){
            calender['4월']+=1;
        } else if (og_data[index].month === '5'){
            calender['5월']+=1;
        } else if (og_data[index].month === '6'){
            calender['6월']+=1;
        } else if (og_data[index].month === '7'){
            calender['7월']+=1;
        } else if (og_data[index].month === '8'){
            calender['8월']+=1;
        } else if (og_data[index].month === '9'){
            calender['9월']+=1;
        } else if (og_data[index].month === '10'){
            calender['10월']+=1;
        } else if (og_data[index].month === '11'){
            calender['11월']+=1;
        } else {
            calender['12월']+=1;
        } 
    }
    var asdf=calender
    return asdf, console.log(asdf);
}

export { CS, axiosTset, input_calender }




