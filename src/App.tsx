import { useState } from "react";
import { initialFAQSections, FAQSection } from "./constants";
import { FAQSectionEdit } from "./FAQSectionEdit";

export default function App() {
  const [FAQSections, setFAQSections] =
    useState<FAQSection[]>(initialFAQSections);

  const handleChange = () => {};

  const handleMoveUp = () => {};

  const handleMoveDown = () => {};

  const handleDelete = () => {};

  const handleClickAdd = () => {};

  return (
    <div className="App">
      <h1>Часто задаваемые вопросы</h1>
      <div className="list">
        {FAQSections.map((section) => (
          <FAQSectionEdit
            section={section}
            disabledMoveUp={false}
            disabledMoveDown={false}
            onChange={handleChange}
            onMoveUp={handleMoveUp}
            onMoveDown={handleMoveDown}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <div className="add-wrapper">
        <button onClick={handleClickAdd}>Добавить</button>
      </div>
    </div>
  );
}
