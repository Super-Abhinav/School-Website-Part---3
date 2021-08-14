function btn() {
    document.getElementById("dd").innerHTML = "Takshila Educational Society laid the foundation of veritable learning in Patna by establishing Delhi Public School in the year 1998 in a collaborative effort with the Delhi Public Schools Society, which is one of the largest chains of CBSE schools in India. DPS Patna is affiliated to CBSE, New Delhi and offers schooling from Nursery to Class XII. The last twenty three years have been a journey where perseverance and progress have been the cornerstones. Today it can proudly claim to be one of the most sought after schools in Eastern India.Far from the bustling urban environs, DPS Patna is situated near the Army Cantonment at Danapur in village Chandmari. A marvel of modern architecture, the campus contains well-lit airy classrooms, outdoor theatre, performing art block, cafeteria, spacious courtyards for indoor games, and beautifully landscaped lawns."
}

 // scroll spy 

    $('section').each(function(){

      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let height = $(this).height();

      if(top > offset && top < offset + height){
        $('.navbar a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});


