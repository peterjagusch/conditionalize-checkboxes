$.noConflict();
jQuery(document).ready(function ($) {
    $('.conditional').conditionize({
        selector:'[data-condition]',
        onload: true,
        updateOn:['change', 'onLoad'],
        ifTrue: [ "show" ,"resetRadioFields"],
        ifFalse: [ "hide", "removeValuesWhenHidden" ]
    });

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.hidden_section { display: none !important; }';
    document.getElementsByTagName('head')[0].appendChild(style);

});