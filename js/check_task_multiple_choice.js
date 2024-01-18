export default async function main(args) {
  const { inputVars } = args;
  const _user_correct = inputVars && inputVars._game_correct_answer == inputVars._game_user_answer;
  let responseText = "";
  if(_user_correct) {
    responseText = "Correct!";
  } else {
    // const arr = {1, 2, 3};
    responseText = "Incorrect! the answer is " + [inputVars._option1, inputVars._option2, inputVars._option3, inputVars._option4][inputVars._game_correct_answer - 1];
  }
  return {
    outputVars: {
      _user_correct: _user_correct ? 1 : 0,
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
