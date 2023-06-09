import React from "react";
import { Container } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import { useFolder } from "../../hooks/useFolder";
import Navbar from "./Navbar";
import AddFolderButton from "./AddFolderButton";
import AddFileButton from "./AddFileButton";
import Folder from "./Folder";
import File from "./File";
import Breadcrumbs from "./Breadcrumbs";

export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state?.folder
  );

  return (
    <>
      <Navbar />
      <Container fluid>
        <div className="d-flex align-items-center m-2">
          <Breadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxwidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map((childFile) => (
              <div
                key={childFile.id}
                style={{ maxwidth: "250px" }}
                className="p-2"
              >
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
