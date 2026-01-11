# Lottery API

## Requirments

- Sell/ Create lottery ticket
- Update lottery ticket
- Delete lottery ticket
- Get all lottery ticket
- Get lottery ticket by Id
- Bulk buy (user can buy multiple tickets at a time)
- Raffle draw

## The Ticket Structure

- Ticket Number
- Buyer Name
- Price
- Timestamp

## Routes

/tickets/sell -> (POST) Create tickets <br/>
/tickets/bulk -> (POST) Create bulk tickets <br/>
/tickets/draw -> (GET) Create bulk tickets <br/>

/tickets -> (GET) get all tickets <br/>

/tickets/t/:ticketId -> (GET) Find a single ticket by ID <br/>
/tickets/t/:ticketId -> (PATCH) Update a single ticket by ID <br/>
/tickets/t/:ticketId -> (DELETE) Delete a single ticket by ID <br/>

/tickets/u/:username -> (GET) Find a single ticket by username <br/>
/tickets/u/:username -> (PATCH) Update a single ticket by username <br/>
/tickets/u/:username -> (DELETE) Delete a single ticket by username <br/>
