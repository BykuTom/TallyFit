import PropTypes from "prop-types";

export default function ProfileItem({
  profile,
  editing,
  editingField,
  handleInputChange,
  handleFieldEdit,
  handleInputDown,
  field,
  classN,
}) {
  return (
    <div className={classN}>
      <div></div>
      {editing && editingField === field ? (
        <input
          type="text"
          value={profile[field]}
          onChange={(event) => handleInputChange(field, event.target.value)}
          onBlur={() => handleFieldEdit(null)}
          autoFocus
          onKeyDown={(event) => handleInputDown(event, field)}
        />
      ) : (
        <h2 onClick={() => handleFieldEdit(field)}>
          {field.charAt(0).toUpperCase() + field.slice(1)} : {profile[field]}
        </h2>
      )}
    </div>
  );
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
  editing: PropTypes.bool.isRequired,
  editingField: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleFieldEdit: PropTypes.func.isRequired,
  handleInputDown: PropTypes.func.isRequired,
  field: PropTypes.string.isRequired,
  classN: PropTypes.string.isRequired,
};
