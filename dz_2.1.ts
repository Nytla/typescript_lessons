// REQUEST
const request = {
	"topicId": 5,
	"status": "published"
};

//Set enam for status
const StatusCode = {
    published: "published",
    draft: "draft",
    deleted: "deleted"
};
type StatusCode = typeof StatusCode[keyof typeof StatusCode];

console.log(StatusCode.published);

// Function to simulate fetching FAQs based on the request
function getFaqs(req: { 
    topicId: number; 
    status: StatusCode; 
    url?: string; 
    id?: number    
}): {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: StatusCode;
}[] {
	
        // ReSPONSE
        const responce = [
            {
                "question": "Как осуществляется доставка?",
                "answer": "быстро!",
                "tags": [
                    "popular",
                    "new"
                ],
                "likes": 3,
                "status": "published"
            }
        ];

        console.log(`Fetching FAQs for Topic ID: ${req.topicId} with Status: ${req.status}`);

    	return responce;
};

// Initial simple request
console.log(getFaqs(request));