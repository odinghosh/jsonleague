import React, { useEffect, useState } from 'react';
import '../styles/exerciseStyles.css';
import '../styles/general.css';
import pushUpImg from './push-up-img.jpg';
import { useNavigate } from 'react-router-dom';
import {
  createExercise,
  getExerciseDataUI,
  getExerciseTypeMetaData,
} from '../controllers/exerciseController';

export default function (props) {
  const [warmUpExercises, setWarmUpExercises] = useState([]);
  const [normalExercises, setNormalExercises] = useState([]);
  const [time, setTime] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    getExerciseDataUI('WarmUps', 'PushUpTraining', setWarmUpExercises);
    getExerciseDataUI('Exercises', 'PushUpTraining', setNormalExercises);
    getExerciseTypeMetaData('PushUpTraining', setTime);
  }, []);

  return (
    <div class="parent-div">
      <img class="ex-exercise-img" src={pushUpImg} alt="girl doing push up" />

      <div class="moving-thing">
        <div class="ex-exercise-heading exercise-container">
          <div class="ex-utility-bar">
            <ion-icon
              onClick={(e) => {
                e.preventDefault();
                navigate('../home');
              }}
              class="ex-utility-icon"
              name="chevron-back-outline"
            ></ion-icon>

            <ion-icon
              class="ex-utility-icon"
              name="ellipsis-vertical-outline"
            ></ion-icon>
          </div>
          <p class="exercise--header">Push Up Training</p>

          <div class="exercise--description">
            <p class="exercise--subtext time">
              Time <br />
              <ion-icon class="icon" name="stopwatch-outline"></ion-icon>
              <span> {time} mins </span>
            </p>
            <p class="exercise--subtext target">
              Target <br />
              <ion-icon class="icon" name="disc-outline"></ion-icon>
              <span> Triceps, Chest, Shoulder</span>
            </p>
          </div>
        </div>

        <h1 class="exercise-body-header exercise-container">
          Warm-Up <span>(3)</span>
        </h1>

        <div class="exercise-body-menu">
          {warmUpExercises.map((e) => {
            return createExercise(e.name, e.amount);
          })}
        </div>

        <h1 class="exercise-body-header exercise-container">
          Exercises <span>(6)</span>
        </h1>

        <div class="exercise-body-menu">
          {normalExercises.map((e) => {
            return createExercise(e.name, e.amount);
          })}

          <a
            onClick={(e) => {
              e.preventDefault();
              navigate('../home');
            }}
            class="exercise-completed-btn"
            href="#"
          >
            <p class="exercise-body--heading exercise-done">Finish</p>
          </a>
        </div>
      </div>
    </div>
  );
}
