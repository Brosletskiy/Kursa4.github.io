const RaitingItemList1 = document.querySelectorAll('.star-1');
const raitArray_1 = Array.prototype.slice.call(RaitingItemList1);

const RaitingItemList2 = document.querySelectorAll('.star-2');
const raitArray_2 = Array.prototype.slice.call(RaitingItemList2);

raitArray_1.forEach(item =>
    item.addEventListener('click', () =>
        item.parentNode.dataset.totalValue = item.dataset.itemValue
    )
);

raitArray_2.forEach(item =>
    item.addEventListener('click', () =>
        item.parentNode.dataset.totalValue = item.dataset.itemValue
    )
);