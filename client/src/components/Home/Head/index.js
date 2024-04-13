import "./style.css";
import { Link } from "react-router-dom";
import IEEE_logo from "../../../Assets/IEEE_white 1.png";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MainComponent() {
  return (
    <div className="Main">
      <div>
        <h2 className="logo_text">Advancing Technology for Humanity</h2>
        <img src={IEEE_logo} className="IEEE_logo m-auto" alt="logo" />
      </div>
      <div className="main_content">
        <h2 className="main_text">
          The Professional home for the Engineering and Technology world wide
        </h2>
      </div>

      <Dropdown>
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          className="px-5 py-3 border-2 border-[#223140] bg-transparent rounded-xl font-bold text-white"
          style={{ minWidth: "200px", fontSize: "1.2rem" }}
        >
          Join IEEE
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() =>
              window.open(
                "https://www.ieee.org/membership/join/index.html?utm_source=button_text&utm_medium=lp-membership&utm_campaign=join"
              )
            }
          >
            Join IEEE Now
          </Dropdown.Item>
          <Dropdown.Item onClick={() => window.open("/membership")}>
            IEEE Membership Benefits
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
export default MainComponent;
