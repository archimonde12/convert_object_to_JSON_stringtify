let input = document.getElementById("input")
let submit = document.getElementById("submit")
let result = document.getElementById("result")
let result2 = document.getElementById("result2")

submit.onclick = () => {
    let inputVal = input.value
    console.log(inputVal)
    let splitInput = inputVal.split("\n")
    const keys = splitInput.map(value => value.split("=")[0])
    const values = splitInput.map(
        value => {

            if (Number(value.split("=")[1]) == value.split("=")[1]) {
                return Number(value.split("=")[1])
            } else return value.split("=")[1]
        }
    )

    let object = {}
    for (i = 0; i < keys.length; i++) {
        object[keys[i]] = values[i]
    }
    console.log(object)
    result.value = JSON.stringify(JSON.stringify(object))
    console.log(result)

}

input.onkeyup=()=>{
    console.log("change")
    let inputVal = input.value
    console.log(inputVal)
    let splitInput = inputVal.split("\n")
    const keys = splitInput.map(value => value.split("=")[0])
    const values = splitInput.map(
        value => {

            if (Number(value.split("=")[1]) == value.split("=")[1]) {
                return Number(value.split("=")[1])
            } else return value.split("=")[1]
        }
    )

    let object = {}
    for (i = 0; i < keys.length; i++) {
        object[keys[i]] = values[i]
    }
    console.log(object)
    result.value = JSON.stringify(JSON.stringify(object))
    console.log(result)
}

function copyText() {
    var copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}


