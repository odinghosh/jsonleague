import React from 'react';
import '../styles/exerciseStyles.css';
import '../styles/general.css';
import '../styles/queries.css';

export default function () {
  return (
    <div class="parent-div">
      <img
        class="exercise-img"
        src="running-img.jpg"
        alt="girl doing push up"
      />

      <div class="moving-thing">
        <div class="exercise-heading exercise-container">
          <div class="utility-bar">
            <ion-icon
              class="utility-icon"
              name="chevron-back-outline"
            ></ion-icon>

            <ion-icon
              class="utility-icon"
              name="ellipsis-vertical-outline"
            ></ion-icon>
          </div>
          <p class="exercise--header">Running Training</p>

          <div class="exercise--description">
            <p class="exercise--subtext time">
              Time <br />
              <ion-icon class="icon" name="stopwatch-outline"></ion-icon>
              <span> 50 mins </span>
            </p>
            <p class="exercise--subtext target">
              Target <br />
              <ion-icon class="icon" name="disc-outline"></ion-icon>
              <span> Core, Quads, Shoulder</span>
            </p>
          </div>
        </div>

        <h1 class="exercise-body-header exercise-container">
          Warm-Up <span>(4)</span>
        </h1>

        <div class="exercise-body-menu">
          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="accessibility-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Jumping Jacks</p>
                <p class="exercise-body--subtext">3 set of 10 reps</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Arm Circles</p>
                <p class="exercise-body--subtext">3 set of 10 reps</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Shoulder Shrugs</p>
                <p class="exercise-body--subtext">3 set of 10 reps</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Wrist Circles</p>
                <p class="exercise-body--subtext">30 sec</p>
              </div>
            </div>
          </a>
        </div>

        <h1 class="exercise-body-header exercise-container">
          Exercises <span>(6)</span>
        </h1>

        <div class="exercise-body-menu">
          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Side Planks</p>
                <p class="exercise-body--subtext">3 sets of 30 sec</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Plank With Reach</p>
                <p class="exercise-body--subtext">3 sets of 30 sec</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Lateral Crawl</p>
                <p class="exercise-body--subtext">3 sets of 10 steps</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Push-Up Hold</p>
                <p class="exercise-body--subtext">3 sets of 30 sec</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Bicycle Crunch</p>
                <p class="exercise-body--subtext">3 sets of 30 sec</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Plank with Leg Lifts</p>
                <p class="exercise-body--subtext">3 sets of 30 sec</p>
              </div>
            </div>
          </a>
          <a class="exercise-completed-btn" href="#">
            <p class="exercise-body--heading exercise-done">Finish</p>
          </a>
        </div>
      </div>
    </div>
  );
}
