var link = document.createElement( 'link' );
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match( /print-pdf/gi ) ? '//cdn.rawgit.com/hakimel/reveal.js/{{ site.reveal.version }}/css/print/pdf.css' : '//cdn.rawgit.com/hakimel/reveal.js/{{ site.reveal.version }}/css/print/paper.css';
document.getElementsByTagName( 'head' )[0].appendChild( link );