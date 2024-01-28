export default async function main(args) {
  const { inputVars } = args;

  function getRandomTuple(list) {
      const randomIndex = Math.floor(Math.random() * list.length);
      return list[randomIndex];
    }

  
  let listOfTuples = [
    ['letter A?', 'dot 1(⠁)', 'dots 1 and 2 (⠃)', 'dots 1 and 3 (⠅)', 'dots 1 and 4 (⠉)', 1],
    ['letter B?', 'dots 1, 4, and 5 (⠙)', 'dots 1, 2, and 5 (⠓)', 'dots 1 and 2 (⠃)', 'dot 1 (⠁)', 3],
    ['letter C?', 'dots 1, 2 and 5 (⠓)', 'dots 1 and 4 (⠉)', 'dots 1, 4 and 5 (⠙)', 'dot 1 (⠁)', 2],
    ['letter D?', 'dots 1 and 4 (⠉)', 'dots 1 and 2 (⠃)', 'dots 1, 4, and 5 (⠙)', 'dots 1, 2 and 5 (⠓)', 3],
    ['letter E?', 'dots 1, 4, 5 (⠙)', 'dots 1, 2 (⠃)', 'dot 1, 5 (⠑)', 'dots 2, 4 (⠊)', 3],
    ['letter F?', 'dots 1, 2, 4 (⠋)', 'dots 1, 3, 4 (⠍)', 'dots 1, 2, 5 (⠓)', 'dots 1, 2, 4, 5 (⠛)', 1],
    ['letter G?', 'dots 1, 2, 5 (⠓)', 'dots 1, 2, 4, 5 (⠛)', 'dots 1, 3, 5 (⠕)', 'dots 1, 3, 4, 5 (⠝)', 2],
    ['letter H?', 'dots 1, 2, 5 (⠓)', 'dots 1, 2, 4, 5 (⠛)', 'dots 1, 2 (⠃)', 'dots 6 (⠠)', 1],
    ['letter I?', 'dots 1, 3 (⠅)', 'dots 2, 4 (⠊)', 'dots 1, 6 (⠤)', 'dots 1, 2, 4, 5 (⠛)', 2],
    ['letter J?', 'dots 2, 4, 5 (⠚)', 'dots 1, 3 (⠅)', 'dots 1, 2 (⠃)', 'dots 1, 2, 5 (⠓)', 1],
  ];

  // letters
  if (inputVars && inputVars._game_scope >= 2) {
    listOfTuples = [
      ...listOfTuples,
      ['letter K?', 'dots 1, 3 (⠅)', 'dots 1, 2, 4 (⠋)', 'dots 2, 4 (⠊)', 'dots 1, 3, 5 (⠕)', 1],
      ['letter L?', 'dots 1, 3 (⠅)', 'dots 1, 2, 3 (⠇)', 'dots 1, 2, 4 (⠋)', 'dots 1, 2 (⠃)', 2],
      ['letter M?', 'dots 1, 3, 4 (⠍)', 'dots 1, 2, 4 (⠋)', 'dots 1, 3, 6 (⠥)', 'dots 2, 4, 5 (⠚)', 1],
      ['letter N?', 'dots 1, 3, 5 (⠕)', 'dots 1, 2, 3 (⠇)', 'dots 1, 2, 5 (⠓)', 'dots 1, 3, 4, 5 (⠝)', 4],
      ['letter O?', 'dots 1, 2, 3 (⠇)', 'dots 1, 3, 5 (⠕)', 'dots 1, 4, 5 (⠙)', 'dots 1, 3, 6 (⠥)', 2],
      ['letter P?', 'dots 2, 3, 4, 5 (⠞)', 'dots 1, 2, 3, 4 (⠏)', 'dots 1, 2, 5 (⠓)', 'dots 1, 2, 3 (⠇)', 2],
      ['letter Q?', 'dots 1, 2, 3, 4, 5 (⠟)', 'dots 2, 3, 4 (⠎)', 'dots 1, 2, 4, 5 (⠛)', 'dots 1, 2, 4 (⠋)', 1],
      ['letter R?', 'dots 1, 2, 3, 5 (⠗)', 'dots 1, 2, 5 (⠓)', 'dots 2, 3, 4, 5 (⠞)', 'dots 1 and 4 (⠉)', 1],
      ['letter S?', 'dots 1, 4, 5 (⠙)', 'dots 2, 3, 4 (⠎)', 'dots 1, 2, 5 (⠓)', 'dots 1, 3, 5 (⠕)', 2],
      ['letter T?', 'dots 1, 3, 5 (⠕)', 'dots 1, 4, 5 (⠙)', 'dots 2, 3, 4, 5 (⠞)', 'dots 2, 4 (⠊)', 3],
      ['letter U?', 'dots 2, 3, 4, 5 (⠞)', 'dots 1, 3, 6 (⠥)', 'dots 1, 2, 3, 5 (⠗)', 'dots 1, 3, 5 (⠕)', 2],
      ['letter V?', 'dots 2, 3, 4, 5 (⠞)', 'dots 1, 3, 4, 5 (⠝)', 'dots 1, 2, 3, 6 (⠧)', 'dots 2, 4 (⠊)', 3],
      ['letter W?', 'dots 2, 3, 4 (⠎)', 'dots 1, 3, 5 (⠕)', 'dots 2, 4, 5, 6 (⠺)', 'dots 2, 3, 4, 5 (⠞)', 3],
      ['letter X?', 'dots 1, 2 (⠃)', 'dots 1, 3, 5 (⠕)', 'dots 1, 3, 4, 6 (⠭)', 'dots 1, 3, 4 (⠍)', 3],
      ['letter Y?', 'dots 1, 2, 4, 5 (⠛)', 'dots 1, 2, 3 (⠇)', 'dots 1, 3, 4, 5, 6 (⠽)', 'dots 1, 3, 6 (⠥)', 3],
      ['letter Z?', 'dots 1, 3, 6 (⠥)', 'dots 1, 3, 5, 6 (⠵)', 'dots 2, 3, 4 (⠎)', 'dots 1, 2, 4 (⠋)', 2],
    ];
  }
  if (inputVars && inputVars._game_scope >= 3) {
    listOfTuples = [
      ...listOfTuples,
      ['digit 1?', 'dots 1, 2 (⠃)', 'dots 1, 5 (⠑)', 'dot 1 (⠁)', 'dots 2, 4 (⠊)', 3],
      ['digit 2?', 'dots 1, 2, 5 (⠓)', 'dots 1, 2 (⠃)', 'dot 1 (⠁)', 'dots 1, 4, 5 (⠙)', 2],
      ['digit 3?', 'dots 1, 2, 4, 5 (⠛)', 'dots 1, 4 (⠉)', 'dots 1, 2, 4 (⠋)', 'dot 2, 4, 5 (⠚)', 2],
      ['digit 4?', 'dots 1, 4, 5 (⠙)', 'dots 1, 2 (⠃)', 'dots 1, 5 (⠑)', 'dots 2, 4 (⠊)', 1],
      ['digit 5?', 'dot 1 (⠁)', 'dots 1, 2 (⠃)', 'dots 1, 4, 5 (⠙)', 'dots 1, 5 (⠑)', 4],
      ['digit 6?', 'dots 1, 2, 4 (⠋)', 'dots 1, 2, 5 (⠓)', 'dots 2, 4 (⠊)', 'dots 1, 4 (⠉)', 1],
      ['digit 7?', 'dots 1, 2, 4, 5 (⠛)', 'dots 1, 2, 4 (⠋)', 'dots 1, 5 (⠑)', 'dots 2, 4, 5 (⠚)', 1],
      ['digit 8?', 'dots 1, 5 (⠑)', 'dots 1, 2, 5 (⠓)', 'dots 1, 2, 4, 5 (⠛)', 'dots 1, 4, 5 (⠙)', 2],
      ['digit 9?', 'dots 2, 4, 5 (⠚)', 'dots 2, 4 (⠊)', 'dot 1, 2, 4, 5 (⠛)', 'dot 1 (⠁)', 2],
      ['digit 0?', 'dots 2, 4, 5 (⠚)', 'dots 1, 4, 5 (⠙)', 'dots 1, 2, 4 (⠋)', 'dots 1, 5 (⠑)', 1],
    ];
  }
  if (inputVars && inputVars._game_scope >= 4) {
    listOfTuples = [
      ...listOfTuples,
    ];
  }

  let randomTuple = listOfTuples[0];
  do {
    randomTuple = getRandomTuple(listOfTuples);
  } while (randomTuple[5] == inputVars._prev_correct_option)
  
  const _task = randomTuple[0];
  const _game_option1 = randomTuple[1];
  const _game_option2 = randomTuple[2];
  const _game_option3 = randomTuple[3];
  const _game_option4 = randomTuple[4];
  const _correct_option = randomTuple[5];

  return {
    outputVars: {
      _game_correct_option: _correct_option,
      _game_option1: _game_option1,
      _game_option2: _game_option2,
      _game_option3: _game_option3,
      _game_option4: _game_option4,
    },
    trace: [
      {
        type: "text",
        payload: {
          message: `which combination of dots encodes ${_task}`,
        },
      },
    ],
  };
}

