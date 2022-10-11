const convert = (input) => {
    let headersAndLink = input
    
    // eslint-disable-next-line
        .replace(/\[([^\]]+)\]\(([^\)]+)\)/gim, '<a href="$2">$1</a>')
        .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
        .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
        .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')

    let arr = headersAndLink.split('\n\n')

    let unformattedText = arr.map((line) => {
        if(line[0] !== '<') {
            return `<p>${line}</p>`
        }
        return line
    })

    return unformattedText.join("\n\n")
}


// module.exports so i can run as cmd line with node and still import into other files
module.exports = { convert }

