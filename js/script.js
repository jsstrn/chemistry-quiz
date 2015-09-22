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
      'hydroxide',
      'ammonia'
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
  function getQuestion(){
    var cation = _.sample(data.cation);
    var anion = _.sample(data.anion);
    var question = cation + ' ' + anion;
    $('h3#question').html(question);
    return question;
  }
  // display first question
  var question = getQuestion();
  // button onclick
  $('button').click(function(){
    var answer = $(this).data('answer');
    var result = false;
    if (answer === _.contains(data.soluble, question)) {
      result = true;
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
    // display results to table
    var table = '<tr><td>' + question + '</td><td>' + answer + '</td><td>' + result + '</td></tr>';
    $('tbody').append(table);
    // get next question
    var nextQuestion = '';
    do {
      nextQuestion = getQuestion();
    } while (nextQuestion === question);
    question = nextQuestion;
  });
});
