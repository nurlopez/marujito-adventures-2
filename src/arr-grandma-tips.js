var grannyTips = [
    'Potato slices on your face, cures headaches',
    'Feeling itchy? Olive oil for Eczema',
    'Have a little yogurt for that bad breath',
    'Ease your hangover with a teaspoon of apple cider vinegar',
    'Vodka for stinky feet',
    'Stop snoring with a glass of warm milk and tumeric powder',
    'Have you had enough to eat? Are you sure? Do you want a sandwich?',
    'When I was your age I had to walk to school uphill, both ways!',
    'If you can\'t say something nice, don\'t say anything at',
    'You catch more flies with honey than with vinegar',
    'Don\'t leave until tomorrow what you can do today'

]

function randomMsg(grannyTips) {
    return grannyTips[Math.floor(Math.random() * grannyTips.length)];

}

