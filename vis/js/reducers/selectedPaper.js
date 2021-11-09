const selectedPaper = (state = null, action) => {
  if (action.canceled) {
    return state;
  }

  switch (action.type) {
    case "INITIALIZE":
    case "ZOOM_OUT":
    case "SCALE":
    case "DESELECT_PAPER":
    case "DESELECT_PAPER_BACKLINK":
      return null;
    case "ZOOM_IN": {
      if (!action.selectedPaperData) {
        return null;
      }

      return {
        safeId: action.selectedPaperData.safe_id,
      };
    }
    case "SELECT_PAPER":
      return {
        safeId: action.safeId,
      };
    default:
      return state;
  }
};

export default selectedPaper;
