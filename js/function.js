
// get input value
function getInputVal (id) {
    const str_val = document.getElementById(id).value
    const val = parseInt(str_val)

    
    if (isNaN(val)) {
        alert('Please provide Correct data')
    }else if ( val < 0 ){
        alert('Please provide Correct Positive number')
    }
     else {
        return val
    }

}
// comma seperated number
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
