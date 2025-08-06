import React from "react";
import "./RecommendationCard.scss";

export default function RecommendationCard({ recommendation, isDark }) {
  return (
     <div className="container">
	 
    <div className={isDark ? "recommendation-card dark-mode" : "recommendation-card"}>
      <h3 className={isDark ? "small-dark recommendation-name" : "recommendation-name"}>
        <a
          href={recommendation.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {recommendation.name}
        </a>
      </h3>
	  <p className={isDark ? "small-dark recommendation-position" : "recommendation-position"}>{recommendation.position}</p>
      <p className={isDark ? "small-dark recommendation-message" : "recommendation-message"}>"{recommendation.message}"</p>
	    </div>
    </div>
  );
}

