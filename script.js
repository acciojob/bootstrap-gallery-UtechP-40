//your JS code here. If required.
$(document).ready(function(){
            $('.slider').slick({
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear'
            });

            $('#imageModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                var slideIndex = button.data('slide-to');
                $('.slider').slick('slickGoTo', parseInt(slideIndex));
            });
        });