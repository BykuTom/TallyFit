import "./navigation.css";
import PropTypes from "prop-types";

export default function Navigation({ expand }) {
  return (
    <ul aria-expanded={expand} aria-label="Navigation Links">
      <li>Some Link</li>
      <li>Some Link</li>
      <li>Some Link</li>
    </ul>
  );
}

Navigation.propTypes = {
  expand: PropTypes.bool.isRequired,
};
