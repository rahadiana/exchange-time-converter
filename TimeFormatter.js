function GeTime(t) {
    // Timestamp in milliseconds
    var timestamp = t;

    // Create a new Date object
    var date = new Date(timestamp);

    // Extract the various components of the date and time
    var year = date.getFullYear().toString();
    var month = date.getMonth() + 1; // Months are zero-based, so add 1
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // Format the date and time as a string
    // var formattedDateTime = year + '-' + addZero(month) + '-' + addZero(day) + ' ' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);

    // Output the result

    return {Y:year,M:addZero(month),D:addZero(day),HH:addZero(hours),MM:addZero(minutes),SS:addZero(seconds)}; //formattedDateTime;
}

// Helper function to add leading zeros
function addZero(number) {
    return number < 10
        ? '0' + number
        : number.toString();
}

module.exports =  {GeTime};