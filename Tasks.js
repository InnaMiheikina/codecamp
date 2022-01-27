// Setup
function phoneticLookup(val) {
    function checkObj(obj, checkProp) {
        if(obj.hasOwnProperty(checkProp)){
            return obj[checkProp];
        } else if (obj.hasOwnProperty(checkProp) !== true) {
            return "Not Found";
        } else {
            // Only change code below this line
            return "Change Me!";
        }
        // Only change code above this line
    }