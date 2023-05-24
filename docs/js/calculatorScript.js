let input = document.querySelector('#input')
function insert(num) {
    input.value += num
}
function cleanner() {
    input.value = ''
}
function deleteValue() {
    input.value = input.value.substring(0, input.value.length - 1)
}

function result() {
    let res = document.querySelector('#input').value
    if (res) {
        document.querySelector('#input').value = eval(res)
    }
}