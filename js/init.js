Reveal.initialize({
    dependencies: [
        {src: 'plugin/markdown/marked.js'},
        {src: 'plugin/markdown/markdown.js'},
        {src: 'plugin/notes/notes.js', async: true},
        {
            src: 'plugin/highlight/highlight.js',
            async: true,
            callback: function() { hljs.initHighlightingOnLoad(); }
        }
    ]
});


$('section').each(function(i){
    let id = $(this).attr('id');
    $('#'+id).load(`slides/${id}.html`);
});
