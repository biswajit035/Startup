/* eslint-disable react/prop-types */
import investment from "../../assets/service/investment.png";

const ServiceCard = ({title,content}) => {
  return (
    <div className="serviceCard">
        <div className="icon">
          <img src={investment} alt="" />
          </div>
          <h2>
          {title}
          </h2>
          <p>
          {content}
          </p>
        </div>
  );
};

export default ServiceCard;
