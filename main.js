// Task 2: Fetch Tickets Using Async/Await and Handle Errors
async function getData(Unresolved.Tickets) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${Unresolved.Tickets}`);
        
        if (!response.ok) {
            throw new Error('Not found');
        }

        const product = await response.json();
        console.log(`Unresolved Ticket: ${unresolved.tickets}found`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
