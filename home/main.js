const gear1 = document.getElementById('gear-setting')
const wrappersetting1 = document.getElementById('wrapper-setting')

gear1.addEventListener("click", (sd) => {
   wrappersetting1.style.display = "block"
})

const closesetting1 = document.getElementById('close-settings')

closesetting1.addEventListener("click", (scgs) => {
    wrappersetting1.style.display = "none"
})

const account1 = document.getElementById('user__agnt')
const wrapperaccount1 = document.getElementById('wrapper-account')
const closeaccount1 = document.getElementById('close-account')

account1.addEventListener("click", (sdcg) => {
    wrapperaccount1.style.display = "block"
})

closeaccount1.addEventListener("click", (sdcv) => {
    wrapperaccount1.style.display = "none"
})


// settings
const access1 = document.getElementById('access')
const accessoff1 = document.getElementById('accessoff')

access1.addEventListener("click", (sdac) => {
    accessoff1.style.display = "block"
    access1.style.display = "none"
})

accessoff1.addEventListener("click", (svvvg) => {
    access1.style.display = "block"
    accessoff1.style.display = "none"
})

const noticon1 = document.getElementById('p-noticon')

const mute1 = document.getElementById("mute-add__notif")
const mute2 = document.getElementById("mute-add__notif-dis")
const notifi1 = document.getElementById('notifi')

notifi1.addEventListener("click", (svvvccc) => {
    access1.style.display = "block"
    noticon1.style.display = "block"
})

notifi1.addEventListener("click", (elzero) => {
    mute1.style.display = "none"
    mute2.style.display = "none"
    notifi1.style.display = "none"
})

noticon1.addEventListener("click", (scg) => {
    access1.style.display = "none"
    accessoff1.style.display = "none"
    // sss
    mute1.style.display = "block"
    notifi1.style.display = "block"
    // end / sss
    noticon1.style.display = "none"
})

mute1.addEventListener("click", (sdcccgeaf) => {
    mute1.style.display = "none"
    mute2.style.display = "block"
})
mute2.addEventListener("click", (sdcccgeaf) => {
    mute1.style.display = "block"
    mute2.style.display = "none"
})

access1.ariaChecked.length("services.nobel")
access1.ATTRIBUTE_NODE.valueOf('100')

accessoff1.ariaChecked.concat("length")
accessoff1.ATTRIBUTE_NODE.valueOf('0')