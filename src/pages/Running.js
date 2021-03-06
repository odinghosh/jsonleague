import React, { useState, useEffect } from 'react';
import '../styles/exerciseStyles.css';
import '../styles/general.css';
import runningImg from './running-img.jpg';
import { useNavigate } from 'react-router-dom';
import {
  createExercise,
  getExerciseDataUI,
  getExerciseTypeMetaData,
} from '../controllers/exerciseController';

export default function () {
  const navigate = useNavigate();

  const [warmUpExercises, setWarmUpExercises] = useState([]);
  const [normalExercises, setNormalExercises] = useState([]);
  const [time, setTime] = useState('');

  useEffect(() => {
    getExerciseDataUI('WarmUps', 'RunningTraining', setWarmUpExercises);
    getExerciseDataUI('Exercises', 'RunningTraining', setNormalExercises);
    getExerciseTypeMetaData('RunningTraining', setTime);
  }, []);
  return (
    <div class="parent-div">
      <img class="ex-exercise-img" src={runningImg} alt="girl doing push up" />

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
          <p class="exercise--header">Running Training</p>

          <div class="exercise--description">
            <p class="exercise--subtext time">
              Time <br />
              <ion-icon class="icon" name="stopwatch-outline"></ion-icon>
              <span> {time} min </span>
            </p>
            <p class="exercise--subtext target">
              Target <br />
              <ion-icon class="icon" name="disc-outline"></ion-icon>
              <span> Legs, Core</span>
            </p>
          </div>
        </div>

        <h1 class="exercise-body-header exercise-container">
          Warm-Up <span>(4)</span>
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
