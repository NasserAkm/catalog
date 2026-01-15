        lucide.createIcons();

        document.addEventListener('DOMContentLoaded', function() {

            const pageFlip = new St.PageFlip(document.getElementById('flipbook'), {
                width: 500,  
                height: 707, 
                size: "stretch",
                minWidth: 300,
                maxWidth: 1000,
                minHeight: 424,
                maxHeight: 1414,
                maxShadowOpacity: 0.5,
                showCover: true,
                mobileScrollSupport: false,
                usePortrait: true, 
                startPage: 0
            });


            pageFlip.loadFromHTML(document.querySelectorAll('.page'));


            document.getElementById('loader').style.display = 'none';
            document.getElementById('flipbook').style.display = 'block';


            document.getElementById('prevBtn').addEventListener('click', () => pageFlip.flipPrev());
            document.getElementById('nextBtn').addEventListener('click', () => pageFlip.flipNext());

            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') pageFlip.flipPrev();
                if (e.key === 'ArrowRight') pageFlip.flipNext();
            });
        });