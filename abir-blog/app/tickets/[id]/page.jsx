import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams(){
  const res = await fetch('http://localhost:4000/tickets')
  const tickets = await res.json();

  return tickets.map((ticket) => ({
      id: ticket.id
  }))
}
async function getTicket(id){
  const res = await fetch('http://localhost:4000/tickets/' + id,{
    next:{
        revalidate: 60
    }
  })
  return res.json()
  if (!res.ok){
    notFound()
  }
}

export default async function TicketDetails({params}){
    const ticket = await getTicket(params.id)

    return(
        <main>
     <div>
        <nav>
            <h2>Tickets Details</h2>
        </nav>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created By {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} Priority
            </div>
        </div>
     </div>  
     </main> 
    )
}