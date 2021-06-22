import { useState } from "react";
import { Mention, MentionsInput } from "react-mentions";
import defaultMentionStyle from "./defaultMentionStyle";
import defaultStyle from "./defaultStyle";
const emailRegex = /(([^\s@]+@[^\s@]+\.[^\s@]+))$/;
const Mention2 = () => {
  let [comment, setComment] = useState("");
  function onAdd(id, display) {
    // Do something here
    console.log("Comment inside onAdd: ", comment);
  }

  function handleCommentChange(e) {
    // Handle the changes in the textArea
    console.log("from handleCommentChange: ", e.target.value);
    setComment(e.target.value);
  }

  return (
    <div className="h-40 w-80">
      <h1>mention 2</h1>
      <MentionsInput
        value={comment}
        onChange={handleCommentChange}
        style={defaultStyle}
        markup="@[__display__](__type__:__id__)"
        placeholder={"Mention people using '@'"}
      >
        <Mention
          type="user"
          trigger="@"
          data={users}
          renderSuggestion={(suggestion, search, highlightedDisplay, index, focused) => (
            <div className={`user ${focused ? "focused" : ""}`}>{highlightedDisplay}</div>
          )}
          onAdd={onAdd}
          style={defaultMentionStyle}
        />

        <Mention
          type="email"
          trigger={emailRegex}
          data={(search) => [{ id: search, display: search }]}
          onAdd={onAdd}
          style={{ backgroundColor: "#d1c4e9" }}
        />
      </MentionsInput>
    </div>
  );
};

export default Mention2;

const users = [
  {
    id: "walter",
    display: "Walter White",
  },
  {
    id: "jesse",
    display: "Jesse Pinkman",
  },
  {
    id: "gus",
    display: 'Gustavo "Gus" Fring',
  },
  {
    id: "saul",
    display: "Saul Goodman",
  },
  {
    id: "hank",
    display: "Hank Schrader",
  },
  {
    id: "skyler",
    display: "Skyler White",
  },
  {
    id: "mike",
    display: "Mike Ehrmantraut",
  },
];
