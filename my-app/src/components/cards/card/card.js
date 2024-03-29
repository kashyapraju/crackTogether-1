import Card from 'react-bootstrap/Card';
import "./card.css"

//src={user.gender==="male"
// ?"https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-44.jpg?size=338&ext=jpg&ga=GA1.2.144716372.1657201863"
// :"https://img.freepik.com/premium-psd/3d-female-cartoon-character-avatar-isolated-3d-rendering_235528-956.jpg?size=338&ext=jpg&ga=GA1.2.144716372.1657201863"}/>
function Student({user}) {
  const handleCard=()=>{
    console.log(user.username);
  }
  return (
    <Card  onClick={handleCard}
     className='card-main' style={{ width: '18rem',cursor:'pointer',maxHeight:'16rem',overflow:'hidden',
    scrollbarWidth:'0px',marginTop:'5rem'}}>
      <Card.Img variant="top" className="std-img" src={user.file?user.file:
      (user.gender==="male"
?"https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-44.jpg?size=338&ext=jpg&ga=GA1.2.144716372.1657201863"
:"https://img.freepik.com/premium-psd/3d-female-cartoon-character-avatar-isolated-3d-rendering_235528-956.jpg?size=338&ext=jpg&ga=GA1.2.144716372.1657201863")
}/>
      <Card.Body>
        <Card.Title style={{marginLeft:'5rem'}}>{user.username}</Card.Title>
        <Card.Text>
          {user.about?user.about:"hey nerds! i'm intense focused,contact me if you wanna make me your academic partner"}
         </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Student;