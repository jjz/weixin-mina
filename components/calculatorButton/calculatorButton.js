
function setText(text) {
    this.setData({
        text: text
    })
}
function getText() {
    return this.data.text;
}
module.exports = {
    setText: setText,
    getText: getText
}

