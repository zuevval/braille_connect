export default async function main(args) {
  const { inputVars } = args;
  const _user_correct = inputVars && inputVars._game_correct_answer.trim() == inputVars._game_user_answer.toLowerCase().trim()
  let responseText = "";
  let output = 0;
  if(_user_correct) {
    responseText = "Correct!"
    output = 1;
  } else {
    responseText = "Incorrect! the answer is " + inputVars._game_correct_answer
  }
  return {
    outputVars: {
      _user_correct: output,
    },
    trace: [
      {
        type: "text",
        payload: {
          message: `${responseText}`,
        },
      },
    ],
  };
}

