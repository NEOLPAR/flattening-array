const flat = ( inputArr ) => {
    if ( !Array.isArray(inputArr) ) {
        return inputArr
    }

    let outputArr = []

    for (const inputItem of inputArr) {
        outputArr = outputArr.concat(flat(inputItem))
    }

    return outputArr
}

module.exports.flat = flat
