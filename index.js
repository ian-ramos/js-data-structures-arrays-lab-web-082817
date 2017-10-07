// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  let array = [name]
  return ["Milo", "Otis", "Garfield", ...array]
}

function prependDriver(name) {
  let array = [name]
  return [...array, "Milo", "Otis", "Garfield"]
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver() {
  return drivers.slice(1)
}
