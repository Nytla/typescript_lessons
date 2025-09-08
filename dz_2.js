"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Set request conts
const request = {
    id: 7,
    url: 'https://jsonplaceholder.typicode.com/posts/',
};
//Set enam for status
const StatusCode = {
    published: "published",
    draft: "draft",
    deleted: "deleted"
};
// Function to simulate fetching FAQs based on the request
async function getFaqs(req) {
    const res = await fetch(`${req.url}${req.id}`, {
        method: 'GET',
        // method: 'POST',
        // body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}
;
// Initial simple request
getFaqs(request).then(faqs => {
    console.log('POST: ', faqs);
}).catch(error => {
    console.error('Error fetching FAQs:', error);
});
//# sourceMappingURL=dz_2.js.map