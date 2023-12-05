// spiders.js

function createSpider() {
    const spider = document.createElement('div');
    spider.className = 'spider';
    document.body.appendChild(spider);
}

function addSpiders(count) {
    for (let i = 0; i < count; i++) {
        createSpider();
    }
}

// Add spiders to the background
addSpiders(10); // You can adjust the number of spiders as needed

console.log('Spiders added successfully!');
