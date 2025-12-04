// AOC 2025 Day 1 Part 1

// Variables
let vault = 50
let pass = 0
let input = ["L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82"];

// Functions
function rotate(vault, input) {
  input = input.replace(/R/, '');
  input = input.replace(/L/, '-');
  return vault+Number(input);
}

function calc(vault) {
  if (vault > 99) {
    vault = vault - 100;
  } else if (vault < 0) {
    vault = 100 + vault;
  }
  return vault
}

function score(vault) {
  if ( vault == 0 ) { pass++ }
}

// Main
for (let line in input) {
  //console.log(input[line])
	vault = rotate(vault, input[line])
	//console.log(vault)
	vault = calc(vault)
	//console.log(vault)
	score(vault)
}
console.log("Winner: " + pass)
