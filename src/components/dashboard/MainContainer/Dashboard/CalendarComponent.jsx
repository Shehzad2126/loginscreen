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
  width: 90%;
  height: auto;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
`;

const WeekHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.05rem;
  color: #4a5568;
`;

const WeekDaysContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem;
  margin-top: 0.25rem;
  gap: 0.25rem;
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.25rem 0;

  &.today {
    border: 2px solid #38b2ac;
    border-radius: 9999px;
    padding: 0.025rem;
  }
`;

const DayName = styled.span`
  padding: 1rem 0.7rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #a0aec0;
`;

const DayButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  font-size: 1rem;
  border: 2px solid transparent;

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
