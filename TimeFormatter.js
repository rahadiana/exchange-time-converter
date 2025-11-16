function GeTime(t) {
    // Timestamp in milliseconds
    var timestamp = t;

    // Create a new Date object
    var date = new Date(timestamp);

    // Extract the various components of the date and time in UTC as numbers
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1; // Months are zero-based, so add 1
    var day = date.getUTCDate();
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();

    // Output the result as numbers
    return {Y: year, M: month, D: day, HH: hours, MM: minutes, SS: seconds};
}

// Helper function to add leading zeros (no longer needed, but kept for compatibility if needed)
function addZero(number) {
    return number < 10
        ? '0' + number
        : number.toString();
}

module.exports =  {GeTime};