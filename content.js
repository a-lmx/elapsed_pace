// get elapsed time
var elapsedTimeLabel = document.querySelector('[data-glossary-term="definition-elapsed-time"]')
var elapsedTime = elapsedTimeLabel.parentElement.nextElementSibling.getElementsByTagName("strong")[0].textContent
console.log('elapsed time:', elapsedTime)
// TODO: extra string parsing to handle sub-minute activities?

// get distance
var inlineStats = document.getElementsByClassName('inline-stats')[0]
var distanceInfo = inlineStats.firstElementChild
var distanceUnit = distanceInfo.getElementsByTagName('strong')[0].textContent
var distance = distanceUnit.slice(0, -2)
var unit = distanceUnit.slice(-2)
console.log(distance, unit)

// calculate elapsed pace
var splitTime = elapsedTime.split(':')
if (splitTime.length == 3) {
    var elapsedSeconds = (splitTime[0] * 3600) + (splitTime[1] * 60) + parseInt(splitTime[2])
} else if (splitTime.length == 2) {
    var elapsedSeconds = (splitTime[0] * 60) + parseInt(splitTime[1])
}
// TODO: handle activities under 1 min in length

console.log('elapsed seconds:', elapsedSeconds)

var elapsedPaceSeconds = elapsedSeconds / distance
console.log('elapsed seconds per mile:', elapsedPaceSeconds)

var paceMinutes = Math.floor(elapsedPaceSeconds / 60)
var paceSeconds = Math.ceil(elapsedPaceSeconds - (paceMinutes * 60))
var elapsedPaceStr = `${paceMinutes}:${paceSeconds.toString().padStart(2, '0')}/${unit}`
console.log('elapsed pace:', elapsedPaceStr)

// add element to display elapsed pace with unit
var paceLabel = document.querySelectorAll('[data-glossary-term="definition-moving-time"]')[1].textContent
var pacePlusElapsedPace = `${paceLabel} (${elapsedPaceStr})`
document.querySelectorAll('[data-glossary-term="definition-moving-time"]')[1].textContent = pacePlusElapsedPace
