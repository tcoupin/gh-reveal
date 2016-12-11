// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	history: true,
	{% for init in page.initialization %}
	{{ init[0] }}: "{{ init[1] }}",
	{% endfor %}
	// More info https://github.com/hakimel/reveal.js#dependencies
	dependencies: [
		{ src: '../public/js/paragraph-markup.js' },
		{ src: '//cdn.rawgit.com/hakimel/reveal.js/{{ site.reveal.version }}/plugin/notes/notes.js', async: true },
		{ src: '//cdn.rawgit.com/hakimel/reveal.js/{{ site.reveal.version }}/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
	]
});