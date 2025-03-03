import "./Card.css";
// import profile from '/assets/profile.png'
export default function Cards() {
  const Data = [
    {
      id: 1,
      name: "Gladis Lemon",
      title: "Head of SEO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet.",
      image:'/profile.png'
    },
    {
      id: 2,
      name: "Nikhi la",
      title: "Head of SEO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae incidunt.",
      image:'/profile.png'

    },
    {
      id: 3,
      name: "Gladis Lemon",
      title: "Head of SEO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet.",
      image:'/profile.png'
    },
    {
      id: 4,
      name: "Nikhi la",
      title: "Head of SEO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae incidunt.",
      image:'/profile.png'
    },
    {
      id: 5,
      name: "Gladis Lemon",
      title: "Head of SEO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet.",
      image:'/profile.png'
    }
  ];

  return (
    <section className="Cards-section">
      <div className="disp-grid">
        {Data.map((item) => (
          <div className="card" key={item.id}>
            
            
            <div className="author">
              <img src={item.image} alt={item.name} className="profile-img" />
              <h4>{item.name}</h4>
              <span>{item.title}</span>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
