// Adds live time to schedule
var currentDay = moment().format('MMMM Do YYYY');
$('#currentDay').text(currentDay);

// not working
var allBlocks = {
    block1: $('#9-am'),
    block2: $('#10-am'),
    block3: $('#11-am'),
    block4: $('#12-pm'),
    block5: $('#1-pm'),
    block6: $('#2-pm'),
    block7: $('#3-pm'),
    block8: $('#4-pm'),
    block9: $('#5-pm'),
}

console.log(allBLocks);

allBLocks.block1.innerHTML = moment('9AM', 'HA');
allBlocks.block2.innerHTML = moment('10AM', 'HA');
allBLocks.block3.innerHTML = moment('11AM', 'HA');
allBLocks.block4.innerHTML = moment('12PM', 'HA');
allBLocks.block5.innerHTML = moment('13PM', 'HA');
allBLocks.block6.innerHTML = moment('14PM', 'HA');
allBLocks.block7.innerHTML = moment('15PM', 'HA');
allBLocks.block8.innerHTML = moment('16PM', 'HA');
allBLocks.block9.innerHTML = moment('17PM', 'HA');

for (var i = 0; i < allBlocks.length; i++) {
    if (moment().isSame(allBlocks.innerHTML)) {
        $(textarea[i]).addClass('present');
    } else if (moment().isBefore(allBlocks.innerHTML)) {
        $(textarea[i]).addClass('future');
    } else if (moment().isAfter(allBlocks.innerHTML)) {
        $(textarea[i]).addClass('past');
    }
}



