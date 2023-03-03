import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, design }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href="https://harnu-food-recipe.netlify.app/">
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <i>{design}</i>
          </div>
        </a>
      </div>
    </Col>
  );
};
