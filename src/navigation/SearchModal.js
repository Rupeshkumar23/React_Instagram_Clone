import Modal from "react-modal";
import { Stack } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchModal = ({ modalIsOpen, setmodalIsOpen, searchText, handleInputChange_1, handleClearClick_1, filteredData, handleClearIconClick }) => {
  return (
    <Modal
      style={{
        overlay: {
          marginLeft: "112px",
          backgroundColor: "transparent",
        },
      }}
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={() => setmodalIsOpen(false)}
      className={`modalSearch ${modalIsOpen ? "modal-open" : ""}`}
    >
      <h2>Search</h2>
      <div className="search-box">
        <SearchIcon className="search-icon" />
        <input
          className="showsearchinput"
          type="search"
          placeholder="Search"
          name="text"
          value={searchText}
          onChange={handleInputChange_1}
        />
        {searchText && (
          <ClearIcon
            className="clear-icon"
            onClick={handleClearClick_1}
          />
        )}
      </div>
      <hr className="search_hr" />

      <Stack
        sx={{ marginTop: "1em" }}
        direction="row"
        justifyContent="space-between"
      >
        <p style={{ marginLeft: "1em", fontWeight: "bold" }}>Recent</p>
        {filteredData.length > 0 && (
          <p className="clear_all" onClick={handleClearClick_1}>
            Clear all
          </p>
        )}
      </Stack>

      {filteredData.length === 0 ? (
        searchText ? (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "700px",
              color: "#ddd",
            }}
          >
            No results found
          </p>
        ) : (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "700px",
              color: "#ddd",
            }}
          >
            No recent searches
          </p>
        )
      ) : (
        filteredData.map((data) => (
          <Stack
            key={data.id}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            className="view_profile"
            sx={{
              padding: "15px",
              maxWidth: "500px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <Avatar alt="User Avatar" src={data.userAvatar} />
            <div style={{ marginLeft: "8px", flex: 1 }}>
              <p style={{ fontWeight: "bold", fontSize: "14px" }}>
                {data.user}{" "}
                {data.tickmark && (
                  <img src={data.tickmark} width={15} alt="Verified" />
                )}
              </p>
              <p style={{ color: "#ddd", fontSize: "12px" }}>
                {data.description}
              </p>
            </div>
            <ClearIcon
              sx={{ color: "#969696", cursor: "pointer" }}
              onClick={() => handleClearIconClick(data.id)}
            />
          </Stack>
        ))
      )}
    </Modal>
  );
};

export default SearchModal;
