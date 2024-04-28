import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({ github, facebook, linkedin }) => {
  return (
    <>
      <button>{github && <FontAwesomeIcon icon={faGithub} size="3x" />}</button>
      <button>
        {facebook && <FontAwesomeIcon icon={faFacebook} size="3x" />}
      </button>
      <button>
        {linkedin && <FontAwesomeIcon icon={faLinkedin} size="3x" />}
      </button>
    </>
  );
};

export default SocialButton;
