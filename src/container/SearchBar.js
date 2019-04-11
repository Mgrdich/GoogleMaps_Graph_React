import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions";
//import {bindActionCreators} from "redux";

const SearchBar = (props) => {
  const handleSubmit = e => {
    e.preventDefault();
    //remember form gives you the sumbit by button or enter for free
      props.fetchWeather(term);
      ChangeTerm('');//change it to empty string
  };
  const [term, ChangeTerm] = useState("");
  return (
    <form className="input-group mt-5" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="US City"
        value={term}
        onChange={e => ChangeTerm(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-primary"
          type="submit"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </form>
  );
};
/*const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchWeather},dispatch)
};*/
export default connect(null,{fetchWeather})(SearchBar);
//you can do it here or do it by bind and writing mapDispatchprops
