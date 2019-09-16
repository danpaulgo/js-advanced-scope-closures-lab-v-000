function produceDrivingRange(blockRange){
	return function(start, end){
		const startInt = parseInt(start, 10)
		const endInt = parseInt(end, 10)
		const distance = Math.abs(startInt - endInt)
		if(distance < blockRange){
			return `within range by ${blockRange - distance}`
		}else {
			return `${distance - blockRange} blocks out of range` 
		}
	}
}

function produceTipCalculator(percent){
	return function(amount){
		return amount * percent
	}
}

function createDriver(){
	let driverId = 0
	return class{
		constructor(name){
			this.name = name
			this.id = ++driverId
		}
	} 
}