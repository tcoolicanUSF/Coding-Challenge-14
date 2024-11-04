// Task 2: Fetch Tickets Using Async/Await and Handle Errors
async function getData(UnresolvedTickets) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${UnresolvedTickets}`);
        
        if (!response.ok) {
            throw new Error('Not found');
        }

        const product = await response.json();
        console.log(`Unresolved Ticket: ${unresolvedtickets}found`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
// Task 3: Fetch and display a list of tickets
const ticketDiv = document.getElementById("ticket-display");
tickets.forEach(ticket=> {
    const ticketElement = document.createElement("div");
    ticketElement.classList.add("ticket")

    const ticketId = document.createElement("h3")
    ticketId.textContent = `Ticket ID: ${ticket.id}`;

    const customerName = document.createElement("p")
    customerName.textContent = `Customer Name: user ${ticket.userId}`

    const issueDescription = document.createElement("p")
    issueDescription.textContent = `Error Description: ${ticket.title}`

    const details = document.createElement("p")
    details.textContent = `Ticket Details: ${ticket.body}`

})

// Task 4: Function to finalize a transaction
function finalizeTransaction({ items = [] }) {
    console.log("Finalizing transaction with items:", items);
}
finalizeTransaction({ items: [] });