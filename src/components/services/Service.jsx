import ServiceCard from "./ServiceCard";

const Service = () => {
  const data = [
    {
      title: "Financial Planning",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Investments Management",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Business Loan",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Taxes Consulting",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Insurance Consulting",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Retirement Planning",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Risk Management",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      title: "Technology Consulting",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
  ];
  return (
    <div className="service">
      <div className="top">
        <h4 className="heading">ABOUT UNION CORPORATION</h4>
        <h1 className="title">
          More than 40M+ Trusted Our Financial & Conusultation Institution
        </h1>
      </div>

      {/* card */}
      <div className="card">
        {data.map((item, idx) => (
          <ServiceCard title={item.title} content={item.content} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Service;
