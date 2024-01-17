export default async function main(args) {
  const { inputVars } = args;

  function getRandomTuple(list) {
      const randomIndex = Math.floor(Math.random() * list.length);
      return list[randomIndex];
    }

  let _answer = "aaa aaa";
  let _task = "ttt ttt";
  let listOfTuples = [
      ['which letter corresponds to braille dot 1 (⠁)?', 'a'],
      ['which letter corresponds to braille dots 1 and 2 (⠃)?', 'b'],
      ['which letter corresponds to braille dots 1 and 4 (⠉)?', 'c'],
      ['which letter corresponds to braille dots 1, 4, and 5 (⠙)?', 'd'],
      ['which letter corresponds to braille dots 1 and 5 (⠑)?', 'e'],
      ['which letter corresponds to braille dots 1, 2, and 4 (⠋)?', 'f'],
      ['which letter corresponds to braille dots 1, 2, 4, and 5 (⠛)?', 'g'],
      ['which letter corresponds to braille dots 1, 2, and 5 (⠓)?', 'h'],
      ['which letter corresponds to braille dots 2 and 4 (⠊)?', 'i'],
      ['which letter corresponds to braille dots 2, 4, and 5 (⠚)?', 'j']
    ];

  // letters
  if (inputVars && inputVars._game_scope >= 2) {
    listOfTuples = [
      ...listOfTuples,
      ['which letter corresponds to braille dot 1 and 3 (⠅)?', 'k'],
      ['which letter corresponds to braille dots 1, 2, and 3 (⠇)?', 'l'],
      ['which letter corresponds to braille dots 1, 3, and 4 (⠍)?', 'm'],
      ['which letter corresponds to braille dots 1, 3, 4, and 5 (⠝)?', 'n'],
      ['which letter corresponds to braille dots 1, 3, and 5 (⠕)?', 'o'],
      ['which letter corresponds to braille dots 1, 2, 3, and 4 (⠏)?', 'p'],
      ['which letter corresponds to braille dots 1, 2, 3, 4, and 5 (⠟)?', 'q'],
      ['which letter corresponds to braille dots 1, 2, 3, and 5 (⠗)?', 'r'],
      ['which letter corresponds to braille dots 2, 3, and 4 (⠎)?', 's'],
      ['which letter corresponds to braille dots 2, 3, 4, and 5 (⠞)?', 't'],
      ['which letter corresponds to braille dots 1, 3, and 6 (⠥)?', 'u'],
      ['which letter corresponds to braille dots 1, 2, 3, and 6 (⠧)?', 'v'],
      ['which letter corresponds to braille dots 2, 4, 5, and 6 (⠺)?', 'w'],
      ['which letter corresponds to braille dots 1, 3, 4, and 6 (⠭)?', 'x'],
      ['which letter corresponds to braille dots 1, 3, 4, 5, and 6 (⠽)?', 'y'],
      ['which letter corresponds to braille dots 1, 3, 5, and 6 (⠵)?', 'z']
    ];
  }
  if (inputVars && inputVars._game_scope >= 3) {
    listOfTuples = [
      ...listOfTuples,
      ['which digit corresponds to braille dot 1 (⠁)?', '1'],
      ['which digit corresponds to braille dots 1 and 2 (⠃)?', '2'],
      ['which digit corresponds to braille dots 1 and 4 (⠉)?', '3'],
      ['which digit corresponds to braille dots 1, 4, and 5 (⠙)?', '4'],
      ['which digit corresponds to braille dots 1 and 5 (⠑)?', '5'],
      ['which digit corresponds to braille dots 1, 2, and 4 (⠋)?', '6'],
      ['which digit corresponds to braille dots 1, 2, 4, and 5 (⠛)?', '7'],
      ['which digit corresponds to braille dots 1, 2, and 5 (⠓)?', '8'],
      ['which digit corresponds to braille dots 2 and 4 (⠊)?', '9'],
      ['which digit corresponds to braille dots 2, 4, and 5 (⠚)?', '0']
    ];
  }
  if (inputVars && inputVars._game_scope >= 4) {
    listOfTuples = [
      ...listOfTuples,
    ];
  }
  
  const randomTuple = getRandomTuple(listOfTuples);
  _task = randomTuple[0];
  _answer = randomTuple[1];

  return {
    outputVars: {
      _answer: _answer,
    },
    trace: [
      {
        type: "text",
        payload: {
          message: `${_task} Enter a single symbol using your keyboard.`,
        },
      },
    ],
  };
}

