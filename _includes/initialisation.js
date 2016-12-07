// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	history: true,
	// More info https://github.com/hakimel/reveal.js#dependencies
	dependencies: [
		{ src: '//cdn.rawgit.com/hakimel/reveal.js/{{ site.reveal.version }}/plugin/markdown/marked.js' },
		{ src: '//cdn.rawgit.com/hakimel/reveal.js/{{ site.reveal.version }}/plugin/markdown/markdown.js' },
		{ src: '//cdn.rawgit.com/hakimel/reveal.js/{{ site.reveal.version }}/plugin/notes/notes.js', async: true },
		{ src: '//cdn.rawgit.com/hakimel/reveal.js/{{ site.reveal.version }}/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
	]
});