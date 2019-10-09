// alert("Yo, are you ready to learn your elapsed time pace?")


// get elapsed time
var elapsedTimeLabel = document.querySelector('[data-glossary-term="definition-elapsed-time"]')
var elapsedTime = elapsedTimeLabel.parentElement.nextElementSibling.getElementsByTagName("strong")[0].textContent
console.log(elapsedTime)

// get distance
var distanceInfo = document.getElementsByClassName('inline-stats')[0].firstElementChild
var distanceUnit = distanceInfo.getElementsByTagName('strong')[0].textContent
var distance = distanceUnit.slice(0, -2)
var unit = distanceUnit.slice(-2)
console.log(distance, unit)

// calculate elapsed pace

// add element to display elapsed pace with unit
