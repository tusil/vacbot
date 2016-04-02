// CONFIG
// how many messages
var vacbot_count_limit = 100;

// per x seconds
var vacbot_time_limit = 15;

// disable checking for x seconds after oddshot window is opened (we dont want to have 3 opened oddshots if people are spamming VAC for 45sec)
var vacbot_oddshot_limit = 50;

// message regexp - vac, VAC, VAAAAAAAAAAAAC, VVVVAAAAAACCCCCC
var vacbot_message_regexp = /v([a]+)c/i       

// do not edit things below
var vacbot_messages = [];
var vacbot_last_ember = 0;
var vacbot_last_oddshot = 0;

function vacbot_getLastMessages()
{
  $('.chat-lines li').each(function(i, li) {
    var ember = parseInt($(li).attr('id').replace('ember', ''));
    if (ember > vacbot_last_ember)
    {
      vacbot_last_ember = ember;
      if (vacbot_message_regexp.test($(li).find('.message').text()))
      {
        vacbot_messages.push(Date.now());
      }
    }  
  });
  
  // projedeme messages, starsi nez 8 vterin odmazeme a mladsi spocitame
  var vacbot_vac_count = 0;
  $(vacbot_messages).each(function(k, message) {
    if (message < (Date.now() - (vacbot_time_limit*1000)))
    {
      vacbot_messages.splice(k, 1);
    }
    else
    {
      vacbot_vac_count++;
    }
  });
  
  if (vacbot_vac_count > vacbot_count_limit && vacbot_last_oddshot < (Date.now() - (vacbot_oddshot_limit*1000)))
  {
    vacbot_last_oddshot = Date.now(); 
    $('#oddShotIcon').trigger('click');
  }
  
  $($('.channel-stats span')[3]).text('VAC: ' + vacbot_vac_count);
}

var vacbot_interval = setInterval(vacbot_getLastMessages, 2000);
