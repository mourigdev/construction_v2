const PrologisReducers = (state, action) => {
  switch (action.type) {
    case "SEARCH_PROPERTIES":
      return {
        ...state,
        properties: action.payload,
      };
    case "FILTER_PROPERTIES":
      return {
        filterproperties: action.payload.filter,
        properties: action.payload.newData,
      };
    case "FILTER_PRICE":
      return {
        ...state,
        properties: action.payload,
      };
    case "FILTER_SIZE":
      return {
        filterproperties: "Building",
        properties: action.payload,
      };
    case "FILTER_BRAND":
      return {
        filterproperties: "Cars",
        properties: action.payload,
      };
    default:
      return state;
  }
};

export default PrologisReducers;
