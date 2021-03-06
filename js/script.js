$(document).ready(function(){
  // question dataset
  var data = {
    'cation': [
      'Potassium',
      'Sodium',
      'Lithium',
      'Calcium',
      'Magnesium',
      'Iron (II)',
      'Iron (III)',
      'Copper',
      'Zinc',
      'Silver',
      'Aluminium',
      'Lead',
      'Barium',
      'Ammonium'
    ],
    'anion': [
      'nitrate',
      'chloride',
      'sulfate',
      'carbonate',
      'hydroxide'
    ],
    'soluble': [
      'Potassium nitrate',
      'Sodium nitrate',
      'Lithium nitrate',
      'Calcium nitrate',
      'Magnesium nitrate',
      'Iron (II) nitrate',
      'Iron (III) nitrate',
      'Copper nitrate',
      'Zinc nitrate',
      'Silver nitrate',
      'Aluminium nitrate',
      'Lead nitrate',
      'Barium nitrate',
      'Ammonium nitrate',
      'Potassium chloride',
      'Sodium chloride',
      'Lithium chloride',
      'Calcium chloride',
      'Magnesium chloride',
      'Iron (II) chloride',
      'Iron (III) chloride',
      'Copper chloride',
      'Zinc chloride',
      'Barium chloride',
      'Aluminium chloride',
      'Ammonium chlorde',
      'Potassium sulfate',
      'Sodium sulfate',
      'Lithium sulfate',
      'Magnesium sulfate',
      'Iron (II) sulfate',
      'Iron (III) sulfate',
      'Copper sulfate',
      'Zinc sulfate',
      'Silver sulfate',
      'Aluminium sulfate',
      'Ammonium  sulfate',
      'Ammonium  carbonate',
      'Sodium carbonate',
      'Potassium carbonate',
      'Lithium carbonate',
      'Sodium hydroxide',
      'Potassium hydroxide',
      'Lithium hydroxide',
      'Aqueous ammonia'
    ]
  };
  // get next random question
  var numberOfQuestions = 30;
  function getQuestion(){
    var cation = _.sample(data.cation);
    var anion = _.sample(data.anion);
    var question = cation + ' ' + anion;
    numberOfQuestions--;
    $('h3#question').html(question);
    return question;
  }
  // display first question
  if (numberOfQuestions > 0) {
    var question = getQuestion();
    // enable buttons
    $('#btn-yes').prop('disabled', false);
    $('#btn-no').prop('disabled', false);
  }
  // score
  var scoreTotal = 0;
  var scorePlayer = 0;
  // rankings
  $.ajax({
    type: 'GET',
    url: 'js/highscore.json',
    dataType: 'json',
    success: function(highscore){
      var x = highscore.question_mode;
      console.log(x);
    },
    error: function(){
      console.log('Failed to read JSON file.');
    }
  });
  var highscore = {
    "question-mode": [
      {
        "name": "John Appleseed",
        "score": 1
      },
      {
        "name": "Shaiming",
        "score": 2
      },
      {
        "name": "Cheng Cheng",
        "score": 3
      },
      {
        "name": "Wu Yin",
        "score": 4
      },
      {
        "name": "Norito Shinoda",
        "score": 5
      },
      {
        "name": "Nobu Takai",
        "score": 6
      },
      {
        "name": "Moklor Vallic",
        "score": 7
      },
      {
        "name": "Kev Shala",
        "score": 8
      },
      {
        "name": "George Ignatyev",
        "score": 9
      },
      {
        "name": "Zushidomiku",
        "score": 10
      }
    ],
    "timed-mode": [
      {
        "name": "John Appleseed",
        "score": 1
      },
      {
        "name": "Shaiming",
        "score": 2
      },
      {
        "name": "Cheng Cheng",
        "score": 3
      },
      {
        "name": "Wu Yin",
        "score": 4
      },
      {
        "name": "Norito Shinoda",
        "score": 5
      },
      {
        "name": "Nobu Takai",
        "score": 6
      },
      {
        "name": "Moklor Vallic",
        "score": 7
      },
      {
        "name": "Kev Shala",
        "score": 8
      },
      {
        "name": "George Ignatyev",
        "score": 9
      },
      {
        "name": "AJT",
        "score": 10
      }
    ]
  };

  // button onclick
  $('button').click(function(){
    scoreTotal++;
    // results
    var answer = $(this).data('answer');
    var result = false;
    if (answer === _.contains(data.soluble, question)) {
      result = true;
      scorePlayer++;
    }
    // rename answer
    if (answer) {
      answer = 'is soluble';
    } else {
      answer = 'is not soluble';
    }
    if (result) {
      result = '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>';
    } else {
      result = '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>';
    }
    // display score
    $('h3#score').html('Score: ' + scorePlayer + ' out of ' + scoreTotal);
    // display results
    var table = '<tr><td>' + question + '</td><td>' + answer + '</td><td>' + result + '</td></tr>';
    $('tbody').append(table);
    // get next question
    var nextQuestion = '';
    if (numberOfQuestions > 0) {
      do {
        nextQuestion = getQuestion();
      } while (nextQuestion === question);
      question = nextQuestion;
    } else {
      // disable buttons
      $('#btn-yes').prop('disabled', true);
      $('#btn-no').prop('disabled', true);
    }
  });
});
