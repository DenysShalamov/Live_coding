/* eslint-disable */

// // GLOBAL LEX ENV
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': {
//         console.log('RUN');
//      },
//      'createMessenger': { ..},
//      'messanger': ....
//   },
//   'outherLexicalEnv': null
// }

// // messanger 1 Lex Env
// {
//   'enviromentRecord': {
//     sendMessage: func
//     setSender: func
//     setMessage: func
//    message: 'Just learn it'
//    sender: 'Gromcode'
//    noNameObj: {sendMessage,
      // setMessage,
      // setSender,}
//   },
//   'outherLexicalEnv': GLOBAL LEX ENV
// }
const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  if (sender === 'Gromecode') {
    sender = 'Any message';
  }

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger1 = createMessenger();
const messanger2= createMessenger();
messanger2.sendMessage('James')
const messanger3 = createMessenger();
run();

// lex env 6 
// 9