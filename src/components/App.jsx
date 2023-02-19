import React from "react";
import emojis from "../emojipedia"; //here we can change the name of default exports
import Entry from "./Entry";

function emojiEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojis.map(emojiEntry)}</dl>
    </div>
  );
}

export default App;
