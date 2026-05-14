const fs = require('fs');
const html = fs.readFileSync('non_ferrous.html', 'utf-8');

const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
const headingRegex = /<h4[^>]*>([^<]+)<\/h4>/gi;

let match;
const tags = [];
const allTagsRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>|<h4[^>]*>([^<]+)<\/h4>/gi;

while ((match = allTagsRegex.exec(html)) !== null) {
    if (match[1]) {
        tags.push({ type: 'img', val: match[1] });
    } else if (match[2]) {
        tags.push({ type: 'h4', val: match[2].trim() });
    }
}

const products = [];
let capture = false;
let currentImg = null;

for (const tag of tags) {
    if (tag.type === 'h4' && tag.val === 'ALUMINIUM') {
        capture = true;
        continue;
    }
    if (tag.type === 'h4' && tag.val === 'BRASS') {
        capture = false;
        break;
    }

    if (capture) {
        if (tag.type === 'img') {
            currentImg = tag.val;
        } else if (tag.type === 'h4' && currentImg) {
            products.push({
                name: tag.val,
                image: currentImg.startsWith('http') ? currentImg : 'https://www.alatrading.com/' + currentImg
            });
            currentImg = null;
        }
    }
}

console.log(JSON.stringify(products, null, 2));
