module.exports = function(robot) {
  robot.hear(/(Hello|hello|Hi|hi|�A�n|�w�w|���w|�Ȧw|�ߦw|���o|�w)/, function(response) {
    re = ['Hello', 'hello', 'Hi', 'hi', '�A�n', '�A�n��', '�w�w', '���o',response.match[1]];
    response.send(response.random(re));
  });
}