let Selection_Form = document.querySelector('#Selection_Form');
let select_fild = document.querySelector('#Selection');

let data = [
    {
        id: 1,
        'name': "Some thing"
    },
    {
        'id': 1,
        'name': 'donut'
    },
    {
        'id': 2,
        'name': 'Cake'
    },
    {
        'id': 1,
        'name': 'Chocolate with Sprinkles'
    },
    {
        'id': 3,
        'name': 'Maple'
    },
    {
        'id': 4,
        'name': 'Some thing'
    },
    {
        'id': 2,
        'name': 'Regular'
    },
    {
        'id': 1,
        'name': 'Blueberry'
    }
]


// OPTIONAL
let Input_fild = Selection_Form.firstElementChild
Input_fild.addEventListener('click', ()=>{
    Input_fild.style.borderRadius = "5px 5px 0 0";
})

// BASIC FILTER DATA BY USING DATA LIST
window.addEventListener('load', () => {
    console.warn(data.length)
    for (let i =0; i< data.length; i++){
        console.warn()
        let node = document.createElement("option");
        node.value = `"${data[i].name} ${data[i].id}"`;
        node.innerText = `${data[i].name}`
        select_fild.appendChild(node);
    }
});