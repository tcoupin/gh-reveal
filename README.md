# gh-reveal
Slides with [Reveal.js](https://github.com/hakimel/reveal.js) & [Jekyllrb](https://jekyllrb.com) for github pages

Demo at https://tcoupin.github.io/gh-reveal

## Run with docker

```
docker run --rm -it --label=jekyll -v $(pwd):/srv/jekyll -p 4000:4000 jekyll/jekyll jekyll serve --watch
```

or with drafts
```
docker run --rm -it --label=jekyll -v $(pwd):/srv/jekyll -p 4000:4000 jekyll/jekyll jekyll serve --watch --drafts
```