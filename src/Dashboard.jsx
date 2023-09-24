import { useState } from "react";
import { FaGear, FaCheck } from "react-icons/fa6";
import "./Dashboard.css";
import ProfileItem from "./ProfileItem";

export default function Dashboard() {
  const [profile, setProfile] = useState({
    name: "user",
    age: 0,
    weight: 0,
    gender: "unknown",
  });
  const [profileImage, setProfileImage] = useState(
    "./src/assets/images/avatars/avatar2.png"
  );

  const [editingField, setEditingField] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editButtonContent, setEditButtonContent] = useState(<FaGear />);

  const handleFieldEdit = (field) => {
    if (editing) {
      setEditingField(field);
    }
  };

  const handleEditProfile = () => {
    if (editing) {
      setEditButtonContent(<FaGear />);
    } else {
      setEditButtonContent(<FaCheck />);
    }
    setEditing(!editing);
    setEditingField(null);
  };

  const handleInputChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleInputDown = (event, field) => {
    if (event.key === "Enter") {
      handleInputChange(field, event.target.value);
      setEditingField(null);
    }
  };

  return (
    <section className="dashboard">
      <section className="profile">
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile Image"></img>
        </div>
        <div className="profile-info">
          <ProfileItem
            profile={profile}
            editing={editing}
            editingField={editingField}
            handleInputChange={handleInputChange}
            handleInputDown={handleInputDown}
            handleFieldEdit={(field) => handleFieldEdit(field)}
            field={"name"}
            classN={"profile-name"}
          />
          <ProfileItem
            profile={profile}
            editing={editing}
            editingField={editingField}
            handleInputChange={handleInputChange}
            handleInputDown={handleInputDown}
            handleFieldEdit={(field) => handleFieldEdit(field)}
            field={"age"}
            classN={"profile-age"}
          />

          <ProfileItem
            profile={profile}
            editing={editing}
            editingField={editingField}
            handleInputChange={handleInputChange}
            handleInputDown={handleInputDown}
            handleFieldEdit={(field) => handleFieldEdit(field)}
            field={"weight"}
            classN={"profile-weight"}
          />

          <ProfileItem
            profile={profile}
            editing={editing}
            editingField={editingField}
            handleInputChange={handleInputChange}
            handleInputDown={handleInputDown}
            handleFieldEdit={(field) => handleFieldEdit(field)}
            field={"gender"}
            classN={"profile-gender"}
          />
        </div>
        <button onClick={handleEditProfile}>{editButtonContent}</button>
      </section>
    </section>
  );
}
