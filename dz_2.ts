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
type StatusCode = typeof StatusCode[keyof typeof StatusCode];

// Function to simulate fetching FAQs based on the request
async function getFaqs(req: { 
    id: number, 
    url: string, 
}): Promise<{
    userId: number, 
    id: number, 
    title: string, 
    body: string, 
    status?: StatusCode }[]> {
	const res = await fetch(`${req.url}${req.id}`, {
		method: 'GET',
		// method: 'POST',
		// body: JSON.stringify(req)
	});

	const data = await res.json();
	return data;
};

// Initial simple request
getFaqs(request).then(faqs => {
    console.log('POST: ', faqs);
}).catch(error => {
    console.error('Error fetching FAQs:', error);
});