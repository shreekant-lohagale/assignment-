import React from "react";
import styled, { keyframes } from "styled-components";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
`;

const ProfileCard = ({ user, darkMode }) => (
  <StyledWrapper darkMode={darkMode}>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="avatar-wrapper">
            <img src={user.image} alt={user.name} className="avatar" />
          </div>
          <h2 className="title">{user.name}</h2>
          <span className="role-badge">{user.role}</span>
        </div>
        <div className="flip-card-back">
          <p className="title">About</p>
          <p className="description">{user.description}</p>
          <div className="socials">
            <a href={`mailto:${user.email}`}>
              <FaEnvelope />
            </a>
            <a href={user.linkedin}>
              <FaLinkedin />
            </a>
            <a href={user.github}>
              <FaGithub />
            </a>
          </div>
          <button className="contact-btn">Contact</button>
        </div>
      </div>
    </div>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  animation: ${fadeIn} 0.8s ease;
  .flip-card {
    background-color: transparent;
    width: 100%;
    min-width: 260px;
    max-width: 380px;
    height: 420px;
    perspective: 1000px;
    font-family: sans-serif;
    margin: auto;
    position: relative;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.18);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 2px solid coral;
    border-radius: 1.5rem;
    background: white;
    z-index: 1;
  }
  .flip-card-front {
    z-index: 2;
  }
  .flip-card-back {
    transform: rotateY(180deg);
    z-index: 3;
  }
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  .avatar-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 1.2rem;
  }
  .avatar {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 4px solid #ff7f50;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    object-fit: cover;
    background: #fff;
  }
  .role-badge {
    display: inline-block;
    margin-top: 0.7rem;
    padding: 0.3em 1em;
    background: #ff7f50;
    color: #fff;
    border-radius: 1em;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  .flip-card-back {
    .description {
      margin: 0 1.5rem 1rem;
    }
    .socials {
      display: flex;
      justify-content: center;
      gap: 1.2rem;
      margin-bottom: 1rem;
    }
    .socials a {
      color: #ff7f50;
      font-size: 1.4em;
      transition: color 0.2s;
    }
    .socials a:hover {
      color: #232526;
    }
    .contact-btn {
      margin-top: 0.5rem;
      padding: 0.8rem 2rem;
      border-radius: 0.7rem;
      background: rgba(255, 255, 255, 0.85);
      color: #ff7f50;
      border: none;
      font-weight: 700;
      font-size: 1.1em;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: background 0.2s, color 0.2s, transform 0.2s;
    }
    .contact-btn:hover {
      background: #ff7f50;
      color: #fff;
      transform: scale(1.05);
    }
  }
  /* Add dark mode styles */
  ${({ darkMode }) =>
    darkMode &&
    `
    .flip-card-front, .flip-card-back {
      background: linear-gradient(120deg, #232526 60%, #414345 88%);
      color: #fff;
      border: 2px solid #ff7f50;
    }
    .role-badge { background: #232526; color: #ff7f50; }
    .contact-btn { background: #232526; color: #ff7f50; }
    .contact-btn:hover { background: #ff7f50; color: #232526; }
  `}
`;

export default ProfileCard;
