// my solution

const timer = {
  minsPassed: 0,
  secondsPassed: 0,

  startTimer() {
    this.inetvalId = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },

  getTime() {
    return `${this.minsPassed}:${this.secondsPassed.toString().padStart(2, 0)}`;
  },

  stopTimer() {
    clearInterval(this.inetvalId);
  },

  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};

// function getName() {
//   console.log(this);
//   return 'James';
// }

// getName();

// const timer = {
//   secondsPassed: 0,
//   minsPassed: 0,
//   startTimer() {
//     console.log('startTime context', this);
//     // input: callback, number
//     // out ID

//     setInterval(function () {
//       console.log('callback context', this);
//       this.secondsPassed += 1;
//     }, 1000);

//     // const callback = function () {
//     //   console.log('startTime context', this);
//     //   this.secondsPassed += 1;
//     // };

//     // const bindedCallback = callback.bind(this);
//     // setInterval(bindedCallback, 1000);
//   },
//   stopTimer() {},
//   getTime() {},
//   resetTimer() {},
//   //
// };

// // test data
// timer.startTimer(); // context +
// const func = timer.startTimer;
// func(); // context -
// // 1. func called separately
// // const func = timer.startTimer;
// // func(); // context -
// // 2. callback func (!!!)

// // 3. nested func
