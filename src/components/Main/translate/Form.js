import classes from "./Form.module.scss";
import {
  TRANSLATE_FROM,
  TRANSLATE_TO,
  TRANSLATE_STR,
} from "../../../config.js";
import languageCodes from "../../../helpers/languages";
import Loading from "../Loading";

const Form = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className={classes["input-field-cont"]}>
        <label className={classes["form-label"]}>Text to Translate</label>
        <input
          type="text"
          className="form-control"
          maxLength="50"
          placeholder="Enter Text"
          onChange={props.onTranslateChange}
        />
      </div>

      <div className={classes["input-field-cont"]}>
        <label className={classes["form-label"]}>From</label>
        <select className="form-control" onChange={props.onFromChange}>
          {languageCodes.map((lang) => (
            <option value={lang.code} selected={lang.code === TRANSLATE_FROM}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <div className={classes["input-field-cont"]}>
        <label className={classes["form-label"]}>To</label>
        <select className="form-control" onChange={props.onToChange}>
          {languageCodes.map((lang) => (
            <option value={lang.code} selected={lang.code === TRANSLATE_TO}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className={`btn btn-primary ${classes["translate-submit"]}`}
        disabled={!props.translateText.length > 0 || props.isLoading}
      >
        Translate
      </button>

      {props.isLoading && <Loading type={TRANSLATE_STR} />}
    </form>
  );
};

export default Form;
