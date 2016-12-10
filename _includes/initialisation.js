// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	history: true,
	{% for init in page.initialization %}
	{{ init[0] }}: "{{ init[1] }}",
	{% endfor %}
	// More info https://github.com/hakimel/reveal.js#dependencies
	dependencies: [
		{ src: '../public/js/section-markup.js' },
		//{ src: '//cdn.rawgit.com/hakimel/reveal.js/{{ site.reveal.version }}/plugin/markdown/marked.js' },
		//{ src: '//cdn.rawgit.com/hakimel/reveal.js/{{ site.reveal.version }}/plugin/markdown/markdown.js' },
		{ src: '//cdn.rawgit.com/hakimel/reveal.js/{{ site.reveal.version }}/plugin/notes/notes.js', async: true },
		{ src: '//cdn.rawgit.com/hakimel/reveal.js/{{ site.reveal.version }}/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
	]
});