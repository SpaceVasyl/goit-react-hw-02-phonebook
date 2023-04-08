export const Contacts = ({contactFilter, deleteContact}) => {

return (
<>
<ul className="contacts">{contactFilter.map(contact => {
const {name , number, id} = contact;
return (
    <li key={id}><p>{name}: {number}</p><button onClick={()=>deleteContact(id)}>delete</button></li>
)
})}
</ul></>
    )
}