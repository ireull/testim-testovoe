import { FC } from "react";
import { FAQSection } from "./constants";
import "./styles.css";

type FAQSectionEditProps = {
  section: FAQSection;
  disabledMoveUp: boolean;
  disabledMoveDown: boolean;
  onChange: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDelete: () => void;
};

export const FAQSectionEdit: FC<FAQSectionEditProps> = ({
  section,
  disabledMoveUp,
  disabledMoveDown,
  onChange,
  onMoveUp,
  onMoveDown,
  onDelete,
}) => {
  return (
    <div className="section-edit">
      <div className="section-edit-move-block">
        <button onClick={onMoveUp} disabled={disabledMoveUp}>
          ^
        </button>
        <button
          onClick={onMoveDown}
          disabled={disabledMoveDown}
          style={{ rotate: "180deg" }}
        >
          ^
        </button>
      </div>
      <div className="section-edit-form">
        <input
          value={section.question}
          onChange={onChange}
          placeholder="Вопрос"
        />
        <textarea
          value={section.answer}
          onChange={onChange}
          placeholder="Ответ"
        />
        <label>
          Сделать видимым
          <input
            type="checkbox"
            checked={section.visible}
            onChange={onChange}
          />
        </label>
      </div>
      <div className="section-edit-delete-block">
        <button onClick={onDelete}>Удалить</button>
      </div>
    </div>
  );
};
