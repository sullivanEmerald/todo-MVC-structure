
const item =  document.querySelectorAll('span.not')
const unMark  = document.querySelectorAll('span.completed')
const deleteItem = document.querySelectorAll('.del')


Array.from(item).forEach(element => {
    element.addEventListener('click', markComplete)
})

Array.from(unMark).forEach(element => {
    element.addEventListener('click', unMarkComplete)
})

Array.from(deleteItem).forEach(element => {
    element.addEventListener('click', deleteEvent)
})

async function markComplete(){
    const item = this.parentNode.dataset.id

    try{
        const response = await fetch('/todos/markComplete', {
            method : 'put',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                'markTodo' : item
            })
        })

        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
async function unMarkComplete(){
    const item = this.parentNode.dataset.id

    try{
        const response = await fetch('/todos/unMarkComplete', {
            method: 'put',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                'unMarkTodo' : item
            })
        })
        const data = response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.error(err)
    }
}

async function deleteEvent(){
 const deleteItem = this.parentNode.dataset.id
 
try {
    const response = await fetch('/todos/deleteTodo', {
        method: 'delete',
        headers : {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            'item' : deleteItem,
        })
    })

    const data = response.json()
    console.log(data)
    location.reload()
} catch (error) {
    console.error(error)
}
}