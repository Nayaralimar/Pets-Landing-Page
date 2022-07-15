const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    colorText: getStyle(html, "--color-text"),
    colorSubtext: getStyle(html, "--color-subtext"),
    bgCard: getStyle(html, "--bg-card"),
    bgPanel: getStyle(html, "--bg-panel"),
    bgToggle :getStyle(html, "--bg-toggle"),
    menuMobile :getStyle(html, "--menu-mobile"),
}

const darkMode = {
    bg: "#333333",
    colorText: "#FFFFFF",
    colorSubtext: "#808080",
    bgCard: "#696969",
    bgPanel: "#000000",
    bgToggle: "#C0C0C0",
    menuMobile: "#696969",
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})