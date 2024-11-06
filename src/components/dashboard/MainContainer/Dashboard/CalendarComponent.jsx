import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import moment from "moment";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Styled component for the overlay calendar
const CalendarOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 8px;
`;

const WeekViewContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 20rem; /* Equivalent to max-w-xs */
  padding: 1rem 2rem; /* Equivalent to px-4 py-1 */
  background-color: white; /* Equivalent to bg-white */
  border-radius: 0.5rem; /* Equivalent to rounded-lg */
`;

const WeekHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem; /* Equivalent to mb-1 */
  color: #4a5568; /* Equivalent to text-gray-800 */
`;

const WeekDaysContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 1rem; /* Equivalent to py-1 */
  margin-top: 0.25rem; /* Equivalent to mt-1 */
  gap: 0.25rem; /* Equivalent to gap-x-1 */
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.25rem 0; /* Equivalent to py-1 */

  &.today {
    border: 2px solid #38b2ac; /* Equivalent to border-teal-600 */
    border-radius: 9999px; /* Fully rounded */
    padding: 0.125rem; /* Equivalent to p-0.5 */
  }
`;

const DayName = styled.span`
  padding: 1rem 1rem; /* Equivalent to py-3 */
  font-size: 0.75rem; /* Equivalent to text-xs */
  font-weight: 500; /* Equivalent to font-medium */
  color: #a0aec0; /* Equivalent to text-gray-500 */
`;

const DayButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem; /* Increased width */
  height: 2rem; /* Increased height */
  border-radius: 9999px; /* Fully rounded */
  font-size: 1rem; /* Increased font size */
  border: 2px solid transparent; /* Default border */

  &.selected {
    background-color: #38b2ac; /* Filled with teal color */
    color: white; /* White text */
  }

  &.today {
    background-color: #38b2ac; /* Filled with teal color */
    color: white; /* White text */
    border: 2px solid #38b2ac; /* Maintain border */
  }

  &.default {
    background-color: #edf2f7; /* Equivalent to bg-gray-200 */
    color: #2d3748; /* Equivalent to text-gray-800 */
  }
`;

export default function CustomCalendar() {
  const [dateState, setDateState] = useState(new Date()); // Full calendar date state
  const [selectedDate, setSelectedDate] = useState(new Date()); // Selected date for custom week view
  const [showFullCalendar, setShowFullCalendar] = useState(false); // Toggle between full calendar and custom week view

  const handleDateChange = (date) => {
    setDateState(date);
    setSelectedDate(date);
    setShowFullCalendar(false); // Return to week view after selecting a date
  };

  const toggleCalendarView = () => {
    setShowFullCalendar(!showFullCalendar); // Toggle between week and full calendar views
  };

  const getWeekDays = (date) => {
    const startOfWeek = dayjs(date).startOf("week");
    return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
  };

  const renderWeekView = () => {
    const weekDays = getWeekDays(selectedDate);

    return (
      <WeekViewContainer>
        <WeekHeader>
          <FaChevronLeft
            style={{ color: "rgba(75, 85, 99, 1)", cursor: "pointer" }}
            onClick={() =>
              setSelectedDate(dayjs(selectedDate).subtract(1, "week").toDate())
            }
          />
          <span
            style={{
              fontSize: "0.875rem" /* Equivalent to text-sm */,
              fontWeight: "600" /* Equivalent to font-semibold */,
              color: "#4a5568" /* Equivalent to text-gray-800 */,
              cursor: "pointer",
            }}
            onClick={toggleCalendarView}
          >
            {moment(selectedDate).format("MMM YYYY")}
          </span>
          <FaChevronRight
            style={{ color: "rgba(75, 85, 99, 1)", cursor: "pointer" }}
            onClick={() =>
              setSelectedDate(dayjs(selectedDate).add(1, "week").toDate())
            }
          />
        </WeekHeader>
        <WeekDaysContainer>
          {weekDays.map((day) => (
            <DayContainer
              key={day.date()}
              className={day.isSame(dayjs(), "day") ? "today" : ""}
            >
              <DayName>{day.format("dd")[0]}</DayName>
              <DayButton
                onClick={() => setSelectedDate(day.toDate())}
                className={`
                  ${
                    selectedDate.getDate() === day.date() &&
                    selectedDate.getMonth() === day.month()
                      ? "selected"
                      : ""
                  }
                  ${day.isSame(dayjs(), "day") ? "today" : "default"}
                `}
              >
                {day.date()}
              </DayButton>
            </DayContainer>
          ))}
        </WeekDaysContainer>
      </WeekViewContainer>
    );
  };

  return (
    <div style={{ position: "relative" }}>
      {renderWeekView()}
      {showFullCalendar && (
        <CalendarOverlay>
          <Calendar value={dateState} onChange={handleDateChange} />
        </CalendarOverlay>
      )}
    </div>
  );
}
