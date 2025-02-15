import"./Card.css"
export default function Cards() {
    const Data = [
    {
      id: 1,
      name: "Gladis Lemon",
      title: "Head of SEO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet."
    },
    {
      id: 2,
      name: "Nikhi la",
      title: "Head of SEO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae incidunt."
        },
    {
      id: 3,
      name: "Gladis Lemon",
      title: "Head of SEO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet."
    },
    {
      id: 4,
      name: "Nikhi la",
      title: "Head of SEO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae incidunt."
        },
        {
            id: 5,      
            name: "Gladis Lemon",
            title: "Head of SEO",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet."
        },
    
  ];
  
      return (
    <section className="Cards-section">
      <div className="disp-grid">
        {Data.map((item) => (
          <div className="card" key={item.id}>
            <p>{item.text}</p>
            <div className="author">
              <h4>{item.name}</h4>
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


