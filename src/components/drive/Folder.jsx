import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

export default function Folder({ folder }) {
  return (
    <Button
      as={Link}
      to={`/folder/${folder.id}`}
      variant="outline-dark"
      className="text-truncate w-100"
    >
      <FontAwesomeIcon icon={faFolder} className="me-2" />
      {folder.name}
    </Button>
  );
}
