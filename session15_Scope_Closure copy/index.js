// /* eslint-disable */

// // // GLOBAL LEX ENV
// //   'enviromentRecord': {
// //     'message': 'Test',
// //     'weight': 55,
// //     'run': {
// //         console.log('RUN');
// //      },
// //      'createMessenger': { ..},
// //      'messanger': ....
// //   },
// //   'outherLexicalEnv': null
// // }

// // // messanger 1 Lex Env
// // {
// //   'enviromentRecord': {
// //     sendMessage: func
// //     setSender: func
// //     setMessage: func
// //    message: 'Just learn it'
// //    sender: 'Gromcode'
// //    noNameObj: {sendMessage,
//       // setMessage,
//       // setSender,}
// //   },
// //   'outherLexicalEnv': GLOBAL LEX ENV
// // }

// // run
// // {
//   //   'enviromentRecord': {
//   //     'text': ...}
//   //   },
//   //   'outherLexicalEnv': GLOBAL LEX ENV
//   // }
// const message = 'Test';
// const weight = 55;

// function createMessenger() {
//   let message = 'Just learn it';
//   let sender = 'Gromcode';
//   console.log(text);

//   if (sender === 'Gromecode') {
//     sender = 'Any message';
//   }

//   function sendMessage(name) {
//     console.log(`${name}, ${message}! Your ${sender}`);
//   }

//   function setSender(newSender) {
//     sender = newSender;
//   }

//   function setMessage(text) {
//     message = text;
//   }

//   return {
//     sendMessage,
//     setMessage,
//     setSender,
//   };
// }

// function run() {
//   const text = 'run Forest run'

//   createMessenger();
//   console.log('RUN');
// }

// const messanger1 = createMessenger();
// const messanger2= createMessenger();
// messanger2.sendMessage('James')
// const messanger3 = createMessenger();
// run();

// // lex env 6
// // 9
const records = [1, 2, 3];
function go() {
  console.log(records);
}

const createLogger = () => {
  const records = [];

  return {
    warn(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: 'warn',
      });
    },
    error(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: 'error',
      });
    },
    log(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: 'log',
      });
    },
    getRecords(type) {
      return (type ? records.filter(el => el.type === type) : records).sort(
        (a, b) => b.dateTime - a.dateTime,
      );
    },
  };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]

const logger2 = createLogger();
logger2.log('sdsdsdsd');

console.log(logger2.getRecords());
