import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import TrendingUpTwoToneIcon from "@mui/icons-material/TrendingUpTwoTone";
import { useDispatch } from "react-redux";
import { filterActions } from "../../store/Filter/Filterslice";
const FilterFeedPost = () => {
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => setShowFilter((prev) => !prev);
  const dispatch = useDispatch();
  const updateFilter = (e) => {
    dispatch(filterActions.setFilter(e.target.value));
  };
  const resetFilter = () => dispatch(filterActions.resetFilter());
  return (
    <div className="flex justify-between items-center w-full">
      {showFilter && (
        <div className="flex flex-1 gap-2 md:gap-8">
          <label className="flex font-bold text-xs bg-white text-sm justify-center text-center gap-3 px-1 dark:text-white dark:bg-darkSecondary items-center shadow-gray-500 border-2  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md  py-1">
            <input
              type="radio"
              name="filter"
              className="hidden"
              value="old_first"
              onClick={(e) => updateFilter(e)}
            />
            Old First
            <CalendarMonthTwoToneIcon />
          </label>
          <label className="flex cursor-pointer font-bold text-xs bg-white text-sm justify-center text-center gap-3 px-1 dark:text-white dark:bg-darkSecondary items-center shadow-gray-500 border-2  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md  py-1">
            <input
              type="radio"
              name="filter"
              className="hidden"
              value={"trending"}
              onClick={(e) => updateFilter(e)}
            />
            TrendingPost
            <TrendingUpTwoToneIcon />
          </label>
        </div>
      )}
      {!showFilter && (
        <button
          onClick={() => toggleFilter()}
          className="ml-auto dark:bg-darkSecondary dark:shadow-2xl p-2 bg-[#ffffff] rounded-full "
        >
          <FilterAltIcon />
        </button>
      )}
      {showFilter && (
        <button
          onClick={() => {
            toggleFilter();

            resetFilter();
          }}
          className="ml-auto bg-red-400 text-white shadow-2xl p-2 bg-[#ffffff] rounded-full "
        >
          <ClearTwoToneIcon />
        </button>
      )}
    </div>
  );
};

export { FilterFeedPost };
