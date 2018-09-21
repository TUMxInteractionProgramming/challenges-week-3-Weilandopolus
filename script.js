console.log('app is alive')


function switchChannel(channelName) {
    $('#chat h1 a').html('#Yummy')
}
function switchChannel1(channelName) {
    $('#chat h1 a').html('#SevenContinents')
}

function switchChannel2(channelName) {
    $('#chat h1 a').html('#KillerApp')
}

function switchChannel3(channelName) {
    $('#chat h1 a').html('#FirstPersonOnMars')
}

function switchChannel4(channelName) {
    $('#chat h1 a').html('#Octoberfest')
}

$(document).ready(function() {

    $('#emojis-button').on('click', function(){
        $('#chat-menu').toggle();
    });
});
