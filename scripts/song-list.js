{
   album.songs.forEach( (song, index) => {
   song.element = $(`
        <tr>
        <td>
       <button>
         <span class="song-number">${index + 1}</span>
         <span class="ion-play">${song.title}</span>
         <span class="ion-pause">${song.duration}</span>
       </button>
     </td>
         </tr>
      `);

      song.element.on('click', event => {
       helper.playPauseAndUpdate(song);
      $('button#play-pause').attr('playState', player.playState);
     });

  $('#song-list').append(song.element);
});
 }
