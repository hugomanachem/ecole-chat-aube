import Navbar from "../components/Navbar";
import { useState } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import Footer from "../components/Footer";

function SelectionHoraire() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
    return {
      id,
      startTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          9,
          0,
          0,
          0
        )
      ),
      endTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          17,
          0,
          0,
          0
        )
      ),
    };
  });

  const handleTimeslotClicked = (startTimeEventEmit) => {
    startTimeEventEmit.resetDate();
    startTimeEventEmit.resetSelectedTimeState();
    setFormatedSelectedDate(startTimeEventEmit);
  };

  const setFormatedSelectedDate = (startTimeEventEmit) => {
    const dateToFormat = startTimeEventEmit.startTime
      .toLocaleString("fr-FR", {
        dateStyle: "full",
        timeStyle: "short",
        timeZone: "UTC",
      })
      .split(" ");
    const formatedStartTime = parseInt(dateToFormat[5].substring(0, 2)) + 1;
    const formatedEndTime = formatedStartTime + 1;
    const formatedSelectedDate = `${
      dateToFormat[0].charAt(0).toUpperCase() + dateToFormat[0].slice(1)
    } ${dateToFormat[1]} ${
      dateToFormat[2]
    } - ${formatedStartTime}h/${formatedEndTime}h`;
    setSelectedDate(formatedSelectedDate);
  };

  return (
    <>
      <section className="primary-bg-color main-section">
        <Navbar bg_color="secondary" />
        <div className="main-section-content">
          <div className="main-section-text">
            <h2>Choisissez votre créneau</h2>
            <p>
              {selectedDate == "" ? (
                <>0 Créneau séléctionné</>
              ) : (
                <>1 Créneau séléctionné : </>
              )}
              <strong>
                {selectedDate == "" ? <></> : <>{selectedDate}</>}
              </strong>
            </p>
            <form id="form-container">
              <label>Nom</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />

              <label>Prénom</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />

              <button className="secondary-bg-color">Valider ce créneau</button>
              <p>
                <em>
                  Ce rendez-vous vous engage.
                  <br /> Merci d’informer l’association au moins 2h avant en cas
                  de désistement
                </em>
              </p>
            </form>
          </div>
          <div id="slot-selector">
            <ScheduleMeeting
              borderRadius={10}
              primaryColor="#3f5b85"
              eventDurationInMinutes={60}
              availableTimeslots={availableTimeslots}
              onStartTimeSelect={handleTimeslotClicked}
            />
          </div>
        </div>
      </section>

      <Footer bg_color="secondary-bg-color" icons_color="yellow" />
    </>
  );
}

export default SelectionHoraire;
