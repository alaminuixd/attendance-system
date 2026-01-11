import Ticket from "./Ticket.js";
console.log(Ticket);

class TicketDB {
  constructor() {
    this.tickets = [];
  }
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
  }
  createBulk(username, price, quantity) {
    const bulkTickets = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      bulkTickets.push(ticket);
    }
    return bulkTickets;
  }
  find() {
    return this.tickets;
  }
  findById(userId) {
    return this.tickets.find((ticket) => ticket.id === userId);
  }
  findByUser(username) {
    return this.tickets.filter((ticket) => ticket.username === username);
  }
  updateTicket(ticketId, updateBody) {
    const ticketToUpdate = this.findById(ticketId);
    ticketToUpdate.username = updateBody.username ?? ticketToUpdate.username;
    ticketToUpdate.price = updateBody.price ?? ticketToUpdate.price;
    return ticketToUpdate;
  }
}

const ticket1 = new TicketDB();

ticket1.create("Al Amin Khan", 10);
ticket1.create("Abrar Syed Khan", 10);
ticket1.create("Arshiya Nur", 10);
ticket1.createBulk("Subrina Amin", 10, 3);
// update tiket
const arshiyaId = ticket1.findByUser("Arshiya Nur")[0].id;
console.log(arshiyaId);

console.log(ticket1.find());

ticket1.updateTicket(arshiyaId, { username: "Arshiya Nur Khan", price: 11 });

console.log(ticket1.find());
