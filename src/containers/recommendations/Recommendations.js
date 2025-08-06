import React, { useContext } from "react";
import "./Recommendations.scss";
import RecommendationCard from "../../components/recommendationCard/RecommendationCard";
import { recommendationSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Recommendations() {
  const { isDark } = useContext(StyleContext);

  if (!recommendationSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="recommendations">
        <div className="recommendation-header">
          <h1 className="recommendation-header-text">{recommendationSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode recommendation-subtitle" : "subTitle recommendation-subtitle"
            }
          >
            {recommendationSection.subtitle}
          </p>
        </div>
        <div className="recommendation-main-div">
          <div className="recommendation-text-div">
            {recommendationSection.recommendations.map((rec, i) => (
              <RecommendationCard
                key={i}
                isDark={isDark}
                recommendation={rec}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
