const Filter_Input = document.querySelector('#Filter_Input');
const Selector = document.querySelector('#Selector')

let data = [
{   'id': 1,
    'name': 'One'
},
{   'id': 111,
    'name': 'One'
},
{   'id': 2,
    'name': 'Twho'
},
{   'id': 1,
    'name': 'One'
},
{   'id': 2,
    'name': 'Twho'
},
{   'id': 1,
    'name': 'One'
},
{   'id': 2,
    'name': 'Twho'
},
{   'id': 2,
    'name': 'Twho'
},
{   'id': 1,
    'name': 'One'
},
{   'id': 1,
    'name': 'One'
},
{   'id': 3,
    'name': 'Three'
},
{   'id': 3,
    'name': 'Three'
},
{   'id': 5,
    'name': 'Five'
},
{   'id': 5,
    'name': 'Five'
},
{   'id': 3,
    'name': 'Three'
},
{   'id': 1,
    'name': 'One'
},
{   'id': 4,
    'name': 'Four'
},
{   'id': 41,
    'name': 'West Bengal'
},
]

// CREATING DATA LIST WITH-OUT FILTER
const data_list = (getData)=>{
    Selector.innerHTML = ``;
    for (let i=0; i<getData.length; i++){
        let node = document.createElement("li");
        node.innerText = `${getData[i].name}`;
        Selector.appendChild(node);
    }
}
// CREATING DATA LIST WITH FILTER
const filter_list = (texts)=>{
    Selector.innerHTML = ``;
    let newData = []
    for (let i=0; i<data.length; i++){
        if (data[i].name.toLowerCase().indexOf(texts.toLowerCase()) > -1){
            newData.push({'id': data[i].id, 'name': data[i].name})
        }
        else if (data[i].name.toLowerCase().startsWith(texts.toLowerCase())){
            newData.push({'id': data[i].id, 'name': data[i].name})
        }
        else if (data[i].id.toString().startsWith(texts)){
            newData.push({'id': data[i].id, 'name': data[i].name})
        }
        else{
            Selector.innerText = `No Result Found!`;
        }
    }
    data_list(newData);
}

// LIST ACTION [INSERT VALUE INSIDE INPUT FILD]
Selector.addEventListener('click', (e)=>{
    Filter_Input.value = e.target.innerText;
    Selector.innerHTML = ``;
    console.warn(e.target.innerText)
})

// CHECK CHANGE VALUE INPUT
Filter_Input.addEventListener('input', ()=>{
    let input_value = Filter_Input.value;
    if (input_value.length==0){
        data_list(data);
    }
    else if (input_value.length>=1){
        filter_list(input_value);
    }
})

// // INITIALIZE WINDOW
// window.addEventListener('load', ()=>{
//     data_list(data);
// })


