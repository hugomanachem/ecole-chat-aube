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

  return (
    <>
      <section className="primary-bg-color main-section">
        <Navbar bg_color="secondary" />
        <div className="main-section-content">
          <div className="main-section-text">
            <h2>Choisissez votre créneau</h2>
            <p>
              1 Créneau séléctionné{" "}
              <strong>
                {selectedDate == "" ? (
                  <>- Jeudi 27 février - 10h/12h</>
                ) : (
                  <>selectedDate</>
                )}
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

              <button className="secondary-bg-color pointer-on-hover">
                Valider ce créneau
              </button>
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
              onStartTimeSelect={console.log}
            />
          </div>
        </div>
      </section>

      <Footer bg_color="secondary-bg-color" icons_color="yellow" />
    </>
  );
}

export default SelectionHoraire;
