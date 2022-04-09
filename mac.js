let eightGBbtn = document.getElementById('eight-GB')
eightGBbtn.addEventListener('click', function () {
    document.getElementById('extra-memory-cost').innerText = 100
    document.getElementById('total-price').innerText = parseInt(document.getElementById('extra-memory-cost').innerText) + parseInt(document.getElementById('base-price').innerText) + parseInt(document.getElementById('extra-storage-cost').innerText) + parseInt(document.getElementById('delivery-charge').innerText)
    // done

})
let sixteenGBbtn = document.getElementById('sixteen-GB')
sixteenGBbtn.addEventListener('click', function () {
    document.getElementById('extra-memory-cost').innerText = 150
    document.getElementById('total-price').innerText = parseInt(document.getElementById('extra-memory-cost').innerText) + parseInt(document.getElementById('base-price').innerText) + parseInt(document.getElementById('extra-storage-cost').innerText) + parseInt(document.getElementById('delivery-charge').innerText)
    // done
})

let ssdOneBtn = document.getElementById('ssd-one')
ssdOneBtn.addEventListener('click', function () {
    document.getElementById('extra-storage-cost').innerText = 200
    document.getElementById('total-price').innerText = parseInt(document.getElementById('extra-memory-cost').innerText) + parseInt(document.getElementById('base-price').innerText) + parseInt(document.getElementById('extra-storage-cost').innerText) + parseInt(document.getElementById('delivery-charge').innerText)

})
let ssdTwoBtn = document.getElementById('ssd-two')
ssdTwoBtn.addEventListener('click', function () {
    document.getElementById('extra-storage-cost').innerText = 400
    document.getElementById('total-price').innerText = parseInt(document.getElementById('extra-memory-cost').innerText) + parseInt(document.getElementById('base-price').innerText) + parseInt(document.getElementById('extra-storage-cost').innerText) + parseInt(document.getElementById('delivery-charge').innerText)
})
let ssdThreeBtn = document.getElementById('ssd-three')
ssdThreeBtn.addEventListener('click', function () {
    document.getElementById('extra-storage-cost').innerText = 600
    document.getElementById('total-price').innerText = parseInt(document.getElementById('extra-memory-cost').innerText) + parseInt(document.getElementById('base-price').innerText) + parseInt(document.getElementById('extra-storage-cost').innerText) + parseInt(document.getElementById('delivery-charge').innerText)
})

let nearShopPlace = document.getElementById('nearShop')
nearShopPlace.addEventListener('click', function () {
    document.getElementById('delivery-charge').innerText = 20
    document.getElementById('total-price').innerText = parseInt(document.getElementById('extra-memory-cost').innerText) + parseInt(document.getElementById('base-price').innerText) + parseInt(document.getElementById('extra-storage-cost').innerText) + parseInt(document.getElementById('delivery-charge').innerText)
})
let notnearShopPlace = document.getElementById('notNearShop')
notnearShopPlace.addEventListener('click', function () {
    document.getElementById('delivery-charge').innerText = 30
    document.getElementById('total-price').innerText = parseInt(document.getElementById('extra-memory-cost').innerText) + parseInt(document.getElementById('base-price').innerText) + parseInt(document.getElementById('extra-storage-cost').innerText) + parseInt(document.getElementById('delivery-charge').innerText)
})
document.getElementById('apply-btn').addEventListener('click', function () {
    let promoCodeVal = document.getElementById('promo-code').value
    if (promoCodeVal == 'rumman') {
        document.getElementById('apply-btn').setAttribute('disabled', true)
        document.getElementById('promo-code').value = ''
        let discountVal = (parseInt(document.getElementById('total-price').innerText) * .1)
        document.getElementById('finalshow').innerText = (parseInt(document.getElementById('total-price').innerText)) - discountVal
    }
})