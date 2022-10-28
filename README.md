# rock-paper-scissors

Rock Paper Scissors is the first JavaScript project in the TOP curriculum. The goal is to build a "rock paper scissors"-style game using conditional statements.

It works, but I'm envious of the other students' elegant submissions. In the future, I want to aim for using switch statements to handle large numbers of cases. The way I wrote my if/else statements make an otherwise simple project into a burdensome one. If I ever needed to make a simple change to the logic, I would need to edit 9 different cases and their respective strings by hand.

A fellow student (lookingcoolonavespa) was able to simplify the `playRound` function by using [logical operators && and ||](https://github.com/lookingcoolonavespa/rock-paper-scissors/blob/6362b85555060ca88aa2570a598e4c1209d821b6/app.js#L135). Other students used similar approaches, so I'll take these practices into account!

It's also interesting to see how other students got a random `computerChoice`. [The same student above used an array, which feels like the most efficient solution](https://github.com/lookingcoolonavespa/rock-paper-scissors/blob/6362b85555060ca88aa2570a598e4c1209d821b6/app.js#L124). This would allow you to add virtually unlimited choices, such as "Sword" or "Gun", without having to modify the function itself. My solution uses fixed fractions, such as `1/3` and `2/3`, which means I'd have to modify the fractions every time I add a new choice.