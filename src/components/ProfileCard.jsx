import React from "react";
import styled from "styled-components";

const ProfileCard = ({ user, darkMode }) => {
  return (
    <StyledWrapper>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={user.image}
              alt={user.name}
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: "1rem 1rem 0 0",
              }}
            />
            <h2 className="title" style={{ marginTop: "1rem" }}>
              {user.name}
            </h2>
            <p
              style={{
                color: darkMode ? "#e0e0e0" : "#ff7f50",
                margin: 0,
              }}
            >
              {user.role}
            </p>
          </div>
          <div className="flip-card-back">
            <p className="title">About</p>
            <p style={{ margin: "0 1rem" }}>{user.description}</p>
            <button
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1.2rem",
                borderRadius: "0.5rem",
                background: "white",
                color: "coral",
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    width: 100%;
    min-width: 190px;
    max-width: 260px;
    height: 254px;
    perspective: 1000px;
    font-family: sans-serif;
    margin: auto;
  }

  .title {
    font-size: 1.2em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid coral;
    border-radius: 1rem;
    background: white;
  }

  .flip-card-front {
    background: linear-gradient(
      120deg,
      bisque 60%,
      rgb(255, 231, 222) 88%,
      rgb(255, 211, 195) 40%,
      rgba(255, 127, 80, 0.603) 48%
    );
    color: coral;
  }

  .flip-card-back {
    background: linear-gradient(
      120deg,
      rgb(255, 174, 145) 30%,
      coral 88%,
      bisque 40%,
      rgb(255, 185, 160) 78%
    );
    color: white;
    transform: rotateY(180deg);
  }
`;

export default ProfileCard;
